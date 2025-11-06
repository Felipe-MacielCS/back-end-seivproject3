// app/controllers/auth.controller.js
import db from "../models/index.js";
import { OAuth2Client } from "google-auth-library";
import crypto from "crypto";

const User = db.user;
const Athlete = db.athlete;
const Session = db.session;
const google_id = process.env.CLIENT_ID;

const exportsObj = {};

// ---------------------- LOGIN ----------------------
exportsObj.login = async (req, res) => {
  try {
    const googleToken = req.body.credential;

    // Fields from the frontend (Signup.vue)
    const isAthlete = req.body.isAthlete || false;
    const sport = req.body.sport || null;
    const age = req.body.age || null;
    const weight = req.body.weight || null;
    const height = req.body.height || null;

    // ✅ Verify Google Token
    const client = new OAuth2Client(google_id);
    const ticket = await client.verifyIdToken({
      idToken: googleToken,
      audience: google_id,
    });
    const googleUser = ticket.getPayload();

    const email = googleUser.email;
    const name = `${googleUser.given_name} ${googleUser.family_name}`;

    // ✅ Check if user already exists
    let user = await User.findOne({ where: { email } });

    if (!user) {
      // Create new base user
      user = await User.create({
        name,
        email,
        isAdmin: false,
      });
      console.log("✅ New user created:", user.dataValues);

      // ✅ If the signup role was athlete, create the athlete profile
      if (isAthlete) {
        const athlete = await Athlete.create({
          userID: user.userID,
          sport,
          age,
          weight,
          height,
        });
        console.log("🏋️‍♂️ Athlete profile created:", athlete.dataValues);
      }
    } else {
      // If user exists, update name if it changed
      user.name = name;
      await user.save();
      console.log("✅ Existing user updated:", user.dataValues);
    }

    // ✅ Clean up any old sessions for this email
    await Session.destroy({ where: { email } });

    // ✅ Create new session
    const token = crypto.randomBytes(64).toString("hex");
    const expirationDate = new Date(Date.now() + 24 * 60 * 60 * 1000); // 1 day

    const session = await Session.create({
      email,
      token,
      expirationDate,
    });

    console.log("💾 New session created:", session.dataValues);

    // ✅ Send data back to the frontend
    res.send({
      userID: user.userID,
      email: user.email,
      name: user.name,
      isAdmin: user.isAdmin,
      token: session.token,
    });
  } catch (err) {
    console.error("❌ Login error:", err);
    res.status(500).send({ message: err.message });
  }
};

// ---------------------- AUTHORIZE ----------------------
exportsObj.authorize = async (req, res) => {
  try {
    console.log("⚙️ Authorize endpoint hit for user:", req.params.id);
    res.send({
      message: "Authorize endpoint active (placeholder).",
      userId: req.params.id,
    });
  } catch (err) {
    console.error("❌ Authorize error:", err);
    res.status(500).send({ message: err.message });
  }
};

// ---------------------- LOGOUT ----------------------
exportsObj.logout = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(400).send({ message: "No token provided" });
    }

    const token = authHeader.slice(7);
    const deleted = await Session.destroy({ where: { token } });

    if (deleted) {
      console.log("✅ Session deleted successfully.");
      res.send({ message: "User logged out successfully." });
    } else {
      res.status(404).send({ message: "Session not found." });
    }
  } catch (err) {
    console.error("❌ Logout error:", err);
    res.status(500).send({ message: "Error logging out user." });
  }
};

export default exportsObj;

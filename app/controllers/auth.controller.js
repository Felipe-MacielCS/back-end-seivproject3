import db from "../models/index.js";
import { OAuth2Client } from "google-auth-library";

const User = db.user;
const google_id = process.env.CLIENT_ID;
const exportsObj = {};

// ---------------------- LOGIN ----------------------
exportsObj.login = async (req, res) => {
  try {
    const googleToken = req.body.credential;

    // Verify Google Token
    const client = new OAuth2Client(google_id);
    const ticket = await client.verifyIdToken({
      idToken: googleToken,
      audience: google_id,
    });
    const googleUser = ticket.getPayload();

    let email = googleUser.email;
    let firstName = googleUser.given_name;
    let lastName = googleUser.family_name;

    // Check if user exists
    let user = await User.findOne({ where: { email: email } });

    if (!user) {
      // Create new user
      user = await User.create({
        name: `${firstName} ${lastName}`,
        email: email,
        isAdmin: false,
      });
      console.log("✅ New user created:", user.dataValues);
    } else {
      // Update name if changed
      user.name = `${firstName} ${lastName}`;
      await User.update(user.dataValues, { where: { userID: user.userID } });
      console.log("✅ Existing user updated:", user.dataValues);
    }

    // Send user info to frontend (no JWT)
    res.send({
      userID: user.userID,
      email: user.email,
      name: user.name,
      isAdmin: user.isAdmin,
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
    console.log("✅ User logged out (stateless Google session).");
    res.send({ message: "User logged out successfully." });
  } catch (err) {
    console.error("❌ Logout error:", err);
    res.status(500).send({ message: "Error logging out user." });
  }
};

export default exportsObj;

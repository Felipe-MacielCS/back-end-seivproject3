import routes from "./app/routes/index.js";
import express from "express";
import cors from "cors";
import db from "./app/models/index.js";

const app = express();

// ----------------------------------------
// DATABASE SYNC (disable force:true in prod)
// ----------------------------------------
db.sequelize.sync({ alter: true });

// ----------------------------------------
// CORS CONFIGURATION
// ----------------------------------------
const allowedOrigins = [
  "http://localhost:8081",                      // ✅ Local dev frontend
  "https://project3.eaglesoftwareteam.com",     // ✅ AWS production frontend
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (mobile apps, curl, etc)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

// ----------------------------------------
// PARSERS
// ----------------------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ----------------------------------------
// ROUTES
// ----------------------------------------
app.use("/tracker-t7", routes);

// ----------------------------------------
// START SERVER
// ----------------------------------------
const PORT = process.env.PORT || 3100;
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}.`);
  });
}

export default app;

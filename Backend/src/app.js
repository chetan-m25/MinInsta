const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  }),
);

// Require route handlers
const authRouter = require("./routes/auth.routes");
const postRouter = require("./routes/post.routes");
const followRouter = require("./routes/follow.routes");

// Use route handlers with appropriate prefixes
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/follow", followRouter);

module.exports = app;

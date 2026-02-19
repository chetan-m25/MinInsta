const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

// Require route handlers
const authRouter = require("./routes/auth.routes");
const postRouter = require("./routes/post.routes");

// Use route handlers with appropriate prefixes
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

module.exports = app;

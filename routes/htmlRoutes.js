const express = require("express");
const htmlRouter = express.Router();
const { join } = require("path");

htmlRouter.get("/", (req, res) => {
  res.sendFile(join(__dirname, "dist", "index.html"));
});

module.exports = htmlRouter;

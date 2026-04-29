const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "GitHub Actions Express demo is running",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
  });
});

app.get("/config-check", (req, res) => {
  res.json({
    environment: process.env.NODE_ENV || "developments",
    appName: process.env.APP_NAME || "No app name found",
  });
});

module.exports = app;
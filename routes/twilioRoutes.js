const express = require("express");
const axios = require("axios");
const twilioRouter = express.Router();
const { API_GATEWAY_ENDPOINT, API_GATEWAY_SECRET } = process.env;

twilioRouter.get("/messages", async (req, res) => {
  try {
    const results = await axios.get(API_GATEWAY_ENDPOINT, {
      headers: { "x-api-key": API_GATEWAY_SECRET }
    });
    res.json(results.data.message);
  } catch (err) {
    res.json(err);
  }
});

module.exports = twilioRouter;

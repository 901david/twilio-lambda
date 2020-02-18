const express = require("express");
const axios = require("axios");
const twilioRouter = express.Router();
const DataAnonymizer = require("data-anonymizer");
const Anonymizer = new DataAnonymizer({
  seed: "Some Super ecret seed *&%&$^%"
});

const { API_GATEWAY_ENDPOINT, API_GATEWAY_SECRET } = process.env;

twilioRouter.get("/messages", async (req, res) => {
  if (API_GATEWAY_SECRET === undefined) {
    res.sendStatus(403);
    return;
  }

  try {
    const results = await axios.get(API_GATEWAY_ENDPOINT, {
      headers: { "x-api-key": API_GATEWAY_SECRET }
    });
    const anonymizedMessages = results.data.message.map(message => {
      const fakeNumber = "+155555555";
      const accountSid = Anonymizer.anonymize(message.accountSid);
      const sid = Anonymizer.anonymize(message.sid);
      const from = fakeNumber;
      const to = fakeNumber;
      return { ...message, accountSid, sid, to, from };
    });

    res.json(anonymizedMessages);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = twilioRouter;

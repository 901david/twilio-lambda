// require("dotenv").config();
const Twilio = require("twilio");

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } = process.env;
const twilio = new Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

exports.handler = async (event, context, callback) => {
  try {
    const messages = await twilio.messages.list();

    callback(undefined, {
      status: 200,
      message: messages
    });
  } catch (err) {
    if (error) callback(error, undefined);
  }
};

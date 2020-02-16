// require("dotenv").config();
const Twilio = require("twilio");

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, to, from } = process.env;
const twilio = new Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

exports.handler = async (event, context, callback) => {
  try {
    const { message, type } = event;

    await twilio.messages.create({
      from,
      to,
      body: message
    });

    callback(undefined, {
      status: 200,
      message,
      type
    });
  } catch (err) {
    if (err) callback(err, undefined);
  }
};

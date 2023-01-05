const emailService = require("../services/emailService");

const get = async (req, res, next) => {
  var enviou = await emailService.checkConnection();

  var response = enviou ? "Is connected." : "Is not connected.";

  res.json({ message: response });
  next ();
};

module.exports = { get };

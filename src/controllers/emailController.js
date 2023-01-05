const emailService = require("../services/emailService");

const post = async (req, res, next) => {
  const { email, phone, name, message } = req.body;
  var emailToSend = drawEmail
    .replace("{{email}}", email)
    .replace("{{phone}}", phone)
    .replace("{{name}}", name)
    .replace("{{message}}", message);

  var sended = await emailService.wrapSendEmail(emailToSend);

  if(!sended) return res.status(500).send();

  return res.status(200).send();

};

module.exports = { post };

var drawEmail = `<!DOCTYPE html>
<html>
<style>
table, th, td {
  border:1px solid black;
}
</style>
<body>
<table style="width:100%">
  <tr>
    <th>Name</th>
    <th>Phone</th>
    <th>Message</th>
    <th>Email</th>
  </tr>
  <tr>
    <td>{{name}}</td>
    <td>{{phone}}</td>
    <td>{{message}}</td>
    <td>{{email}}</td>
  </tr>
</table>
</body>
</html>`;

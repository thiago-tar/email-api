const app = require('./app');
const port = process.env.EMAIL_API_PORT || 2000;
app.listen(port, () => console.log('Listen on port: ' + port));
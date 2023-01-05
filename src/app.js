require("dotenv").config()
const express = require("express");
const cors = require("cors");
const allowedAPIS = require('./middlewares/allowedAPI');
const corsOptions = require("./middlewares/corsOptions");
const routes = require("./routes");
const app = express();

app.use(cors(corsOptions));
app.use(allowedAPIS.checkAllowedApi);

app.use(express.json());
app.use(routes);

module.exports = app;
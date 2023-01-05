const express = require("express");
const router = express.Router();

const pingController = require("./controllers/pingController");
const emailController = require("./controllers/emailController");

router.get("/ping", pingController.get);

router.post("/email", emailController.post);

module.exports = router;
const express = require("express");
const router = express.Router();

const { submitApplication } = require("../Controllers/application");

router.post('/submit', submitApplication);

module.exports = router;
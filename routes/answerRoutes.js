const express = require("express");
const router = express.Router();
//answer controllers
const { postanswer } = require("../controller/answerController");
//authentication middleware
//const { postanswer, getallanswers} = require("../controller/answerController");
router.post("/postanswer", postanswer)
  

module.exports = router
const router = require('express').Router();
const testController = require('./test.controller.js');

router.use("/test", testController);

module.exports = router;
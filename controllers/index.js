const router = require('express').Router();
const testController = require('./test.controller.js');
const buildController = require('./build.controller');

router.use("/booster", buildController);

router.use("/test", testController);

module.exports = router;
const router = require('express').Router();
const testController = require('./test.controller.js');
const buildController = require('./build.controller.js');
const cardController = require('./card.controller.js');

router.use("/", cardController);

router.use("/booster", buildController);

router.use("/test", testController);

module.exports = router;
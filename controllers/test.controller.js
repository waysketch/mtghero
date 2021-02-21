const router = require("express").Router();

router.route("/")
.get(( _ , res) => {
    res.send("It's alive!!! mwhahahahahahahhah");
});

module.exports = router;
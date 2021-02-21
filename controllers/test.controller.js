const router = require("express").Router();

router.route("/")
.get(( _ , res) => {
    res.json({
        msg: "hello",
    });
});

module.exports = router;
const router = require("express").Router();
const path = require('path');
const fs = require('fs');

router.route("/:card")
    .get((req, res) => {
        console.log('hit');
        console.log(req.params);
        const card = req.params.card ? req.params.card : "error";

        switch (card.toLocaleLowerCase()) {
            case "back":
                res.sendFile( path.join(__dirname, './cards/back.jpg'));
                break;
            case "f" || "forest":
                res.sendFile( path.join(__dirname, './cards/forest.jpg'));
                break;
            case "i" || "island":
                res.sendFile( path.join(__dirname, './cards/island.jpg'));
                break;
            case "s" || "swamp":
                res.sendFile( path.join(__dirname, './cards/swamp.jpg'));
                break;
            case "p" || "plain" || "plains":
                res.sendFile( path.join(__dirname, './cards/plains.jpg'));
                break;
            case "m" || "mountain":
                res.sendFile( path.join(__dirname, './cards/mountain.jpg'));
                break;
            case "lands" || "land" || "l":
                res.sendFile( path.join(__dirname, './cards/lands.jpg'));
                break;
            case "clear" :
                const dir = path.join(__dirname, './temp');
                try {
                    fs.rmdirSync(dir, { recursive: true });
                    fs.mkdir(dir, () => {
                        res.json({msg: "its done"});
                    });
                } catch (error) {
                    console.log('meh');
                    res.json({msg: "broken"});
                };
                break;
            default:
                res.sendFile( path.join(__dirname, './cards/back.jpg'));
                break;
        };
    });

module.exports = router;
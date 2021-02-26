const router = require('express').Router();
const axios = require('axios');
const allSets = require('./current_sets.js');
const jimp = require('jimp');
const fs = require('fs'); // Built into NodeJS. DO NOT -- npm install fs
const path = require('path');

// /Booster/Set/nuberOfPacks

// https://mtghero.herokuapp.com/booster/:set
router.route("/:set").get((req, res) => {
    const { set } = req.params;
    let code = "error";

    // check if the set is in our list.
    allSets.forEach(item => { //TODO: use RegEx to remove special char. exp. Th'rl Thrl
        if (item.name.toLocaleLowerCase().indexOf(set.toLocaleLowerCase()) !== -1) {
            code = item.code;
            return;
        };
    });

    if (code === "error") {
        res.send(`unable to find a set matching ${set}`);
    };

    let allCardsInSet = [];
    const commonCards = [];
    const unCommonCards = [];
    const rareCards = [];
    const booster = [];
    const booster2 = [];
    const booster3 = [];
    // const booster4 = [];

    // use "set" to reach out to the API and return all the cards in that set.

    const scryfall_api_uri = "https://api.scryfall.com/sets/"; // as is this will return ALL sets.

    try {
        axios.get(`${scryfall_api_uri}/${code}`)
            .then(setList => {
                console.log('[NEW REQUEST][building]')
                // points to the card list

                // GETS ALL SETS AND RETURNS GOOD DATA
                // const searchableList = setList.data.data.map( thisSet => {
                //     if (thisSet.card_count > 100 && thisSet.set_type !== "promo" && thisSet.set_type !== "commander" && thisSet.set_type !== "starter" && thisSet.set_type !== "box"){
                //         return { name: thisSet.name, search_uri: thisSet.search_uri, code: thisSet.code };
                //     };
                // });

                // GET ALL CARDS
                axios.get(setList.data.search_uri)
                    .then(listOfCards => {
                        allCardsInSet = listOfCards.data.data;

                        axios.get(setList.data.search_uri + "&page=2")
                            .then(theRestOfTheCards => {
                                restOfTheCards = theRestOfTheCards.data.data;
                                restOfTheCards.forEach(card => {
                                    allCardsInSet.push(card);
                                });

                                console.log(`Total number of cards is ${allCardsInSet.length}`);
                                // FUNC. we can reuse this.
                                const getRandomCard = (arr) => {
                                    randomNum = Math.floor(Math.random() * arr.length);
                                    return arr[randomNum];
                                };

                                // FUNC. we need to reuse this
                                const addCardToBoosterPack = (arr, pack) => {

                                    let j = 0;

                                    let randomCard = getRandomCard(arr);

                                    while (pack.indexOf(randomCard) !== -1 || j > 5) {
                                        randomCard = getRandomCard(arr);
                                        j++;
                                        console.log(`FOUND A DUP!`);
                                    };

                                    pack.push(randomCard);
                                };

                                listOfAllCardImages = allCardsInSet.filter(card => card.type_line.indexOf("Basic Land") === -1).map((card) => {
                                    if (card.hasOwnProperty("rarity") && card.hasOwnProperty("image_uris")) { //sad days, EDGE cards with two sides dont show up
                                        switch (card.rarity) {
                                            case "common":
                                                commonCards.push(card.image_uris.normal);
                                                return card.image_uris.normal;
                                            case "uncommon":
                                                unCommonCards.push(card.image_uris.normal);
                                                return card.image_uris.normal;
                                            case "rare" || "mythic":
                                                rareCards.push(card.image_uris.normal);
                                                return card.image_uris.normal;
                                            case "rare":
                                                console.log('HOW DID YOU GET HERE???')
                                                rareCards.push(card.image_uris.normal);
                                                return card.image_uris.normal;
                                            case "mythic":
                                                rareCards.push(card.image_uris.normal);
                                                return card.image_uris.normal;
                                            default:
                                                break;
                                        };
                                    };
                                });

                                // COMMONS
                                for (i = 0; i < 10; i++) {
                                    addCardToBoosterPack(commonCards, booster);
                                    addCardToBoosterPack(commonCards, booster2);
                                    addCardToBoosterPack(commonCards, booster3);
                                };

                                // UNCOMMON
                                for (i = 0; i < 3; i++) {
                                    addCardToBoosterPack(unCommonCards, booster);
                                    addCardToBoosterPack(unCommonCards, booster2);
                                    addCardToBoosterPack(unCommonCards, booster3);
                                };

                                // RARE
                                for (i = 0; i < 1; i++) {
                                    addCardToBoosterPack(rareCards, booster);
                                    addCardToBoosterPack(rareCards, booster2);
                                    addCardToBoosterPack(rareCards, booster3);
                                };

                                // RANDOM CARD FROM SET *foil*
                                for (i = booster.length; i < 15; i++) {
                                    booster.push(getRandomCard(listOfAllCardImages));;
                                };
                                for (i = booster2.length; i < 15; i++) {
                                    booster2.push(getRandomCard(listOfAllCardImages));;
                                };
                                for (i = booster3.length; i < 15; i++) {
                                    booster3.push(getRandomCard(listOfAllCardImages));;
                                };
                                // for (i = booster4.length; i < 15; i++) {
                                //     booster4.push(getRandomCard(listOfAllCardImages));;
                                // };

                                // TURN INTO CARDS NOW THAT WE HAVE THE LIST OF IMAGES
                                if (booster.length === 15) {
                                    // === START JIMP === //
                                    console.log("[Check Point][Jimp] Start");

                                    const cardWidth = 488;
                                    const cardHeight = 680;
                                    let row = 0;
                                    let col = 0;
                                    let jimps = []; // this is the REAL img NOT the url
                                    let totalCallbacks = booster.length + booster2.length + booster3.length; //number of boster packs * 15

                                    console.log("[Check Point][Jimp] Loading callbacks");
                                    for (let i = 0; i < totalCallbacks; i++) {
                                        if (i < 15) {
                                            jimps.push(jimp.read(booster[i]));
                                        };
                                        if (i > 14 && i < 30) {
                                            jimps.push(jimp.read(booster2[i - 15]));
                                        };
                                        if (i > 29) {
                                            jimps.push(jimp.read(booster3[i - 30]));
                                        };
                                    };

                                    console.log("[Check Point][Jimp] Making Promises");
                                    Promise.all(jimps)
                                        .then(_ => {
                                            return Promise.all(jimps);
                                        })
                                        .then(data => {

                                            console.log("[Check Point][Jimp] Promises came back");

                                            jimp.read(__dirname + "/cards/white_board.jpg")
                                                .then(image => {
                                                    console.log("[Check Point][Jimp]Loading board and stickers");

                                                    for (let j = 0; j < 45; j++) {
                                                        image.quality(30);

                                                        image.composite(
                                                            data[j],
                                                            row * cardWidth,
                                                            col * cardHeight
                                                        );

                                                        if (row === 9) {
                                                            row = 0;
                                                            col++;
                                                        } else {
                                                            row++;
                                                        };
                                                    };
                                                    image.quality(40);

                                                    console.log("[Check Point][Jimp] Hold onto your butts.");
                                                    // res.send(image);

                                                    const fileName = Date.now();
                                                    const theHerokuPath = path.join(__dirname, `./temp/booster${fileName}.jpg`);
                                                    image.write(theHerokuPath, () => {
                                                        console.log("[Check Point][Jimp] Making a new image.");
                                                        // send file
                                                        res.sendFile(theHerokuPath, () => {
                                                            // delete file
                                                            try {
                                                                fs.unlinkSync(theHerokuPath, () => {
                                                                    console.log('[DELETE] Removed file that was just made')
                                                                });
                                                            } catch (error) {
                                                                console.log('[DELETE][ERROR] Unable to delete file')
                                                            };
                                                        });
                                                    });
                                                })
                                        })

                                    // TRY TO STORE ON DYNO IN HEROKU IF THAT DOESNT WORK THEN WE WILL HOOK UP AWS

                                    // SEND THE FILE WITH THE CARDS ON IT.

                                } else {
                                    res.json({ msg: "Booster Pack had less than 15 cards in it." });
                                };
                            })
                            .catch( err => {
                                console.log(err);
                                res.send('error');
                            })
                    })
                    .catch( err => {
                        console.log(err);
                        res.send("error");
                    })

            })
            .catch(_ => {
                res.json({ msg: "Something has gone wrong. IDK" });
            });
    } catch (_) {
        res.json({ msg: "Unable to get that set" });
    };
});

module.exports = router;
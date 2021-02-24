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
    allSets.forEach( item => { //TODO: use RegEx to remove special char. exp. Th'rl Thrl
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
    // use "set" to reach out to the API and return all the cards in that set.
    
    const scryfall_api_uri = "https://api.scryfall.com/sets/"; // as is this will return ALL sets.

    try {
        axios.get(`${scryfall_api_uri}/${code}`)
        .then( setList => {
            // points to the card list

            // GETS ALL SETS AND RETURNS GOOD DATA
            // const searchableList = setList.data.data.map( thisSet => {
            //     if (thisSet.card_count > 100 && thisSet.set_type !== "promo" && thisSet.set_type !== "commander" && thisSet.set_type !== "starter" && thisSet.set_type !== "box"){
            //         return { name: thisSet.name, search_uri: thisSet.search_uri, code: thisSet.code };
            //     };
            // });

            // GET ALL CARDS
            axios.get(setList.data.search_uri)
            .then( listOfCards => {
                allCardsInSet = listOfCards.data.data;
                
                // FUNC. we can reuse this.
                const getRandomCard = (arr) => {
                    randomNum = Math.floor(Math.random() * arr.length);
                    return arr[randomNum];
                };

                // FUNC. we need to reuse this
                const addCardToBoosterPack = (arr) => {

                    let j = 0;

                    let randomCard = getRandomCard(arr);

                    while (booster.indexOf(randomCard) !== -1 || j > 5){
                        randomCard = getRandomCard(arr);
                        j++;
                        console.log(`FOUND A DUP!`);
                    };

                    booster.push(randomCard);
                };

                listOfAllCardImages = allCardsInSet.map( (card) => {
                    if( card.hasOwnProperty("rarity") && card.hasOwnProperty("image_uris")) { //sad days, EDGE cards with two sides dont show up
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
                for(i = 0; i < 10; i++) {
                    addCardToBoosterPack(commonCards);
                };

                // UNCOMMON
                for(i = 0; i < 3; i++) {
                    addCardToBoosterPack(unCommonCards);
                };

                // RARE
                for(i = 0; i < 1; i++) {
                    addCardToBoosterPack(rareCards);
                };

                // RANDOM CARD FROM SET *foil*
                for(i = booster.length; i < 15; i++) {
                    booster.push(getRandomCard(listOfAllCardImages));;
                };

                // TURN INTO CARDS NOW THAT WE HAVE THE LIST OF IMAGES
                if (booster.length === 15) {
                    // === START JIMP === //
                    console.log("[Check Point][Jimp] Start");

                    const cardWidth = 488;
                    const cardHeight = 680;
                    let row = 0;
                    let col = 0;
                    let jimps = []; // this is the REAL img NOT the url
                    let totalCallbacks = booster.length; //number of boster packs * 15

                    console.log("[Check Point][Jimp] Loading callbacks");
                    for (let i = 0; i < totalCallbacks; i ++){
                        jimps.push(jimp.read(booster[i]));
                    };
                    // jimps is full of images now

                    console.log("[Check Point][Jimp] Making Promises");
                    Promise.all(jimps)
                    .then( _ => {
                        return Promise.all(jimps);
                    })
                    .then( data => {
                        
                        console.log("[Check Point][Jimp] Promises came back");

                        jimp.read(__dirname + "/temp/white_board.jpg")
                        .then( image => {
                            console.log("[Check Point][Jimp]Loading board and stickers");
                            
                            for ( let j = 0; j < jimps.length; j++){
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
                            const fileName = Date.now();
                            const theHerokuPath = path.join(__dirname, `./temp/booster${fileName}.jpg`);
                            image.write(theHerokuPath, () => {
                                console.log("[Check Point][Jimp] Making a new image.");
                                res.sendFile(theHerokuPath);
                            });
                        })
                    })

                    // TRY TO STORE ON DYNO IN HEROKU IF THAT DOESNT WORK THEN WE WILL HOOK UP AWS

                    // SEND THE FILE WITH THE CARDS ON IT.
            
                } else {
                    res.json({ msg: "Booster Pack had less than 15 cards in it."});
                };
            });
        })
        .catch( _ => {
            res.json({ msg: "Something has gone wrong. IDK" });
        });
    } catch ( _ ) {
        res.json({ msg: "Unable to get that set"});
    };
});

module.exports = router;
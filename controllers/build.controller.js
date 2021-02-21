const router = require('express').Router();
const axios = require('axios');
const allSets = require('./current_sets');

// /Booster/Set/nuberOfPacks

// https://mtghero.herokuapp.com/booster/:set
router.route("/:set").get((req, res) => {
    // Spelling checks
    const { set } = req.params;
    let allCardsInSet = [];
    const commonCards = [];
    const unCommonCards = [];
    const rareCards = [];
    const booster = []; 
    // use "set" to reach out to the API and return all the cards in that set.
    
    const scryfall_api_uri = "https://api.scryfall.com/sets/"; // as is this will return ALL sets.

    try {
        axios.get(`https://api.scryfall.com/sets`)
        .then( setList => {
            // points to the card list

            // GETS ALL SETS AND RETURNS GOOD DATA
            const searchableList = setList.data.data.map( thisSet => {
                if (thisSet.card_count > 100 && thisSet.set_type !== "promo" && thisSet.set_type !== "commander" && thisSet.set_type !== "starter" && thisSet.set_type !== "box"){
                    return { name: thisSet.name, search_uri: thisSet.search_uri, code: thisSet.code };
                };
            });

            res.json(searchableList);

            // GET ALL CARDS
            // axios.get(setList.data.search_uri)
            // .then( listOfCards => {
            //     allCardsInSet = listOfCards.data.data;

            //     listOfAllCardImages = allCardsInSet.map( (card) => {
            //         if( card.hasOwnProperty("rarity") && card.hasOwnProperty("image_uris")) {
            //             switch (card.rarity) {
            //                 case "common":
            //                     commonCards.push(card.image_uris.normal);
            //                     return card.image_uris.normal;
            //                 case "uncommon":
            //                     unCommonCards.push(card.image_uris.normal);
            //                     return card.image_uris.normal;
            //                 case "rare" || "mythic":
            //                     rareCards.push(card.image_uris.normal);
            //                     return card.image_uris.normal;
            //                 case "rare":
            //                     console.log('HOW DID YOU GET HERE???')
            //                     rareCards.push(card.image_uris.normal);
            //                     return card.image_uris.normal;
            //                 case "mythic":
            //                     rareCards.push(card.image_uris.normal);
            //                     return card.image_uris.normal;
            //                 default:
            //                     break;
            //             };
            //         };
            //     });

            //     for(i = 0; i < 15; i++) {
            //         randomNum = Math.floor(Math.random() * listOfAllCardImages.length);
            //         booster.push(listOfAllCardImages[randomNum]);
            //     };

            //     // SEND FROM HERE!!
            //     res.json(booster);
            // });
        })
        .catch( _ => {
            res.send("Something has gone wrong. IDK");
        });
    } catch (error) {
        res.send("Unable to get that set");
    };
    
    // EDGE: loop => exit
    // STEP 0: make empty booster = ["url", "url"] .length is 15
    // STEP 1: random land / token if set has tokens
    // STEP 2: 1 random card => CARD ART URLS
    // STEP 3: Put all 3 types into their own Array
    // STEP 4: 10 cards from c (no dup)
    // STEP 5: 3 cards from u (no dup)
    // STEP 6: 1 r(m)
});

module.exports = router;
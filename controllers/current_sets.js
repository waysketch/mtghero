const allSets = [
    {
        "name": "Kaldheim",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Akhm&unique=prints",
        "code": "khm"
    },
    {
        "name": "Commander Legends",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Acmr&unique=prints",
        "code": "cmr"
    },
    {
        "name": "Kaladesh Remastered",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aklr&unique=prints",
        "code": "klr"
    },
    {
        "name": "The List",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aplist&unique=prints",
        "code": "plist"
    },
    {
        "name": "Zendikar Rising",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aznr&unique=prints",
        "code": "znr"
    },
    {
        "name": "Amonkhet Remastered",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aakr&unique=prints",
        "code": "akr"
    },
    {
        "name": "Double Masters",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3A2xm&unique=prints",
        "code": "2xm"
    },
    {
        "name": "Jumpstart",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Ajmp&unique=prints",
        "code": "jmp"
    },
    {
        "name": "Core Set 2021",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Am21&unique=prints",
        "code": "m21"
    },
    {
        "name": "Ikoria: Lair of Behemoths",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aiko&unique=prints",
        "code": "iko"
    },
    {
        "name": "Mystery Booster Retail Edition Foils",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Afmb1&unique=prints",
        "code": "fmb1"
    },
    {
        "name": "Theros Beyond Death",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
        "code": "thb"
    },
    {
        "name": "Mystery Booster Playtest Cards",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Acmb1&unique=prints",
        "code": "cmb1"
    },
    {
        "name": "Mystery Booster",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Amb1&unique=prints",
        "code": "mb1"
    },
    {
        "name": "Throne of Eldraine",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aeld&unique=prints",
        "code": "eld"
    },
    {
        "name": "Core Set 2020",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Am20&unique=prints",
        "code": "m20"
    },
    {
        "name": "Modern Horizons",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Amh1&unique=prints",
        "code": "mh1"
    },
    {
        "name": "War of the Spark",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Awar&unique=prints",
        "code": "war"
    },
    {
        "name": "Ravnica Allegiance",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Arna&unique=prints",
        "code": "rna"
    },
    {
        "name": "Ultimate Masters",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Auma&unique=prints",
        "code": "uma"
    },
    {
        "name": "Guilds of Ravnica",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Agrn&unique=prints",
        "code": "grn"
    },
    {
        "name": "Core Set 2019",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Am19&unique=prints",
        "code": "m19"
    },
    {
        "name": "Battlebond",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Abbd&unique=prints",
        "code": "bbd"
    },
    {
        "name": "Dominaria",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Adom&unique=prints",
        "code": "dom"
    },
    {
        "name": "Masters 25",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aa25&unique=prints",
        "code": "a25"
    },
    {
        "name": "Rivals of Ixalan",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Arix&unique=prints",
        "code": "rix"
    },
    {
        "name": "Unstable",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aust&unique=prints",
        "code": "ust"
    },
    {
        "name": "Iconic Masters",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aima&unique=prints",
        "code": "ima"
    },
    {
        "name": "Ixalan",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Axln&unique=prints",
        "code": "xln"
    },
    {
        "name": "Hour of Devastation",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Ahou&unique=prints",
        "code": "hou"
    },
    {
        "name": "Archenemy: Nicol Bolas",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Ae01&unique=prints",
        "code": "e01"
    },
    {
        "name": "Amonkhet",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aakh&unique=prints",
        "code": "akh"
    },
    {
        "name": "Modern Masters 2017",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Amm3&unique=prints",
        "code": "mm3"
    },
    {
        "name": "Aether Revolt",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aaer&unique=prints",
        "code": "aer"
    },
    {
        "name": "Planechase Anthology",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Apca&unique=prints",
        "code": "pca"
    },
    {
        "name": "Treasure Chest",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Apz2&unique=prints",
        "code": "pz2"
    },
    {
        "name": "Kaladesh",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Akld&unique=prints",
        "code": "kld"
    },
    {
        "name": "Conspiracy: Take the Crown",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Acn2&unique=prints",
        "code": "cn2"
    },
    {
        "name": "Eldritch Moon",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aemn&unique=prints",
        "code": "emn"
    },
    {
        "name": "Eternal Masters",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aema&unique=prints",
        "code": "ema"
    },
    {
        "name": "Shadows over Innistrad",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Asoi&unique=prints",
        "code": "soi"
    },
    {
        "name": "Oath of the Gatewatch",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aogw&unique=prints",
        "code": "ogw"
    },
    {
        "name": "Legendary Cube Prize Pack",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Apz1&unique=prints",
        "code": "pz1"
    },
    {
        "name": "Battle for Zendikar",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Abfz&unique=prints",
        "code": "bfz"
    },
    {
        "name": "Magic Origins",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aori&unique=prints",
        "code": "ori"
    },
    {
        "name": "Modern Masters 2015",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Amm2&unique=prints",
        "code": "mm2"
    },
    {
        "name": "Tempest Remastered",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Atpr&unique=prints",
        "code": "tpr"
    },
    {
        "name": "Dragons of Tarkir",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Adtk&unique=prints",
        "code": "dtk"
    },
    {
        "name": "Fate Reforged",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Afrf&unique=prints",
        "code": "frf"
    },
    {
        "name": "Khans of Tarkir",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aktk&unique=prints",
        "code": "ktk"
    },
    {
        "name": "Magic 2015",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Am15&unique=prints",
        "code": "m15"
    },
    {
        "name": "Vintage Masters",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Avma&unique=prints",
        "code": "vma"
    },
    {
        "name": "Conspiracy",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Acns&unique=prints",
        "code": "cns"
    },
    {
        "name": "Journey into Nyx",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Ajou&unique=prints",
        "code": "jou"
    },
    {
        "name": "Born of the Gods",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Abng&unique=prints",
        "code": "bng"
    },
    {
        "name": "Theros",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aths&unique=prints",
        "code": "ths"
    },
    {
        "name": "Magic 2014",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Am14&unique=prints",
        "code": "m14"
    },
    {
        "name": "Modern Masters",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Amma&unique=prints",
        "code": "mma"
    },
    {
        "name": "Dragon's Maze",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Adgm&unique=prints",
        "code": "dgm"
    },
    {
        "name": "Gatecrash",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Agtc&unique=prints",
        "code": "gtc"
    },
    {
        "name": "Return to Ravnica",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Artr&unique=prints",
        "code": "rtr"
    },
    {
        "name": "Magic 2013",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Am13&unique=prints",
        "code": "m13"
    },
    {
        "name": "Planechase 2012",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Apc2&unique=prints",
        "code": "pc2"
    },
    {
        "name": "Avacyn Restored",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aavr&unique=prints",
        "code": "avr"
    },
    {
        "name": "Dark Ascension",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Adka&unique=prints",
        "code": "dka"
    },
    {
        "name": "Innistrad",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aisd&unique=prints",
        "code": "isd"
    },
    {
        "name": "Magic 2012",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Am12&unique=prints",
        "code": "m12"
    },
    {
        "name": "New Phyrexia",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Anph&unique=prints",
        "code": "nph"
    },
    {
        "name": "Mirrodin Besieged",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Ambs&unique=prints",
        "code": "mbs"
    },
    {
        "name": "Masters Edition IV",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Ame4&unique=prints",
        "code": "me4"
    },
    {
        "name": "Scars of Mirrodin",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Asom&unique=prints",
        "code": "som"
    },
    {
        "name": "Magic 2011",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Am11&unique=prints",
        "code": "m11"
    },
    {
        "name": "Archenemy",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aarc&unique=prints",
        "code": "arc"
    },
    {
        "name": "Rise of the Eldrazi",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aroe&unique=prints",
        "code": "roe"
    },
    {
        "name": "Worldwake",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Awwk&unique=prints",
        "code": "wwk"
    },
    {
        "name": "Zendikar",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Azen&unique=prints",
        "code": "zen"
    },
    {
        "name": "Masters Edition III",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Ame3&unique=prints",
        "code": "me3"
    },
    {
        "name": "Planechase",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Ahop&unique=prints",
        "code": "hop"
    },
    {
        "name": "Magic 2010",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Am10&unique=prints",
        "code": "m10"
    },
    {
        "name": "Alara Reborn",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aarb&unique=prints",
        "code": "arb"
    },
    {
        "name": "Conflux",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Acon&unique=prints",
        "code": "con"
    },
    {
        "name": "Shards of Alara",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aala&unique=prints",
        "code": "ala"
    },
    {
        "name": "Masters Edition II",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Ame2&unique=prints",
        "code": "me2"
    },
    {
        "name": "Eventide",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aeve&unique=prints",
        "code": "eve"
    },
    {
        "name": "Shadowmoor",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Ashm&unique=prints",
        "code": "shm"
    },
    {
        "name": "Morningtide",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Amor&unique=prints",
        "code": "mor"
    },
    {
        "name": "Lorwyn",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Alrw&unique=prints",
        "code": "lrw"
    },
    {
        "name": "Masters Edition",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Ame1&unique=prints",
        "code": "me1"
    },
    {
        "name": "Tenth Edition",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3A10e&unique=prints",
        "code": "10e"
    },
    {
        "name": "Future Sight",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Afut&unique=prints",
        "code": "fut"
    },
    {
        "name": "Planar Chaos",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aplc&unique=prints",
        "code": "plc"
    },
    {
        "name": "Time Spiral",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Atsp&unique=prints",
        "code": "tsp"
    },
    {
        "name": "Coldsnap",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Acsp&unique=prints",
        "code": "csp"
    },
    {
        "name": "Dissension",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Adis&unique=prints",
        "code": "dis"
    },
    {
        "name": "Guildpact",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Agpt&unique=prints",
        "code": "gpt"
    },
    {
        "name": "Ravnica: City of Guilds",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Arav&unique=prints",
        "code": "rav"
    },
    {
        "name": "Ninth Edition",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3A9ed&unique=prints",
        "code": "9ed"
    },
    {
        "name": "Saviors of Kamigawa",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Asok&unique=prints",
        "code": "sok"
    },
    {
        "name": "Betrayers of Kamigawa",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Abok&unique=prints",
        "code": "bok"
    },
    {
        "name": "Unhinged",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aunh&unique=prints",
        "code": "unh"
    },
    {
        "name": "Champions of Kamigawa",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Achk&unique=prints",
        "code": "chk"
    },
    {
        "name": "World Championship Decks 2004",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Awc04&unique=prints",
        "code": "wc04"
    },
    {
        "name": "Fifth Dawn",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3A5dn&unique=prints",
        "code": "5dn"
    },
    {
        "name": "Darksteel",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Adst&unique=prints",
        "code": "dst"
    },
    {
        "name": "Mirrodin",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Amrd&unique=prints",
        "code": "mrd"
    },
    {
        "name": "World Championship Decks 2003",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Awc03&unique=prints",
        "code": "wc03"
    },
    {
        "name": "Eighth Edition",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3A8ed&unique=prints",
        "code": "8ed"
    },
    {
        "name": "Scourge",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Ascg&unique=prints",
        "code": "scg"
    },
    {
        "name": "Legions",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Algn&unique=prints",
        "code": "lgn"
    },
    {
        "name": "Onslaught",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aons&unique=prints",
        "code": "ons"
    },
    {
        "name": "World Championship Decks 2002",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Awc02&unique=prints",
        "code": "wc02"
    },
    {
        "name": "Judgment",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Ajud&unique=prints",
        "code": "jud"
    },
    {
        "name": "Torment",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Ator&unique=prints",
        "code": "tor"
    },
    {
        "name": "Odyssey",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aody&unique=prints",
        "code": "ody"
    },
    {
        "name": "World Championship Decks 2001",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Awc01&unique=prints",
        "code": "wc01"
    },
    {
        "name": "Apocalypse",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aapc&unique=prints",
        "code": "apc"
    },
    {
        "name": "Seventh Edition",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3A7ed&unique=prints",
        "code": "7ed"
    },
    {
        "name": "Planeshift",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Apls&unique=prints",
        "code": "pls"
    },
    {
        "name": "Invasion",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Ainv&unique=prints",
        "code": "inv"
    },
    {
        "name": "World Championship Decks 2000",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Awc00&unique=prints",
        "code": "wc00"
    },
    {
        "name": "Prophecy",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Apcy&unique=prints",
        "code": "pcy"
    },
    {
        "name": "Nemesis",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Anem&unique=prints",
        "code": "nem"
    },
    {
        "name": "Mercadian Masques",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Ammq&unique=prints",
        "code": "mmq"
    },
    {
        "name": "World Championship Decks 1999",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Awc99&unique=prints",
        "code": "wc99"
    },
    {
        "name": "Urza's Destiny",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Auds&unique=prints",
        "code": "uds"
    },
    {
        "name": "Classic Sixth Edition",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3A6ed&unique=prints",
        "code": "6ed"
    },
    {
        "name": "Urza's Legacy",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aulg&unique=prints",
        "code": "ulg"
    },
    {
        "name": "Urza's Saga",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Ausg&unique=prints",
        "code": "usg"
    },
    {
        "name": "World Championship Decks 1998",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Awc98&unique=prints",
        "code": "wc98"
    },
    {
        "name": "Exodus",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aexo&unique=prints",
        "code": "exo"
    },
    {
        "name": "Stronghold",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Asth&unique=prints",
        "code": "sth"
    },
    {
        "name": "Tempest",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Atmp&unique=prints",
        "code": "tmp"
    },
    {
        "name": "World Championship Decks 1997",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Awc97&unique=prints",
        "code": "wc97"
    },
    {
        "name": "Weatherlight",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Awth&unique=prints",
        "code": "wth"
    },
    {
        "name": "Fifth Edition",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3A5ed&unique=prints",
        "code": "5ed"
    },
    {
        "name": "Visions",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Avis&unique=prints",
        "code": "vis"
    },
    {
        "name": "Mirage",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Amir&unique=prints",
        "code": "mir"
    },
    {
        "name": "Alliances",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aall&unique=prints",
        "code": "all"
    },
    {
        "name": "Pro Tour Collector Set",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aptc&unique=prints",
        "code": "ptc"
    },
    {
        "name": "Homelands",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Ahml&unique=prints",
        "code": "hml"
    },
    {
        "name": "Renaissance",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aren&unique=prints",
        "code": "ren"
    },
    {
        "name": "Chronicles",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Achr&unique=prints",
        "code": "chr"
    },
    {
        "name": "Ice Age",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aice&unique=prints",
        "code": "ice"
    },
    {
        "name": "Fourth Edition Foreign Black Border",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3A4bb&unique=prints",
        "code": "4bb"
    },
    {
        "name": "Fourth Edition",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3A4ed&unique=prints",
        "code": "4ed"
    },
    {
        "name": "Fallen Empires",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Afem&unique=prints",
        "code": "fem"
    },
    {
        "name": "The Dark",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Adrk&unique=prints",
        "code": "drk"
    },
    {
        "name": "Summer Magic / Edgar",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Asum&unique=prints",
        "code": "sum"
    },
    {
        "name": "Legends",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aleg&unique=prints",
        "code": "leg"
    },
    {
        "name": "Foreign Black Border",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Afbb&unique=prints",
        "code": "fbb"
    },
    {
        "name": "Revised Edition",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3A3ed&unique=prints",
        "code": "3ed"
    },
    {
        "name": "Antiquities",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aatq&unique=prints",
        "code": "atq"
    },
    {
        "name": "Intl. Collectors’ Edition",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Acei&unique=prints",
        "code": "cei"
    },
    {
        "name": "Collectors’ Edition",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aced&unique=prints",
        "code": "ced"
    },
    {
        "name": "Unlimited Edition",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3A2ed&unique=prints",
        "code": "2ed"
    },
    {
        "name": "Limited Edition Beta",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aleb&unique=prints",
        "code": "leb"
    },
    {
        "name": "Limited Edition Alpha",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Alea&unique=prints",
        "code": "lea"
    }
]
module.exports = allSets;
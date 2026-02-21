const offlineGamesList = [
  // --- Original/Popular List ---
  { "appid": "752590", "name": "A Plague Tale: Innocence", "storageGB": 42, "notes": "Story-driven adventure.", "offlinePlayable": true },
  { "appid": "413150", "name": "Stardew Valley", "storageGB": 0.5, "notes": "Farming sim.", "offlinePlayable": true },
  { "appid": "292030", "name": "The Witcher 3: Wild Hunt", "storageGB": 50, "notes": "Masterpiece RPG.", "offlinePlayable": true },
  { "appid": "1174180", "name": "Red Dead Redemption 2", "storageGB": 120, "notes": "Epic western.", "offlinePlayable": true },
  { "appid": "1091500", "name": "Cyberpunk 2077", "storageGB": 70, "notes": "Futuristic RPG.", "offlinePlayable": true },
  { "appid": "1245620", "name": "Elden Ring", "storageGB": 60, "notes": "Souls-like RPG.", "offlinePlayable": true },
  { "appid": "502010", "name": "Monster Hunter: World", "storageGB": 110, "notes": "Action RPG.", "offlinePlayable": true },
  { "appid": "271590", "name": "Grand Theft Auto V", "storageGB": 110, "notes": "Open world action.", "offlinePlayable": true },
  { "appid": "12210", "name": "Grand Theft Auto IV: The Complete Edition", "storageGB": 22, "offlinePlayable": true },
  { "appid": "1547000", "name": "Grand Theft Auto: San Andreas – The Definitive Edition", "storageGB": 19, "offlinePlayable": true },
  { "appid": "1546990", "name": "Grand Theft Auto: Vice City – The Definitive Edition", "storageGB": 10, "offlinePlayable": true },
  { "appid": "1546970", "name": "Grand Theft Auto III – The Definitive Edition", "storageGB": 5, "offlinePlayable": true },
  { "appid": "12200", "name": "Bully: Scholarship Edition", "storageGB": 4.5, "offlinePlayable": true },
  { "appid": "377160", "name": "Fallout 4", "storageGB": 30, "notes": "Post-apocalyptic RPG.", "offlinePlayable": true },
  { "appid": "489830", "name": "The Elder Scrolls V: Skyrim SE", "storageGB": 12, "notes": "Fantasy RPG.", "offlinePlayable": true },

  // --- User Provided List (Mapped to AppIDs) ---
  { "appid": "44350", "name": "GRID 2", "storageGB": 8.65, "offlinePlayable": true, "description": "Be fast, be first and be famous as the race returns in GRID 2, the sequel to the BAFTA-award winning, multi-million selling Race Driver: GRID." },
  { "appid": "255220", "name": "GRID Autosport", "storageGB": 15.7, "offlinePlayable": true, "description": "It's all about the teams, the rivals and the race in an intense new world of professional motorsport." },
  { "appid": "1240440", "name": "Halo Infinite", "storageGB": 51, "offlinePlayable": true },
  { "appid": "438490", "name": "God Eater 2 Rage Burst", "storageGB": 14, "offlinePlayable": true },
  { "appid": "899440", "name": "God Eater 3", "storageGB": 30, "offlinePlayable": true },
  { "appid": "962130", "name": "Grounded", "storageGB": 11.1, "offlinePlayable": true },
  { "appid": "1583230", "name": "High On Life", "storageGB": 52, "offlinePlayable": true },
  { "appid": "863550", "name": "HITMAN 2", "storageGB": 40.1, "offlinePlayable": true },
  { "appid": "1659040", "name": "HITMAN 3", "storageGB": 80, "offlinePlayable": true },
  { "appid": "203140", "name": "Hitman: Absolution", "storageGB": 23.6, "offlinePlayable": true },
  { "appid": "6860", "name": "Hitman: Blood Money", "storageGB": 4.16, "offlinePlayable": true },
  { "appid": "1620730", "name": "Hell is Us", "storageGB": 21, "offlinePlayable": true },
  { "appid": "367520", "name": "Hollow Knight", "storageGB": 2, "offlinePlayable": true },
  { "appid": "1030300", "name": "Hollow Knight: Silksong", "storageGB": 2.2, "offlinePlayable": true },
  { "appid": "611790", "name": "House Party", "storageGB": 5.1, "offlinePlayable": true },
  { "appid": "990080", "name": "Hogwarts Legacy", "storageGB": 74, "offlinePlayable": true },
  { "appid": "2456420", "name": "HUNTER×HUNTER NEN×IMPACT", "storageGB": 2.13, "offlinePlayable": true }, // Corrected ID
  { "appid": "627270", "name": "Injustice 2", "storageGB": 38.9, "offlinePlayable": true },
  { "appid": "1426210", "name": "It Takes Two", "storageGB": 44.7, "offlinePlayable": true },
  { "appid": "648350", "name": "Jurassic World Evolution", "storageGB": 4, "offlinePlayable": true },
  { "appid": "1244460", "name": "Jurassic World Evolution 2", "storageGB": 10.3, "offlinePlayable": true },
  { "appid": "1877020", "name": "JUJUTSU KAISEN CURSED CLASH", "storageGB": 18.2, "offlinePlayable": true },
  { "appid": "816020", "name": "JUMP FORCE", "storageGB": 22.4, "offlinePlayable": true },
  { "appid": "517630", "name": "Just Cause 4", "storageGB": 49.9, "offlinePlayable": true },
  { "appid": "379430", "name": "Kingdom Come: Deliverance", "storageGB": 83, "offlinePlayable": true },
  { "appid": "2601270", "name": "Kong: Survivor Instinct", "storageGB": 7.7, "offlinePlayable": true },
  { "appid": "2405310", "name": "KIBORG", "storageGB": 22, "offlinePlayable": true },
  { "appid": "2658450", "name": "Lollipop Chainsaw RePOP", "storageGB": 14.3, "offlinePlayable": true },
  { "appid": "647830", "name": "LEGO Marvel Super Heroes 2", "storageGB": 23.4, "offlinePlayable": true },
  { "appid": "920210", "name": "LEGO Star Wars: The Skywalker Saga", "storageGB": 40, "offlinePlayable": true },
  { "appid": "313690", "name": "LEGO Batman 3: Beyond Gotham", "storageGB": 12.1, "offlinePlayable": true },
  { "appid": "550", "name": "Left 4 Dead 2", "storageGB": 13.7, "offlinePlayable": true },
  { "appid": "500", "name": "Left 4 Dead", "storageGB": 10, "offlinePlayable": true }, // Corrected ID (L4D1)
  { "appid": "1627720", "name": "Lies of P", "storageGB": 61.4, "offlinePlayable": true },
  { "appid": "424840", "name": "Little Nightmares", "storageGB": 8, "offlinePlayable": true },
  { "appid": "860510", "name": "Little Nightmares II", "storageGB": 15, "offlinePlayable": true },
  { "appid": "1392860", "name": "Little Nightmares III", "storageGB": 13, "offlinePlayable": true },
  { "appid": "1501750", "name": "Lords of the Fallen (2023)", "storageGB": 34.1, "offlinePlayable": true },
  { "appid": "554620", "name": "Life is Strange: Before the Storm", "storageGB": 19.6, "offlinePlayable": true },
  { "appid": "110800", "name": "L.A. Noire", "storageGB": 13.4, "offlinePlayable": true },
  { "appid": "1928870", "name": "Minecraft Legends", "storageGB": 10, "offlinePlayable": true },
  { "appid": "1030830", "name": "Mafia II: Definitive Edition", "storageGB": 33.4, "offlinePlayable": true },
  { "appid": "1030840", "name": "Mafia: Definitive Edition", "storageGB": 27.5, "offlinePlayable": true },
  { "appid": "360430", "name": "Mafia III: Definitive Edition", "storageGB": 54.1, "offlinePlayable": true },
  { "appid": "2634890", "name": "MARVEL vs. CAPCOM Fighting Collection", "storageGB": 5, "offlinePlayable": true },
  { "appid": "997070", "name": "Marvel's Avengers", "storageGB": 184, "offlinePlayable": true },
  { "appid": "1088850", "name": "Marvel's Guardians of the Galaxy", "storageGB": 76.2, "offlinePlayable": true },
  
  // Custom Entry for Spider-Man 2
  { 
    "appid": "custom_sm2", 
    "name": "Marvel's Spider-Man 2", 
    "storageGB": 90, 
    "offlinePlayable": true,
    "image": "https://upload.wikimedia.org/wikipedia/en/2/23/Marvel%27s_Spider-Man_2_cover_art.jpg",
    "description": "Peter Parker and Miles Morales swing into a new open-world adventure with fast traversal, dual combat styles, and a cinematic story in Marvel's Spider-Man 2.",
    "pc_requirements": {
      "minimum": "<strong>OS:</strong> Windows 10/11 64-bit<br><strong>Processor:</strong> Intel Core i5-4670 / AMD Ryzen 3 1200<br><strong>Memory:</strong> 16 GB RAM<br><strong>Graphics:</strong> NVIDIA GeForce GTX 1060 (6 GB) / AMD Radeon RX 580 (8 GB)<br><strong>Storage:</strong> 90 GB SSD",
      "recommended": "<strong>OS:</strong> Windows 10/11 64-bit<br><strong>Processor:</strong> Intel Core i7-8700 / AMD Ryzen 5 3600<br><strong>Memory:</strong> 16 GB RAM<br><strong>Graphics:</strong> NVIDIA GeForce RTX 2060 / AMD Radeon RX 6600<br><strong>Storage:</strong> 90 GB SSD"
    }
  },
  
  { "appid": "1817190", "name": "Marvel's Spider-Man: Miles Morales", "storageGB": 48.3, "offlinePlayable": true },
  { "appid": "1817070", "name": "Marvel's Spider-Man Remastered", "storageGB": 66, "offlinePlayable": true },
  { "appid": "260570", "name": "Spider-Man: Shattered Dimensions", "storageGB": 15, "offlinePlayable": true },
  { "appid": "2364200", "name": "METAL SLUG ATTACK RELOADED", "storageGB": 3, "offlinePlayable": true, "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2364200/library_hero.jpg" },
  { "appid": "1328670", "name": "Mass Effect Legendary Edition", "storageGB": 80, "offlinePlayable": true },
  { "appid": "204100", "name": "Max Payne 3", "storageGB": 36, "offlinePlayable": true },
  { "appid": "200230", "name": "Medal of Honor: Warfighter", "storageGB": 32, "offlinePlayable": true },
  { "appid": "235460", "name": "METAL GEAR RISING: REVENGEANCE", "storageGB": 25, "offlinePlayable": true },
  { "appid": "287700", "name": "METAL GEAR SOLID V: THE PHANTOM PAIN", "storageGB": 28.5, "offlinePlayable": true },
  { "appid": "2131640", "name": "METAL GEAR SOLID DELTA: SNAKE EATER", "storageGB": 100, "offlinePlayable": true },
  { "appid": "356190", "name": "Middle-earth: Shadow of War", "storageGB": 98, "offlinePlayable": true },
  { "appid": "1446780", "name": "MONSTER HUNTER RISE", "storageGB": 38, "offlinePlayable": true },
  { "appid": "976310", "name": "Mortal Kombat 11", "storageGB": 143, "offlinePlayable": true },
  { "appid": "307780", "name": "Mortal Kombat X", "storageGB": 40, "offlinePlayable": true },
  { "appid": "237110", "name": "Mortal Kombat Komplete Edition", "storageGB": 10, "offlinePlayable": true },
  { "appid": "2585040", "name": "MotoGP 24", "storageGB": 27, "offlinePlayable": true },
  { "appid": "996770", "name": "Moving Out", "storageGB": 0.7, "offlinePlayable": true },
  { "appid": "1646700", "name": "Moving Out 2", "storageGB": 1.35, "offlinePlayable": true },
  { "appid": "1018160", "name": "MXGP 2019", "storageGB": 12.3, "offlinePlayable": true },
  { "appid": "748360", "name": "MY HERO ONE'S JUSTICE", "storageGB": 11.2, "offlinePlayable": true },
  { "appid": "1058450", "name": "MY HERO ONE'S JUSTICE 2", "storageGB": 12, "offlinePlayable": true },
  { "appid": "4950", "name": "NARUTO SHIPPUDEN: Ultimate Ninja STORM", "storageGB": 7.54, "offlinePlayable": true, "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4950/header.jpg" },
  { "appid": "5430", "name": "NARUTO SHIPPUDEN: Ultimate Ninja STORM 2", "storageGB": 7.11, "offlinePlayable": true, "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/5430/header.jpg" },
  { "appid": "234670", "name": "NARUTO SHIPPUDEN: Ultimate Ninja STORM 3", "storageGB": 16.2, "offlinePlayable": true },
  { "appid": "349040", "name": "NARUTO SHIPPUDEN: Ultimate Ninja STORM 4", "storageGB": 38.9, "offlinePlayable": true },
  { "appid": "633230", "name": "NARUTO TO BORUTO: SHINOBI STRIKER", "storageGB": 28.5, "offlinePlayable": true },
  { "appid": "992310", "name": "NARUTO X BORUTO Ultimate Ninja STORM CONNECTIONS", "storageGB": 29.4, "offlinePlayable": true },
  { "appid": "272510", "name": "NARUTO SHIPPUDEN: Ultimate Ninja STORM REVOLUTION", "storageGB": 7.52, "offlinePlayable": true },
  { "appid": "25760", "name": "NBA 2K11", "storageGB": 16, "offlinePlayable": true },
  { "appid": "201020", "name": "NBA 2K13", "storageGB": 9, "offlinePlayable": true },
  { "appid": "287860", "name": "NBA 2K15", "storageGB": 51, "offlinePlayable": true },
  { "appid": "370240", "name": "NBA 2K16", "storageGB": 46, "offlinePlayable": true },
  { "appid": "385760", "name": "NBA 2K17", "storageGB": 65, "offlinePlayable": true },
  { "appid": "577800", "name": "NBA 2K18", "storageGB": 55.8, "offlinePlayable": true },
  { "appid": "841370", "name": "NBA 2K19", "storageGB": 62, "offlinePlayable": true },
  { "appid": "1089350", "name": "NBA 2K20", "storageGB": 94, "offlinePlayable": true },
  { "appid": "1225330", "name": "NBA 2K21", "storageGB": 89, "offlinePlayable": true },
  { "appid": "1644960", "name": "NBA 2K22", "storageGB": 123, "offlinePlayable": true },
  { "appid": "1919590", "name": "NBA 2K23", "storageGB": 136, "offlinePlayable": true },
  { "appid": "1222680", "name": "Need for Speed Heat", "storageGB": 34, "offlinePlayable": true },
  { "appid": "47870", "name": "Need for Speed: Hot Pursuit", "storageGB": 7.7, "offlinePlayable": true },
  { "appid": "1262540", "name": "Need for Speed Most Wanted (2012)", "storageGB": 7, "offlinePlayable": true },
  { "appid": "17410", "name": "Need for Speed Undercover", "storageGB": 5, "offlinePlayable": true },
  { "appid": "1262560", "name": "Need for Speed Payback", "storageGB": 28, "offlinePlayable": true },
  { "appid": "524220", "name": "NieR: Automata", "storageGB": 30, "offlinePlayable": true },
  { "appid": "2017080", "name": "Nickelodeon All-Star Brawl 2", "storageGB": 13, "offlinePlayable": true },
  { "appid": "1377380", "name": "Night of the Dead", "storageGB": 32, "offlinePlayable": true },
  { "appid": "225540", "name": "Just Cause 3", "storageGB": 50, "offlinePlayable": true },
  { "appid": "1456650", "name": "NINJA GAIDEN: Master Collection", "storageGB": 14, "offlinePlayable": true },
  { "appid": "275850", "name": "No Man's Sky", "storageGB": 17, "offlinePlayable": true },
  { "appid": "2381590", "name": "Only Up!", "storageGB": 5.46, "offlinePlayable": true, "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2381590/library_hero.jpg" },
  { "appid": "2691930", "name": "Of Ash and Steel", "storageGB": 26, "offlinePlayable": true, "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2691930/library_hero.jpg" },
  { "appid": "1089090", "name": "ONE PIECE: PIRATE WARRIORS 4", "storageGB": 29, "offlinePlayable": true },
  { "appid": "814000", "name": "ONE PIECE ODYSSEY", "storageGB": 33, "offlinePlayable": true },
  { "appid": "755500", "name": "ONE PIECE World Seeker", "storageGB": 20, "offlinePlayable": true },
  { "appid": "991560", "name": "ONE PUNCH MAN: A HERO NOBODY KNOWS", "storageGB": 9, "offlinePlayable": true },
  { "appid": "238320", "name": "Outlast", "storageGB": 8, "offlinePlayable": true },
  { "appid": "414700", "name": "Outlast 2", "storageGB": 26, "offlinePlayable": true },
  { "appid": "728880", "name": "Overcooked! 2", "storageGB": 9, "offlinePlayable": true },
  { "appid": "1243830", "name": "Overcooked! All You Can Eat", "storageGB": 10, "offlinePlayable": true },
  { "appid": "24240", "name": "PAYDAY: The Heist", "storageGB": 8, "offlinePlayable": true },
  { "appid": "218620", "name": "PAYDAY 2", "storageGB": 50, "offlinePlayable": true },
  { "appid": "1721470", "name": "Poppy Playtime", "storageGB": 10, "offlinePlayable": true },
  { "appid": "1003590", "name": "Tetris Effect: Connected", "storageGB": 5, "offlinePlayable": true },
  { "appid": "2105490", "name": "RIDE 5", "storageGB": 48.6, "offlinePlayable": true },
  { "appid": "1144200", "name": "Ready or Not", "storageGB": 54, "offlinePlayable": true },
  { "appid": "1293830", "name": "Forza Horizon 4", "storageGB": 95, "offlinePlayable": true },
  { "appid": "1681430", "name": "RoboCop: Rogue City", "storageGB": 40, "offlinePlayable": true },
  { "appid": "883710", "name": "Resident Evil 2", "storageGB": 27, "offlinePlayable": true },
  { "appid": "952060", "name": "Resident Evil 3", "storageGB": 27, "offlinePlayable": true },
  { "appid": "2050650", "name": "Resident Evil 4", "storageGB": 60, "offlinePlayable": true },
  { "appid": "209160", "name": "Resident Evil: Operation Raccoon City", "storageGB": 10, "offlinePlayable": true },
  { "appid": "21690", "name": "Resident Evil 5", "storageGB": 20, "offlinePlayable": true },
  { "appid": "254700", "name": "Resident Evil 4 (2005)", "storageGB": 20, "offlinePlayable": true },
  { "appid": "221040", "name": "Resident Evil 6", "storageGB": 20, "offlinePlayable": true },
  { "appid": "418370", "name": "Resident Evil 7: Biohazard", "storageGB": 60, "offlinePlayable": true },
  { "appid": "1196590", "name": "Resident Evil Village", "storageGB": 32, "offlinePlayable": true },
  { "appid": "1346010", "name": "RiMS Racing", "storageGB": 15, "offlinePlayable": true },
  { "appid": "203160", "name": "Tomb Raider", "storageGB": 21, "offlinePlayable": true },
  { "appid": "391220", "name": "Rise of the Tomb Raider", "storageGB": 32, "offlinePlayable": true },
  { "appid": "750920", "name": "Shadow of the Tomb Raider", "storageGB": 52, "offlinePlayable": true },
  { "appid": "1643320", "name": "S.T.A.L.K.E.R. 2: Heart of Chornobyl", "storageGB": 157, "offlinePlayable": true },
  { "appid": "1599660", "name": "Sackboy: A Big Adventure", "storageGB": 60, "offlinePlayable": true },
  { "appid": "742420", "name": "Saints Row", "storageGB": 53, "offlinePlayable": true },
  { "appid": "978300", "name": "Saints Row: The Third Remastered", "storageGB": 50, "offlinePlayable": true },
  { "appid": "814380", "name": "Sekiro: Shadows Die Twice", "storageGB": 18, "offlinePlayable": true },
  { "appid": "1548850", "name": "Six Days in Fallujah", "storageGB": 12, "offlinePlayable": true },
  { "appid": "2138700", "name": "Sifu", "storageGB": 22, "offlinePlayable": true },
  { "appid": "2124490", "name": "SILENT HILL 2", "storageGB": 35, "offlinePlayable": true },
  { "appid": "32440", "name": "LEGO Star Wars: The Complete Saga", "storageGB": 5, "offlinePlayable": true },
  { "appid": "1766740", "name": "Smalland: Survive the Wilds", "storageGB": 23, "offlinePlayable": true },
  { "appid": "464340", "name": "Syberia 3", "storageGB": 19, "offlinePlayable": true },
  { "appid": "63380", "name": "Sniper Elite V2 Remastered", "storageGB": 30, "offlinePlayable": true },
  { "appid": "238090", "name": "Sniper Elite 3", "storageGB": 21, "offlinePlayable": true },
  { "appid": "312660", "name": "Sniper Elite 4", "storageGB": 65, "offlinePlayable": true },
  { "appid": "973580", "name": "Sniper Ghost Warrior Contracts", "storageGB": 15, "offlinePlayable": true },
  { "appid": "1338770", "name": "Sniper Ghost Warrior Contracts 2", "storageGB": 17, "offlinePlayable": true },
  { "appid": "1326470", "name": "Sons Of The Forest", "storageGB": 17, "offlinePlayable": true },
  { "appid": "307690", "name": "Sleeping Dogs: Definitive Edition", "storageGB": 16.5, "offlinePlayable": true },

  // --- New Additions (User Requested) ---
  { "appid": "2699820", "name": "SHIN CHAN: Shiro and the Coal Town", "storageGB": 5, "offlinePlayable": true },
  { "appid": "356190", "name": "STAR WARS BATTLEFRONT", "storageGB": 57, "offlinePlayable": true }, // 2015 Version or user specified size
  { "appid": "389730", "name": "TEKKEN 7", "storageGB": 60, "offlinePlayable": true },
  // Removed duplicate: The Last of Us Part I
  { "appid": "2172010", "name": "UNTIL DAWN", "storageGB": 60, "offlinePlayable": true },
  { "appid": "2223840", "name": "The Casting of Frank Stone", "storageGB": 70, "offlinePlayable": true },
  { "appid": "502500", "name": "ACE COMBAT 7: SKIES UNKNOWN", "storageGB": 50, "offlinePlayable": true },
  { "appid": "1259420", "name": "Days Gone", "storageGB": 70, "offlinePlayable": true },
  { "appid": "1222140", "name": "Detroit: Become Human", "storageGB": 55, "offlinePlayable": true },
  { "appid": "1790600", "name": "DRAGON BALL: Sparking! ZERO", "storageGB": 70, "offlinePlayable": true },
  { "appid": "1551360", "name": "Forza Horizon 5", "storageGB": 110, "offlinePlayable": true },
  // Removed duplicate: God of War Ragnarök (kept single entry later)
  { "appid": "2215430", "name": "Ghost of Tsushima DIRECTOR'S CUT", "storageGB": 75, "offlinePlayable": true },
  { "appid": "2420110", "name": "Horizon Forbidden West Complete Edition", "storageGB": 150, "offlinePlayable": true },
  { "appid": "2871340", "name": "Life is Strange: Double Exposure", "storageGB": 25, "offlinePlayable": true },
  { "appid": "1971870", "name": "Mortal Kombat 1", "storageGB": 100, "offlinePlayable": true },
  // Removed per request: NBA 2K25
  { "appid": "1846380", "name": "Need for Speed Unbound", "storageGB": 50, "offlinePlayable": true },
  { "appid": "2315690", "name": "WWE 2K24", "storageGB": 90, "offlinePlayable": true },
  { "appid": "2358720", "name": "Black Myth: Wukong", "storageGB": 130, "offlinePlayable": true },
  { "appid": "1222700", "name": "A Way Out", "storageGB": 25, "offlinePlayable": true },

  // --- Batch 2 Additions ---
  // Removed upcoming titles: Atomfall + DLC, CODE VEIN II
  { "appid": "2669320", "name": "EA SPORTS FC 25", "storageGB": 50, "offlinePlayable": true },
  { "appid": "1364780", "name": "Street Fighter 6", "storageGB": 60, "offlinePlayable": true },
  // Removed upcoming titles: Phantom Blade Zero, Crimson Desert
  // Removed upcoming title: The Witcher Remake
  // Removed upcoming title: The Witcher 4 (Polaris)
  { "appid": "1693980", "name": "Dead Space Remake", "storageGB": 50, "offlinePlayable": true },
  // Removed upcoming title: Resident Evil 9 (Revenant Shadows)
  { 
    "appid": "custom_alan_wake_2", 
    "name": "Alan Wake 2", 
    "storageGB": 90, 
    "offlinePlayable": true,
    "image": "https://upload.wikimedia.org/wikipedia/en/c/c2/Alan_Wake_2_box_art.jpg",
    "description": "A survival horror game developed by Remedy Entertainment.",
    "pc_requirements": {
      "minimum": "<strong>OS:</strong> Windows 10/11 64-bit<br><strong>Processor:</strong> Intel Core i5-7600K / AMD equivalent<br><strong>Memory:</strong> 16 GB RAM<br><strong>Graphics:</strong> GeForce RTX 2060 / Radeon RX 6600<br><strong>Storage:</strong> 90 GB SSD",
      "recommended": "<strong>OS:</strong> Windows 10/11 64-bit<br><strong>Processor:</strong> Ryzen 7 3700X / Intel equivalent<br><strong>Memory:</strong> 16 GB RAM<br><strong>Graphics:</strong> GeForce RTX 3070 / Radeon RX 6700 XT<br><strong>Storage:</strong> 90 GB SSD"
    }
  },
  // Removed upcoming title: Control 2

  // --- Batch 3 & 4 & 5 Additions ---
  // Removed upcoming and online-only titles per request

  // --- Batch 6: RPGs & Japanese Hits ---
  { "appid": "2701660", "name": "Dragon Quest III HD-2D Remake", "storageGB": 20, "offlinePlayable": true },
  { "appid": "1295510", "name": "Dragon Quest XI S: Echoes of an Elusive Age - Definitive Edition", "storageGB": 40, "offlinePlayable": true },
  { "appid": "2552430", "name": "Kingdom Hearts Integrum Masterpiece", "storageGB": 90, "offlinePlayable": true },
  { "appid": "2161700", "name": "Persona 3 Reload", "storageGB": 30, "offlinePlayable": true },
  { "appid": "1687950", "name": "Persona 5 Royal", "storageGB": 41, "offlinePlayable": true },
  { "appid": "2072450", "name": "Like a Dragon: Infinite Wealth", "storageGB": 82, "offlinePlayable": true },
  // Removed upcoming entry: Like a Dragon: Pirate Yakuza in Hawaii
  { "appid": "1145350", "name": "Hades II", "storageGB": 20, "offlinePlayable": true },
  { "appid": "1623730", "name": "Palworld", "storageGB": 40, "offlinePlayable": true },
  // Removed online-only entry: Helldivers 2
  { "appid": "1086940", "name": "Baldur's Gate 3", "storageGB": 147, "offlinePlayable": true },

  // --- Batch 7: Major AAA Titles ---
  { "appid": "2778580", "name": "Elden Ring: Shadow of the Erdtree", "storageGB": 60, "offlinePlayable": true },
  { "appid": "2515020", "name": "FINAL FANTASY XVI", "storageGB": 170, "offlinePlayable": true },
  // Removed not-yet-available PC entry: Final Fantasy VII Rebirth
  { "appid": "2322010", "name": "God of War Ragnarök", "storageGB": 190, "offlinePlayable": true },
  { "appid": "2215430", "name": "Ghost of Tsushima DIRECTOR'S CUT", "storageGB": 75, "offlinePlayable": true },

  // --- Batch 8: PlayStation PC Ports ---
  { "appid": "2420110", "name": "Horizon Forbidden West Complete Edition", "storageGB": 150, "offlinePlayable": true },
  { "appid": "1888930", "name": "The Last of Us Part I", "storageGB": 100, "offlinePlayable": true },
  { "appid": "1659420", "name": "Uncharted: Legacy of Thieves Collection", "storageGB": 126, "offlinePlayable": true },
  { "appid": "1895880", "name": "Ratchet & Clank: Rift Apart", "storageGB": 75, "offlinePlayable": true },
  { "appid": "1649240", "name": "Returnal", "storageGB": 60, "offlinePlayable": true },

  // --- Batch 9: Recent & Fighting Games ---
  { 
    "appid": "custom_star_wars_outlaws", 
    "name": "Star Wars Outlaws", 
    "storageGB": 65, 
    "offlinePlayable": true, 
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Star_Wars_Outlaws_cover_art.jpg/220px-Star_Wars_Outlaws_cover_art.jpg",
    "description": "Play as scoundrel Kay Vess in a galaxy-spanning open-world Star Wars adventure featuring ground stealth-action and space dogfights.",
    "pc_requirements": {
      "minimum": "<strong>OS:</strong> Windows 10/11 64-bit<br><strong>Processor:</strong> Intel Core i7-8700K / AMD Ryzen 5 3600<br><strong>Memory:</strong> 16 GB RAM<br><strong>Graphics:</strong> NVIDIA GeForce GTX 1660 (6 GB) / AMD RX 5600 XT (6 GB) / Intel Arc A750 (8 GB, ReBAR on)<br><strong>DirectX:</strong> 12<br><strong>Storage:</strong> 65 GB SSD<br><strong>Notes:</strong> 1080p, 30 FPS, Low preset with upscaler Quality",
      "recommended": "<strong>OS:</strong> Windows 10/11 64-bit<br><strong>Processor:</strong> Intel Core i5-10400 / AMD Ryzen 5 5600X<br><strong>Memory:</strong> 16 GB RAM<br><strong>Graphics:</strong> NVIDIA GeForce RTX 3060 Ti (8 GB) / AMD Radeon RX 6700 XT (12 GB)<br><strong>DirectX:</strong> 12<br><strong>Storage:</strong> 65 GB SSD<br><strong>Notes:</strong> 1080p, 60 FPS, High preset with upscaler Quality"
    }
  },
  { "appid": "2840670", "name": "Avatar: Frontiers of Pandora", "storageGB": 90, "offlinePlayable": true },
  { "appid": "2751000", "name": "Prince of Persia: The Lost Crown", "storageGB": 30, "offlinePlayable": true },
  // Removed online-only entries: Suicide Squad and Skull and Bones
  { "appid": "1778820", "name": "TEKKEN 8", "storageGB": 100, "offlinePlayable": true }
  ,
  // --- Requested Additions (Offline-Playable) ---
  { "appid": "20900", "name": "The Witcher: Enhanced Edition", "storageGB": 15, "offlinePlayable": true },
  { "appid": "20920", "name": "The Witcher 2: Assassins of Kings Enhanced Edition", "storageGB": 25, "offlinePlayable": true },
  { "appid": "1029690", "name": "Sniper Elite 5", "storageGB": 85, "offlinePlayable": true },
  { "appid": "1960470", "name": "Undisputed", "storageGB": 30, "offlinePlayable": true, "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1960470/library_hero.jpg" },
  { "appid": "493340", "name": "Planet Coaster", "storageGB": 7, "offlinePlayable": true },
  { "appid": "285330", "name": "BeamNG.drive", "storageGB": 45, "offlinePlayable": true },
  { "appid": "431960", "name": "Wallpaper Engine", "storageGB": 1, "offlinePlayable": true },
  { "appid": "244210", "name": "Assetto Corsa", "storageGB": 25, "offlinePlayable": true },
  { "appid": "570940", "name": "Dark Souls: Remastered", "storageGB": 6, "offlinePlayable": true },
  { "appid": "335300", "name": "Dark Souls II: Scholar of the First Sin", "storageGB": 15, "offlinePlayable": true },
  { "appid": "374320", "name": "DARK SOULS III", "storageGB": 25, "offlinePlayable": true },
  { "appid": "264710", "name": "Subnautica", "storageGB": 20, "offlinePlayable": true, "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/264710/library_hero.jpg" },
  { "appid": "848450", "name": "Subnautica: Below Zero", "storageGB": 15, "offlinePlayable": true, "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/848450/library_hero.jpg" },
  { "appid": "526870", "name": "Satisfactory", "storageGB": 35, "offlinePlayable": true },
  { "appid": "105600", "name": "Terraria", "storageGB": 0.3, "offlinePlayable": true },
  { "appid": "1332010", "name": "Stray", "storageGB": 10, "offlinePlayable": true, "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1332010/library_hero.jpg" },
  { "appid": "2643070", "name": "Supermarket Simulator", "storageGB": 10, "offlinePlayable": true },
  { "appid": "1248130", "name": "Farming Simulator 22", "storageGB": 35, "offlinePlayable": true },
  { "appid": "1943950", "name": "Escape the Backrooms", "storageGB": 5, "offlinePlayable": true },
  { "appid": "582160", "name": "Assassin's Creed Origins", "storageGB": 50, "offlinePlayable": true },
  { "appid": "812140", "name": "Assassin's Creed Odyssey", "storageGB": 90, "offlinePlayable": true },
  { "appid": "2208920", "name": "Assassin's Creed Valhalla", "storageGB": 150, "offlinePlayable": true },
  { "appid": "1677740", "name": "Minecraft Dungeons", "storageGB": 10, "offlinePlayable": true },
  { "appid": "739630", "name": "Phasmophobia", "storageGB": 13, "offlinePlayable": true },
  { "appid": "1966720", "name": "Lethal Company", "storageGB": 2, "offlinePlayable": true },
  { "appid": "1811260", "name": "EA SPORTS FIFA 23", "storageGB": 100, "offlinePlayable": true },
  { "appid": "108600", "name": "Project Zomboid", "storageGB": 2, "offlinePlayable": true },
  { "appid": "648800", "name": "Raft", "storageGB": 10, "offlinePlayable": true },
  { "appid": "239140", "name": "Dying Light", "storageGB": 40, "offlinePlayable": true },
  { "appid": "534380", "name": "Dying Light 2 Stay Human", "storageGB": 90, "offlinePlayable": true },
  { "appid": "227300", "name": "Euro Truck Simulator 2", "storageGB": 16, "offlinePlayable": true },
  { "appid": "2918520", "name": "Buckshot Roulette", "storageGB": 0.5, "offlinePlayable": true },
  { "appid": "2379780", "name": "Balatro", "storageGB": 0.5, "offlinePlayable": true },
  { "appid": "394360", "name": "Hearts of Iron IV", "storageGB": 5, "offlinePlayable": true },
  { "appid": "2464460", "name": "F1 Manager 2024", "storageGB": 8, "offlinePlayable": true },
  { "appid": "2689040", "name": "TopSpin 2K25", "storageGB": 80, "offlinePlayable": true, "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2689040/library_hero.jpg" },
  { "appid": "1490890", "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles", "storageGB": 17, "offlinePlayable": true },
  { "appid": "1593500", "name": "God of War (2018)", "storageGB": 80, "offlinePlayable": true },
  { "appid": "7940", "name": "Call of Duty 4: Modern Warfare", "storageGB": 8, "offlinePlayable": true },
  { "appid": "10180", "name": "Call of Duty: Modern Warfare 2 (2009)", "storageGB": 12, "offlinePlayable": true },
  { "appid": "42700", "name": "Call of Duty: Black Ops", "storageGB": 15, "offlinePlayable": true },
  { "appid": "202970", "name": "Call of Duty: Black Ops II", "storageGB": 35, "offlinePlayable": true }
  ,
  { "appid": "custom_wwe_2k25", "name": "WWE 2K25", "storageGB": 90, "offlinePlayable": true, "image": "https://via.placeholder.com/1920x1080?text=WWE+2K25",
    "description": "Updated visuals, refined gameplay, and expanded modes bring the WWE experience to life in the latest 2K installment.",
    "pc_requirements": {
      "minimum": "<strong>OS:</strong> Windows 10/11 64-bit<br><strong>Processor:</strong> Intel Core i5-3550 / AMD FX-8150<br><strong>Memory:</strong> 8 GB RAM<br><strong>Graphics:</strong> NVIDIA GeForce GTX 1060 / AMD Radeon RX 480<br><strong>Storage:</strong> 80-90 GB SSD",
      "recommended": "<strong>OS:</strong> Windows 10/11 64-bit<br><strong>Processor:</strong> Intel Core i7-4790 / AMD FX-8350<br><strong>Memory:</strong> 16 GB RAM<br><strong>Graphics:</strong> NVIDIA GeForce GTX 1070 / AMD Radeon RX 580<br><strong>Storage:</strong> 80-90 GB SSD"
    }
  },
  { "appid": "1942660", "name": "WWE 2K23", "storageGB": 87, "offlinePlayable": true, "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1942660/library_hero.jpg" },
  { "appid": "1255630", "name": "WWE 2K22", "storageGB": 60, "offlinePlayable": true, "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1255630/library_hero.jpg" },
  { "appid": "1015500", "name": "WWE 2K20", "storageGB": 50, "offlinePlayable": true },
  { "appid": "custom_lou_part2", "name": "The Last of Us Part II", "storageGB": 80, "offlinePlayable": true, "image": "https://upload.wikimedia.org/wikipedia/en/4/4f/The_Last_of_Us_Part_II_cover_art.png",
    "description": "Ellie’s harrowing journey continues in a tense, narrative-driven action adventure with stealth, crafting, and visceral combat.",
    "pc_requirements": {
      "minimum": "<strong>OS:</strong> Windows 10/11 64-bit<br><strong>Processor:</strong> Intel Core i7-4770 / AMD Ryzen 5 1500X<br><strong>Memory:</strong> 16 GB RAM<br><strong>Graphics:</strong> NVIDIA GeForce GTX 1060 (6 GB) / AMD Radeon RX 580 (8 GB)<br><strong>Storage:</strong> 80 GB SSD",
      "recommended": "<strong>OS:</strong> Windows 10/11 64-bit<br><strong>Processor:</strong> Intel Core i7-8700 / AMD Ryzen 5 3600<br><strong>Memory:</strong> 16 GB RAM<br><strong>Graphics:</strong> NVIDIA GeForce RTX 2060 / AMD Radeon RX 6600<br><strong>Storage:</strong> 80 GB SSD"
    }
  },
  { "appid": "491540", "name": "The Bus", "storageGB": 25, "offlinePlayable": true, "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/491540/library_hero.jpg" },
  { "appid": "custom_skibidi_fnaf", "name": "Five Nights at Skibidi Toilets", "storageGB": 3, "offlinePlayable": true, "image": "https://via.placeholder.com/1920x1080?text=Five+Nights+at+Skibidi+Toilets",
    "description": "A comedic horror parody blending jump scares with absurd toilet-themed animatronics in a night-shift survival experience.",
    "pc_requirements": {
      "minimum": "<strong>OS:</strong> Windows 10/11 64-bit<br><strong>Processor:</strong> Intel Core i3-6100 / AMD FX-6300<br><strong>Memory:</strong> 4 GB RAM<br><strong>Graphics:</strong> Intel HD Graphics 4000 / NVIDIA GeForce GT 730<br><strong>Storage:</strong> 3 GB",
      "recommended": "<strong>OS:</strong> Windows 10/11 64-bit<br><strong>Processor:</strong> Intel Core i5-8400 / AMD Ryzen 3 3100<br><strong>Memory:</strong> 8 GB RAM<br><strong>Graphics:</strong> NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 560<br><strong>Storage:</strong> 3 GB"
    }
  },
  { "appid": "custom_schedule_1", "name": "Schedule 1", "storageGB": 5, "offlinePlayable": true, "image": "https://via.placeholder.com/1920x1080?text=Schedule+1",
    "description": "An indie narrative experience with light puzzle elements and exploration-focused gameplay.",
    "pc_requirements": {
      "minimum": "<strong>OS:</strong> Windows 10/11 64-bit<br><strong>Processor:</strong> Intel Core i3-6100 / AMD FX-6300<br><strong>Memory:</strong> 4 GB RAM<br><strong>Graphics:</strong> Intel UHD 620 / NVIDIA GeForce GT 730<br><strong>Storage:</strong> 5 GB",
      "recommended": "<strong>OS:</strong> Windows 10/11 64-bit<br><strong>Processor:</strong> Intel Core i5-8400 / AMD Ryzen 3 3100<br><strong>Memory:</strong> 8 GB RAM<br><strong>Graphics:</strong> NVIDIA GeForce GTX 1050 / AMD Radeon RX 560<br><strong>Storage:</strong> 5 GB"
    }
  },
  { "appid": "custom_dispatch", "name": "Dispatch", "storageGB": 4, "offlinePlayable": true, "image": "https://via.placeholder.com/1920x1080?text=Dispatch",
    "description": "Manage calls and make critical decisions in a dispatch simulation with branching outcomes.",
    "pc_requirements": {
      "minimum": "<strong>OS:</strong> Windows 10/11 64-bit<br><strong>Processor:</strong> Intel Core i3-6100 / AMD FX-6300<br><strong>Memory:</strong> 4 GB RAM<br><strong>Graphics:</strong> Intel UHD 620 / NVIDIA GeForce GT 730<br><strong>Storage:</strong> 4 GB",
      "recommended": "<strong>OS:</strong> Windows 10/11 64-bit<br><strong>Processor:</strong> Intel Core i5-8400 / AMD Ryzen 3 3100<br><strong>Memory:</strong> 8 GB RAM<br><strong>Graphics:</strong> NVIDIA GeForce GTX 1050 / AMD Radeon RX 560<br><strong>Storage:</strong> 4 GB"
    }
  },
  { "appid": "custom_repo", "name": "R.E.P.O", "storageGB": 6, "offlinePlayable": true, "image": "https://via.placeholder.com/1920x1080?text=R.E.P.O",
    "description": "An atmospheric adventure built around recovery and exploration with minimal UI and strong environmental storytelling.",
    "pc_requirements": {
      "minimum": "<strong>OS:</strong> Windows 10/11 64-bit<br><strong>Processor:</strong> Intel Core i3-6100 / AMD FX-6300<br><strong>Memory:</strong> 4 GB RAM<br><strong>Graphics:</strong> Intel UHD 620 / NVIDIA GeForce GT 730<br><strong>Storage:</strong> 6 GB",
      "recommended": "<strong>OS:</strong> Windows 10/11 64-bit<br><strong>Processor:</strong> Intel Core i5-8400 / AMD Ryzen 3 3100<br><strong>Memory:</strong> 8 GB RAM<br><strong>Graphics:</strong> NVIDIA GeForce GTX 1050 / AMD Radeon RX 560<br><strong>Storage:</strong> 6 GB"
    }
  },
  { "appid": "custom_peak", "name": "Peak", "storageGB": 8, "offlinePlayable": true, "image": "https://via.placeholder.com/1920x1080?text=Peak",
    "description": "Climb to new heights in a minimalist challenge-focused game featuring precise platforming and tight controls.",
    "pc_requirements": {
      "minimum": "<strong>OS:</strong> Windows 10/11 64-bit<br><strong>Processor:</strong> Intel Core i3-6100 / AMD FX-6300<br><strong>Memory:</strong> 4 GB RAM<br><strong>Graphics:</strong> Intel UHD 620 / NVIDIA GeForce GT 730<br><strong>Storage:</strong> 8 GB",
      "recommended": "<strong>OS:</strong> Windows 10/11 64-bit<br><strong>Processor:</strong> Intel Core i5-8400 / AMD Ryzen 3 3100<br><strong>Memory:</strong> 8 GB RAM<br><strong>Graphics:</strong> NVIDIA GeForce GTX 1050 / AMD Radeon RX 560<br><strong>Storage:</strong> 8 GB"
    }
  },
  { "appid": "custom_minecraft_java", "name": "Minecraft (Java Edition)", "storageGB": 2, "offlinePlayable": true, "image": "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png",
    "description": "Survive, build, and explore infinite worlds. Craft tools and structures, play creatively or survive against mobs with offline single-player supported.",
    "pc_requirements": {
      "minimum": "<strong>OS:</strong> Windows 10/11 64-bit<br><strong>Processor:</strong> Intel Core i3-3210 / AMD A8-7600<br><strong>Memory:</strong> 4 GB RAM<br><strong>Graphics:</strong> Intel HD Graphics 4000 / AMD Radeon R5<br><strong>Storage:</strong> 2 GB",
      "recommended": "<strong>OS:</strong> Windows 10/11 64-bit<br><strong>Processor:</strong> Intel Core i5-4690 / AMD Ryzen 5 1400<br><strong>Memory:</strong> 8 GB RAM<br><strong>Graphics:</strong> NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 560<br><strong>Storage:</strong> 4 GB"
    }
  },
  { "appid": "368260", "name": "Marvel's Midnight Suns", "storageGB": 60, "offlinePlayable": true },
  { "appid": "custom_dying_light_the_beast", "name": "Dying Light: The Beast", "storageGB": 90, "offlinePlayable": true, "image": "https://via.placeholder.com/1920x1080?text=Dying+Light:+The+Beast",
    "description": "A brutal new chapter in the parkour-infused zombie action series, featuring enhanced night gameplay, powerful new enemies, and expanded co-op.",
    "pc_requirements": {
      "minimum": "<strong>OS:</strong> Windows 10/11 64-bit<br><strong>Processor:</strong> Intel Core i5-8600K / AMD Ryzen 5 2600<br><strong>Memory:</strong> 12 GB RAM<br><strong>Graphics:</strong> NVIDIA GeForce GTX 1060 (6 GB) / AMD Radeon RX 580 (8 GB)<br><strong>Storage:</strong> 90 GB SSD",
      "recommended": "<strong>OS:</strong> Windows 10/11 64-bit<br><strong>Processor:</strong> AMD Ryzen 5 3600 / Intel Core i7-8700<br><strong>Memory:</strong> 16 GB RAM<br><strong>Graphics:</strong> NVIDIA GeForce RTX 3060 Ti / AMD Radeon RX 6700 XT<br><strong>Storage:</strong> 90 GB SSD"
    }
  },
  { "appid": "custom_jurassic_world_evolution_3", "name": "Jurassic World Evolution 3", "storageGB": 20, "offlinePlayable": true, "image": "https://via.placeholder.com/1920x1080?text=Jurassic+World+Evolution+3",
    "description": "Build and manage the ultimate dinosaur parks with deeper genetics, smarter behaviors, and expanded sandbox and campaign modes.",
    "pc_requirements": {
      "minimum": "<strong>OS:</strong> Windows 10/11 64-bit<br><strong>Processor:</strong> Intel Core i5-6600K / AMD FX-8350<br><strong>Memory:</strong> 8 GB RAM<br><strong>Graphics:</strong> NVIDIA GeForce GTX 1060 (6 GB) / AMD Radeon RX 580 (8 GB)<br><strong>Storage:</strong> 20 GB SSD",
      "recommended": "<strong>OS:</strong> Windows 10/11 64-bit<br><strong>Processor:</strong> Intel Core i7-8700 / AMD Ryzen 5 3600<br><strong>Memory:</strong> 16 GB RAM<br><strong>Graphics:</strong> NVIDIA GeForce RTX 2060 / AMD Radeon RX 5600 XT<br><strong>Storage:</strong> 20 GB SSD"
    }
  },
  { "appid": "custom_farming_simulator_25", "name": "Farming Simulator 25", "storageGB": 40, "offlinePlayable": true, "image": "https://via.placeholder.com/1920x1080?text=Farming+Simulator+25",
    "description": "Cultivate and expand your farm with new crops, machines, and improvements across single player and local cooperative play.",
    "pc_requirements": {
      "minimum": "<strong>OS:</strong> Windows 10/11 64-bit<br><strong>Processor:</strong> Intel Core i5-8400 / AMD Ryzen 5 2600<br><strong>Memory:</strong> 8 GB RAM<br><strong>Graphics:</strong> NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 570<br><strong>Storage:</strong> 40 GB SSD",
      "recommended": "<strong>OS:</strong> Windows 10/11 64-bit<br><strong>Processor:</strong> Intel Core i7-8700 / AMD Ryzen 5 3600<br><strong>Memory:</strong> 16 GB RAM<br><strong>Graphics:</strong> NVIDIA GeForce GTX 1660 Ti / AMD Radeon RX 590<br><strong>Storage:</strong> 40 GB SSD"
    }
  },
  { "appid": "38400", "name": "Fallout", "storageGB": 0.6, "offlinePlayable": true },
  { "appid": "38410", "name": "Fallout 2", "storageGB": 1.2, "offlinePlayable": true },
  { "appid": "38420", "name": "Fallout Tactics: Brotherhood of Steel", "storageGB": 1.5, "offlinePlayable": true },
  { "appid": "22300", "name": "Fallout 3", "storageGB": 7, "offlinePlayable": true },
  { "appid": "22380", "name": "Fallout: New Vegas", "storageGB": 10, "offlinePlayable": true }
];

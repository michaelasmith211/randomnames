export interface FantasyArchetype {
  curated: { name: string; title?: string; meaning?: string; gender?: string }[];
  prefixes: string[];
  roots: string[];
  suffixes: string[];
  epithets: string[];
}

export const FANTASY_DATA: Record<string, FantasyArchetype> = {
  "elf": {
    "curated": [
      {
        "name": "Aeloria Silverleaf",
        "gender": "female",
        "meaning": "Song of the moonlight dawn"
      },
      {
        "name": "Thalor Moonwhisper",
        "gender": "male",
        "meaning": "Guardian of the starlight glade"
      },
      {
        "name": "Faerand Sunstrider",
        "gender": "male",
        "meaning": "Swift solar wanderer"
      },
      {
        "name": "Elyndra Starweaver",
        "gender": "female",
        "meaning": "Weaver of celestial constellations"
      },
      {
        "name": "Celebrim Winterfall",
        "gender": "male",
        "meaning": "Silversmith of ancient ice"
      },
      {
        "name": "Galadhel Dawnsinger",
        "gender": "female",
        "meaning": "Singer of radiant morning"
      },
      {
        "name": "Sylas Shadowbrook",
        "gender": "male",
        "meaning": "Silent watcher of forest streams"
      },
      {
        "name": "Aerin Nightbreeze",
        "gender": "neutral",
        "meaning": "Whisper across ancient trees"
      },
      {
        "name": "Illyria Dewpetal",
        "gender": "female",
        "meaning": "Graceful blossom of the high court"
      },
      {
        "name": "Kaelen Windrunner",
        "gender": "male",
        "meaning": "Arrow on the mountain gale"
      },
      {
        "name": "Morwenna Gloomhaven",
        "gender": "female",
        "meaning": "Priestess of shadowy twilight"
      },
      {
        "name": "Valen Swiftbow",
        "gender": "male",
        "meaning": "Deadeye archer of the deep wild"
      },
      {
        "name": "Caelynn Brightwood",
        "gender": "female",
        "meaning": "Keeper of the golden grove"
      },
      {
        "name": "Faelar Starfall",
        "gender": "male",
        "meaning": "Watcher of meteor showers"
      },
      {
        "name": "Lyralei Whisperingbough",
        "gender": "female",
        "meaning": "Voice of ancient oak roots"
      },
      {
        "name": "Alaghor Sunfire",
        "gender": "male",
        "meaning": "Blazing blade of the sun elf vanguard"
      },
      {
        "name": "Mirieth Frostbloom",
        "gender": "female",
        "meaning": "Blossom opening in winter snow"
      },
      {
        "name": "Thalion Greenmantle",
        "gender": "male",
        "meaning": "Steadfast warden of the greenwood"
      },
      {
        "name": "Eilistraee Moonshadow",
        "gender": "female",
        "meaning": "Dancer of the midnight crescent"
      },
      {
        "name": "Voronwe Deepglade",
        "gender": "male",
        "meaning": "Faithful voyager through tangled wild"
      },
      {
        "name": "Silmarien Evenstar",
        "gender": "female",
        "meaning": "Gleaming twilight jewel of the west"
      },
      {
        "name": "Aranwe Falconcrest",
        "gender": "male",
        "meaning": "Noble sovereign of the high eyrie"
      },
      {
        "name": "Nimrodel Streamwhisper",
        "gender": "female",
        "meaning": "Lady of the white mountain waterfalls"
      },
      {
        "name": "Elrond Starshadow",
        "gender": "male",
        "meaning": "Vault of stars and enduring sanctuary"
      },
      {
        "name": "Haldir of Lothlorien",
        "gender": "male",
        "meaning": "Vigilant boundary sentinel"
      }
    ],
    "prefixes": [
      "Ael",
      "Fae",
      "Cael",
      "Syl",
      "Elen",
      "Lyr",
      "Gala",
      "Thal",
      "Aeri",
      "Ily",
      "Vor",
      "Zin",
      "Miri",
      "Ala",
      "Fin",
      "Nir",
      "Cele",
      "Eili",
      "Aran",
      "Sil",
      "Beleg",
      "Idri",
      "Nim",
      "Hal",
      "Gil",
      "Lom"
    ],
    "roots": [
      "or",
      "dril",
      "win",
      "dil",
      "wen",
      "dor",
      "riel",
      "gorn",
      "fin",
      "las",
      "diel",
      "mir",
      "thas",
      "rond",
      "thir",
      "del",
      "mar",
      "lon",
      "vorn",
      "thien",
      "we",
      "lin",
      "rod",
      "ran",
      "glen"
    ],
    "suffixes": [
      "ia",
      "is",
      "an",
      "el",
      "on",
      "en",
      "ar",
      "eth",
      "wyn",
      "iel",
      "or",
      "ion",
      "wen",
      "mir",
      "dil",
      "as",
      "ae",
      "dor",
      "ath",
      "il",
      "ine",
      "ien",
      "oril",
      "ith",
      "we"
    ],
    "epithets": [
      "Silverleaf",
      "Moonwhisper",
      "Sunstrider",
      "Starweaver",
      "Winterfall",
      "Dawnsinger",
      "Shadowbrook",
      "Windrunner",
      "Nightbreeze",
      "Dewpetal",
      "Evergreen",
      "Brightwood",
      "Frostbloom",
      "Sunfire",
      "Starfall",
      "Evenstar",
      "Greenmantle",
      "Falconcrest",
      "Streamwhisper",
      "Swiftbow",
      "Gloomhaven",
      "Whisperingbough",
      "Deepglade",
      "Jewelwarden"
    ]
  },
  "wizard": {
    "curated": [
      {
        "name": "Eldrin the Grey",
        "gender": "male",
        "meaning": "Master of arcane mysteries"
      },
      {
        "name": "Morzan Spellweaver",
        "gender": "male",
        "meaning": "Conjurer of ethereal runes"
      },
      {
        "name": "Zephyrus the Enlightened",
        "gender": "male",
        "meaning": "Scholar of celestial winds"
      },
      {
        "name": "Vespera Nightcast",
        "gender": "female",
        "meaning": "Sorceress of twilight enchantments"
      },
      {
        "name": "Ignis Flametongue",
        "gender": "neutral",
        "meaning": "Pyromancer of molten spires"
      },
      {
        "name": "Archmage Thaddeus",
        "gender": "male",
        "meaning": "Keeper of the forbidden tome"
      },
      {
        "name": "Astaroth Runeveil",
        "gender": "male",
        "meaning": "Diviner of ancient fate"
      },
      {
        "name": "Selene Starcaller",
        "gender": "female",
        "meaning": "Weaver of stellar astral light"
      },
      {
        "name": "Balthazar the Wise",
        "gender": "male",
        "meaning": "Elder of the seven planar sanctuaries"
      },
      {
        "name": "Morgana Voidwalker",
        "gender": "female",
        "meaning": "Traveler between parallel dimensions"
      },
      {
        "name": "Kelvin Frostbound",
        "gender": "male",
        "meaning": "Cryomancer of glacial peaks"
      },
      {
        "name": "Althea the Timeless",
        "gender": "female",
        "meaning": "Chronomancer manipulating reality"
      },
      {
        "name": "Maelgwyn Stormcaller",
        "gender": "male",
        "meaning": "Channeler of lightning tempests"
      },
      {
        "name": "Circe Shadowmeld",
        "gender": "female",
        "meaning": "Enchantress of transmutative herbs"
      },
      {
        "name": "Theodoric Astralward",
        "gender": "male",
        "meaning": "Guardian of dimensional rifts"
      },
      {
        "name": "Sycorax Netherdancer",
        "gender": "female",
        "meaning": "Witch of primeval earth currents"
      },
      {
        "name": "Abraxis Grimscythe",
        "gender": "male",
        "meaning": "Necromancer of forgotten sepulchers"
      },
      {
        "name": "Kallista Mindbender",
        "gender": "female",
        "meaning": "Telepathic scryer of imperial court"
      },
      {
        "name": "Oswald the Unseen",
        "gender": "male",
        "meaning": "Illusionist walking through solid stone"
      },
      {
        "name": "Rhiannon Moonprism",
        "gender": "female",
        "meaning": "Diviner of lunar tidal magic"
      },
      {
        "name": "Prospero Tempestbound",
        "gender": "male",
        "meaning": "Hermetic exile controlling storms"
      },
      {
        "name": "Melchior Sunseeker",
        "gender": "male",
        "meaning": "Astrologer deciphering comet portents"
      },
      {
        "name": "Yvaine Sparkweaver",
        "gender": "female",
        "meaning": "Evoker of miniature ball lightning"
      },
      {
        "name": "Caelum Voidreaver",
        "gender": "male",
        "meaning": "Banisher of otherworldly horrors"
      },
      {
        "name": "Hecate Bloodsigil",
        "gender": "female",
        "meaning": "Priestess of crossroads and night omens"
      }
    ],
    "prefixes": [
      "Mor",
      "Eld",
      "Zeph",
      "Ast",
      "Balt",
      "Ign",
      "Vor",
      "Rune",
      "Sol",
      "Nyx",
      "Mal",
      "Theod",
      "Mael",
      "Circ",
      "Abrax",
      "Kall",
      "Osw",
      "Rhian",
      "Prosp",
      "Melch",
      "Yv",
      "Cael",
      "Hec",
      "Vane",
      "Zul"
    ],
    "roots": [
      "zador",
      "gand",
      "vane",
      "mir",
      "grim",
      "clyffe",
      "thas",
      "dore",
      "wyn",
      "kar",
      "phon",
      "mar",
      "cast",
      "gwyn",
      "rix",
      "rax",
      "meld",
      "scythe",
      "ward",
      "sigil",
      "loth",
      "temp",
      "kell",
      "sorc"
    ],
    "suffixes": [
      "ius",
      "or",
      "an",
      "is",
      "ox",
      "um",
      "ix",
      "on",
      "ar",
      "eus",
      "iel",
      "oth",
      "wyr",
      "ath",
      "as",
      "orix",
      "us",
      "ander",
      "ion",
      "ik",
      "ur",
      "en",
      "al",
      "ald"
    ],
    "epithets": [
      "the Wise",
      "the Grey",
      "Spellweaver",
      "Nightcast",
      "Starcaller",
      "Runeveil",
      "the Timeless",
      "Voidwalker",
      "Flametongue",
      "the Enlightened",
      "the Mystic",
      "Stormweaver",
      "Frostbound",
      "Stormcaller",
      "Astralward",
      "Mindbender",
      "the Unseen",
      "Moonprism",
      "Tempestbound",
      "Sunseeker",
      "Sparkweaver",
      "Bloodsigil",
      "the Archmage",
      "Rune-Carver"
    ]
  },
  "warrior": {
    "curated": [
      {
        "name": "Ragnar Ironclad",
        "gender": "male",
        "meaning": "Unyielding shield in the shield wall"
      },
      {
        "name": "Astrid Bloodfang",
        "gender": "female",
        "meaning": "Valkyrie commander of the vanguard"
      },
      {
        "name": "Thorgar Stonebreaker",
        "gender": "male",
        "meaning": "Crusher of fortress gates"
      },
      {
        "name": "Valda Shieldmaiden",
        "gender": "female",
        "meaning": "Defender of the mountain hearth"
      },
      {
        "name": "Bjorn Bearclaw",
        "gender": "male",
        "meaning": "Berserker of the frozen fjords"
      },
      {
        "name": "Kaelen Stormblade",
        "gender": "male",
        "meaning": "Wielder of thunder and lightning steel"
      },
      {
        "name": "Hilda Warcry",
        "gender": "female",
        "meaning": "Herald who rouses armies to fury"
      },
      {
        "name": "Garrick the Indomitable",
        "gender": "male",
        "meaning": "Veteran of a hundred sieges"
      },
      {
        "name": "Freydis Axe-Carver",
        "gender": "female",
        "meaning": "Legendary raider of uncharted coasts"
      },
      {
        "name": "Drakon Helmcrusher",
        "gender": "male",
        "meaning": "Giant-slayer of dragon mountain"
      },
      {
        "name": "Sigurd Dragonbane",
        "gender": "male",
        "meaning": "Slayer of Fafnir with reforged blade"
      },
      {
        "name": "Brynja Steelheart",
        "gender": "female",
        "meaning": "Armored champion defending the citadel"
      },
      {
        "name": "Gunnar Bloodaxe",
        "gender": "male",
        "meaning": "Fierce combatant in front ranks"
      },
      {
        "name": "Krag Ironfist",
        "gender": "male",
        "meaning": "Dwarven champion with fist of adamantine"
      },
      {
        "name": "Torstein Skullcleaver",
        "gender": "male",
        "meaning": "Veteran reaver of northern ice bays"
      },
      {
        "name": "Eira Frostguard",
        "gender": "female",
        "meaning": "Sentinel on snow-swept ramparts"
      },
      {
        "name": "Wulfgar Doomhammer",
        "gender": "male",
        "meaning": "Barbarian warlord from the tundra"
      },
      {
        "name": "Svanhild Warmaiden",
        "gender": "female",
        "meaning": "Valkyrie with swan plumage and battle spear"
      },
      {
        "name": "Brak Thunderstrike",
        "gender": "male",
        "meaning": "Crusher of enemy battle lines"
      },
      {
        "name": "Thora Shieldbreaker",
        "gender": "female",
        "meaning": "Maiden shattering wooden pavises"
      },
      {
        "name": "Varg Wolfskin",
        "gender": "male",
        "meaning": "Berserker cloaked in gray wolf pelts"
      },
      {
        "name": "Helga Ironbreaker",
        "gender": "female",
        "meaning": "Champion shattering iron maces"
      },
      {
        "name": "Magnar Bonecarver",
        "gender": "male",
        "meaning": "Carver of runic totems and war horn"
      },
      {
        "name": "Halvar the Unyielding",
        "gender": "male",
        "meaning": "Standing firm against cavalry charges"
      },
      {
        "name": "Aslaug Crowkeeper",
        "gender": "female",
        "meaning": "Prophetess guiding ravens to fallen heroes"
      }
    ],
    "prefixes": [
      "Thor",
      "Ragn",
      "Grim",
      "Bjorn",
      "Krag",
      "Wulf",
      "Gorr",
      "Ston",
      "Iron",
      "Var",
      "Brak",
      "Valk",
      "Sig",
      "Bryn",
      "Tor",
      "Magn",
      "Halv",
      "Warc",
      "Steel",
      "Dra",
      "Hild",
      "Eir",
      "Svan"
    ],
    "roots": [
      "gar",
      "nar",
      "vald",
      "grim",
      "mund",
      "rik",
      "karl",
      "helm",
      "brand",
      "tor",
      "stan",
      "gor",
      "gund",
      "fist",
      "claw",
      "blade",
      "axe",
      "jaw",
      "cleave",
      "crush",
      "heart",
      "break"
    ],
    "suffixes": [
      "ar",
      "or",
      "an",
      "ik",
      "un",
      "ok",
      "ir",
      "en",
      "ak",
      "ur",
      "ath",
      "ax",
      "gard",
      "vald",
      "mund",
      "rik",
      "son",
      "dottir",
      "ulf",
      "mar"
    ],
    "epithets": [
      "Ironclad",
      "Bloodfang",
      "Stonebreaker",
      "Shieldmaiden",
      "Bearclaw",
      "Stormblade",
      "Warcry",
      "Helmcrusher",
      "the Unbroken",
      "Bonecarver",
      "Steelheart",
      "the Fierce",
      "Dragonbane",
      "Bloodaxe",
      "Ironfist",
      "Skullcleaver",
      "Frostguard",
      "Doomhammer",
      "Warmaiden",
      "Shieldbreaker",
      "Wolfskin",
      "the Indomitable",
      "the Unyielding",
      "Ironbreaker"
    ]
  },
  "dragon": {
    "curated": [
      {
        "name": "Balerion the Black Dread",
        "meaning": "Shadow that consumed kingdoms and armies"
      },
      {
        "name": "Vermithrax Pejorative",
        "meaning": "The ancient wyrm of caldera flame"
      },
      {
        "name": "Pyroth Embermaw",
        "meaning": "Scourge of burning ash and fiery rain"
      },
      {
        "name": "Frostfang Glaciovore",
        "meaning": "Glacial terror of northern blizzard"
      },
      {
        "name": "Aurelion the Star Forger",
        "meaning": "Celestial dragon weaving constellations"
      },
      {
        "name": "Scatha the Worm",
        "meaning": "Greedy hoarder of subterranean dwarven gold"
      },
      {
        "name": "Cinderfang Vaelok",
        "meaning": "Living inferno of volcanic cinder wastes"
      },
      {
        "name": "Typhon Dreadscale",
        "meaning": "Father of monstrous primeval storms"
      },
      {
        "name": "Zephyros Sky-Scourge",
        "meaning": "Thunder wyrm that cleaves high clouds"
      },
      {
        "name": "Nidhogg the Deep Root",
        "meaning": "Gnawer at the world tree\u2019s foundations"
      },
      {
        "name": "Glaurung the Deceiver",
        "meaning": "Father of wingless fire-drakes and hypnosis"
      },
      {
        "name": "Ancalagon the Black",
        "meaning": "Titan whose fall broke three volcanic peaks"
      },
      {
        "name": "Smaug the Golden",
        "meaning": "The chiefest and greatest of calamities"
      },
      {
        "name": "Meraxes the Silverwing",
        "meaning": "Golden-eyed beast with jaws that swallow horses"
      },
      {
        "name": "Vhagar Queen of Flames",
        "meaning": "Ancient behemoth whose roar shook valleys"
      },
      {
        "name": "Fafnir the Cursed",
        "meaning": "Dwarf turned dragon by gold lust and malice"
      },
      {
        "name": "Ouroboros the Eternal",
        "meaning": "Serpent devouring its own tail, eternity"
      },
      {
        "name": "Ignacius Hellmaw",
        "meaning": "Spitter of liquid basalt from deep crags"
      },
      {
        "name": "Cryovain the White Death",
        "meaning": "Frost drake nesting upon Icespire peak"
      },
      {
        "name": "Venomspire Xylox",
        "meaning": "Acidic green dragon corrosive to iron armors"
      },
      {
        "name": "Rathalos the Sky King",
        "meaning": "Lord of forest skies with poisoned talons"
      },
      {
        "name": "Fatalis the Cataclysm",
        "meaning": "Black dragon of ancient Schrade kingdom ruin"
      },
      {
        "name": "Tiamat Five-Headed Queen",
        "meaning": "Goddess of chromatic evil and chaos"
      },
      {
        "name": "Bahamut Platinum Lord",
        "meaning": "Noble patron of metallic dragons and justice"
      },
      {
        "name": "Drakon Bloodcrest",
        "meaning": "Crimson wyrm basking in volcanic vents"
      }
    ],
    "prefixes": [
      "Baler",
      "Verm",
      "Pyr",
      "Ign",
      "Drak",
      "Vael",
      "Glaur",
      "Frost",
      "Scath",
      "Ash",
      "Rend",
      "Cind",
      "Ancal",
      "Smaug",
      "Merax",
      "Vhagar",
      "Fafn",
      "Ouro",
      "Cryo",
      "Venom",
      "Rath",
      "Fatal",
      "Tiam",
      "Baham"
    ],
    "roots": [
      "ath",
      "gath",
      "morth",
      "drak",
      "fang",
      "scale",
      "thorn",
      "claw",
      "wing",
      "scor",
      "vor",
      "loth",
      "rax",
      "cinder",
      "flame",
      "blaze",
      "gorge",
      "maw",
      "crest",
      "spire",
      "dread"
    ],
    "suffixes": [
      "ion",
      "or",
      "ax",
      "us",
      "ok",
      "ar",
      "oth",
      "ynx",
      "ur",
      "on",
      "rak",
      "thor",
      "an",
      "is",
      "ung",
      "ir",
      "os",
      "al",
      "ix"
    ],
    "epithets": [
      "the Black Dread",
      "Embermaw",
      "Glaciovore",
      "the Star Forger",
      "Dreadscale",
      "Sky-Scourge",
      "the Flame-Bringer",
      "Cinderwing",
      "the Undying",
      "Ironscale",
      "the Devourer",
      "Stormcaller",
      "the Deceiver",
      "the Golden",
      "Silverwing",
      "the Cataclysm",
      "the White Death",
      "Hellmaw",
      "the Cursed",
      "the Eternal",
      "the Desolator",
      "Bloodcrest"
    ]
  },
  "pirate": {
    "curated": [
      {
        "name": "Captain Barnaby Thorne",
        "gender": "male",
        "meaning": "Scourge of the Spanish Main"
      },
      {
        "name": "Scarlett Flint",
        "gender": "female",
        "meaning": "Fierce captain of the Blood Tide"
      },
      {
        "name": "Blackbeard Morgan",
        "gender": "male",
        "meaning": "Feared plunderer of merchant galleons"
      },
      {
        "name": "Cutlass Jack Vance",
        "gender": "male",
        "meaning": "Duelist of Tortuga cove"
      },
      {
        "name": "Anne Calico",
        "gender": "female",
        "meaning": "Smuggler of the windward reefs"
      },
      {
        "name": "One-Eyed Silas Graves",
        "gender": "male",
        "meaning": "Quartermaster of sunken fortunes"
      },
      {
        "name": "Siren Sadie O\u2019Malley",
        "gender": "female",
        "meaning": "Freebooter queen of the Celtic sea"
      },
      {
        "name": "Quartermaster Gideon Vane",
        "gender": "male",
        "meaning": "Master of cannonades and plunder"
      },
      {
        "name": "Bartholomew Roberts",
        "gender": "male",
        "meaning": "Black Bart, terror of Caribbean trade routes"
      },
      {
        "name": "Mary Read the Defiant",
        "gender": "female",
        "meaning": "Unyielding sword fighter of Nassau"
      },
      {
        "name": "Edward Low the Merciless",
        "gender": "male",
        "meaning": "Cruel navigator flying the red skull flag"
      },
      {
        "name": "Redbeard Redford",
        "gender": "male",
        "meaning": "Highland privateer turned buccaneer"
      },
      {
        "name": "Stede Bonnet the Gentleman",
        "gender": "male",
        "meaning": "Gentleman pirate navigating the Carolinas"
      },
      {
        "name": "Grace O\u2019Malley the Sea Queen",
        "gender": "female",
        "meaning": "Legendary pirate queen of Clew Bay"
      },
      {
        "name": "Henry Every the King of Pirates",
        "gender": "male",
        "meaning": "Plunderer of the Grand Mughal treasure fleet"
      },
      {
        "name": "Pegleg Pete Scupper",
        "gender": "male",
        "meaning": "Cannoneer of the Kraken\u2019s Wake"
      },
      {
        "name": "Kiera Storm-Rider",
        "gender": "female",
        "meaning": "Helmswoman navigating hurricane squalls"
      },
      {
        "name": "Tugboat Tobias Drake",
        "gender": "male",
        "meaning": "Harbor thief stealing loaded barges"
      },
      {
        "name": "Dread Pirate Roberts",
        "gender": "neutral",
        "meaning": "Legendary mantle of feared honor"
      },
      {
        "name": "Tessa Two-Daggers",
        "gender": "female",
        "meaning": "Boarding party shock trooper of Maracaibo"
      }
    ],
    "prefixes": [
      "Bar",
      "Flint",
      "Mor",
      "Vane",
      "Jack",
      "Cross",
      "Drake",
      "Hawke",
      "Hook",
      "Pike",
      "Bones",
      "Silver",
      "Read",
      "Bonnet",
      "Scupper",
      "Storm",
      "Tug",
      "Tessa",
      "Black",
      "Red",
      "Peg",
      "Calico",
      "Siren",
      "Morgan"
    ],
    "roots": [
      "naby",
      "gan",
      "son",
      "field",
      "ley",
      "ford",
      "well",
      "ton",
      "grave",
      "wood",
      "shaw",
      "gate",
      "tide",
      "wave",
      "breeze",
      "mast",
      "cove",
      "plank",
      "blade",
      "skull",
      "salt",
      "fog"
    ],
    "suffixes": [
      "e",
      "s",
      "er",
      "y",
      "en",
      "man",
      "ard",
      "by",
      "ham",
      "ton",
      "ley",
      "ford",
      "beard",
      "eye",
      "leg",
      "fin",
      "wake",
      "reefer",
      "swab",
      "bow"
    ],
    "epithets": [
      "the Scourge",
      "Blackbeard",
      "Cutlass",
      "Iron-Hook",
      "Bloodtide",
      "Sea Dog",
      "Salt-Tongue",
      "the Reckless",
      "Storm-Chaser",
      "Gold-Tooth",
      "Cannon-Smoke",
      "Dead-Reckoning",
      "Two-Daggers",
      "the Defiant",
      "the Merciless",
      "the Gentleman",
      "the Sea Queen",
      "King of Pirates",
      "the Raider",
      "Reef-Runner"
    ]
  },
  "superhero": {
    "curated": [
      {
        "name": "Shadowstrike",
        "gender": "neutral",
        "meaning": "Silent vigilante in dark alleys"
      },
      {
        "name": "Solarflare",
        "gender": "female",
        "meaning": "Hero wielding the pure energy of sunspots"
      },
      {
        "name": "Chrono Knight",
        "gender": "male",
        "meaning": "Temporal defender of timelines"
      },
      {
        "name": "Silver Valkyrie",
        "gender": "female",
        "meaning": "Avian guardian of fallen heroes"
      },
      {
        "name": "Apex Titan",
        "gender": "male",
        "meaning": "Unstoppable powerhouse with superhuman density"
      },
      {
        "name": "Quantum Mirage",
        "gender": "neutral",
        "meaning": "Illusionist who shifts atomic matter"
      },
      {
        "name": "Thunderstrike",
        "gender": "male",
        "meaning": "Electromagnetic master of storm clouds"
      },
      {
        "name": "Nova Sentinel",
        "gender": "female",
        "meaning": "Cosmic protector stationed at Earth\u2019s orbit"
      },
      {
        "name": "Iron Aegis",
        "gender": "male",
        "meaning": "Walking fortress shielding civilians"
      },
      {
        "name": "Velocity Prime",
        "gender": "neutral",
        "meaning": "Hyper-speed runner breaking the sound barrier"
      },
      {
        "name": "Phoenix Dawn",
        "gender": "female",
        "meaning": "Immortal hero reborn from solar plasma"
      },
      {
        "name": "Specter Noir",
        "gender": "male",
        "meaning": "Ghostly detective hunting mob syndicates"
      },
      {
        "name": "Aero Empress",
        "gender": "female",
        "meaning": "Ruler of upper atmospheric air currents"
      },
      {
        "name": "Cosmo Surge",
        "gender": "male",
        "meaning": "Channeler of pulsar radiation blasts"
      },
      {
        "name": "Miracle Valkyrie",
        "gender": "female",
        "meaning": "Bringer of hope in darkest city hours"
      },
      {
        "name": "Omega Vanguard",
        "gender": "male",
        "meaning": "Last defense line against alien armada"
      },
      {
        "name": "Echo Whisper",
        "gender": "female",
        "meaning": "Sonic disruptor shattering steel structures"
      },
      {
        "name": "Luminary Core",
        "gender": "neutral",
        "meaning": "Living battery of pure photon brilliance"
      },
      {
        "name": "Obsidian Paragon",
        "gender": "male",
        "meaning": "Indestructible dark champion of justice"
      },
      {
        "name": "Starling Swift",
        "gender": "female",
        "meaning": "Acrobatic aerial vigilante of rooftop skylines"
      }
    ],
    "prefixes": [
      "Cyber",
      "Shadow",
      "Solar",
      "Quantum",
      "Chrono",
      "Silver",
      "Apex",
      "Thunder",
      "Nova",
      "Vortex",
      "Echo",
      "Neon",
      "Iron",
      "Velocity",
      "Phoenix",
      "Specter",
      "Aero",
      "Cosmo",
      "Omega",
      "Luminary",
      "Obsidian",
      "Starling",
      "Atlas",
      "Hyper"
    ],
    "roots": [
      "strike",
      "flare",
      "knight",
      "valkyrie",
      "titan",
      "mirage",
      "sentinel",
      "blade",
      "phantom",
      "shield",
      "specter",
      "surge",
      "aegis",
      "prime",
      "dawn",
      "noir",
      "empress",
      "core",
      "paragon",
      "swift",
      "storm",
      "spark",
      "fist",
      "wing"
    ],
    "suffixes": [
      "Prime",
      "Zero",
      "X",
      "Max",
      "Force",
      "One",
      "V",
      "Star",
      "Ray",
      "Wing",
      "Core",
      "Volt",
      "Alpha",
      "Flux",
      "Burst",
      "Sonic",
      "Spark",
      "Pulse",
      "Nexus",
      "Shift"
    ],
    "epithets": [
      "the Defender",
      "of Tomorrow",
      "the Invincible",
      "the Swift",
      "the Vigilant",
      "the Unseen",
      "Protector of the Realm",
      "Avenger of the Lost",
      "the Cosmic Ward",
      "the Stalwart",
      "Shield of Justice",
      "Guardian of Earth",
      "the Fearless",
      "Champion of the People",
      "the Unbreakable",
      "the Radiant"
    ]
  },
  "villain": {
    "curated": [
      {
        "name": "Lord Malakor",
        "gender": "male",
        "meaning": "Emperor of the withered thrones"
      },
      {
        "name": "Vespera Nightshade",
        "gender": "female",
        "meaning": "Alchemist of untraceable poisons"
      },
      {
        "name": "Baron Grimm",
        "gender": "male",
        "meaning": "Master of gothic terror and subjugation"
      },
      {
        "name": "Ravenor the Corrupt",
        "gender": "male",
        "meaning": "Fallen paladin turned necromancer"
      },
      {
        "name": "Lady Morticia Vane",
        "gender": "female",
        "meaning": "Aristocrat who trades souls for eternal youth"
      },
      {
        "name": "Malice Dreadfang",
        "gender": "neutral",
        "meaning": "Beast who delights in chaotic ruin"
      },
      {
        "name": "Ignatius Cinder",
        "gender": "male",
        "meaning": "Arsonist mastermind who burns civilizations"
      },
      {
        "name": "Belladonna Black",
        "gender": "female",
        "meaning": "Mistress of venom and dark courtiers"
      },
      {
        "name": "Void Emperor Xul",
        "gender": "male",
        "meaning": "Conqueror devouring star systems"
      },
      {
        "name": "Doctor Mortis",
        "gender": "male",
        "meaning": "Mad geneticist stitching unholy abominations"
      },
      {
        "name": "Madame Carnage",
        "gender": "female",
        "meaning": "Anarchist warlord inciting civil wars"
      },
      {
        "name": "The Pale Whisperer",
        "gender": "neutral",
        "meaning": "Shadow entity speaking madness into minds"
      },
      {
        "name": "Scourge of Veridia",
        "gender": "male",
        "meaning": "Blight king turning fertile provinces to rot"
      },
      {
        "name": "Countess Sangria",
        "gender": "female",
        "meaning": "Vampiric sovereign bathing in stolen life"
      },
      {
        "name": "Oblivion King",
        "gender": "male",
        "meaning": "Entity seeking total cosmic entropy and void"
      }
    ],
    "prefixes": [
      "Mal",
      "Grim",
      "Mor",
      "Dread",
      "Raven",
      "Ven",
      "Cind",
      "Vesp",
      "Nox",
      "Blight",
      "Vile",
      "Gloom",
      "Carn",
      "Mort",
      "Void",
      "Rot",
      "Pale",
      "Shadow",
      "Doom",
      "Bane"
    ],
    "roots": [
      "akor",
      "goth",
      "shade",
      "fang",
      "cor",
      "thorn",
      "bane",
      "scythe",
      "blood",
      "mourn",
      "lash",
      "wither",
      "tis",
      "rage",
      "whisper",
      "rot",
      "craw",
      "gorge",
      "spire",
      "blight"
    ],
    "suffixes": [
      "us",
      "or",
      "on",
      "ar",
      "a",
      "ia",
      "ix",
      "ath",
      "en",
      "ox",
      "is",
      "um",
      "ex",
      "oth",
      "orix",
      "iel",
      "id",
      "os",
      "ul",
      "an"
    ],
    "epithets": [
      "the Ruthless",
      "Nightshade",
      "the Corrupt",
      "Dreadfang",
      "the Merciless",
      "the Betrayer",
      "Bane of Kings",
      "the Despoiler",
      "the Soul-Eater",
      "Lord of Ruin",
      "the Vengeful",
      "the Malevolent",
      "the Pale Whisperer",
      "the Tyrant",
      "the Cursed",
      "Master of Terror"
    ]
  },
  "medieval": {
    "curated": [
      {
        "name": "Sir Galahad the Pure",
        "gender": "male",
        "meaning": "Knight errant of chivalric virtue"
      },
      {
        "name": "Lady Genevieve of Avalon",
        "gender": "female",
        "meaning": "Noble chatelaine of misty realm"
      },
      {
        "name": "Lord Geoffrey Blackwood",
        "gender": "male",
        "meaning": "Castellan of the northern fortress"
      },
      {
        "name": "Sir Roderick Strongbow",
        "gender": "male",
        "meaning": "Commander of royal longbowmen"
      },
      {
        "name": "Countess Eleanor of Aquitaine",
        "gender": "female",
        "meaning": "Patron of troubadours and kingdoms"
      },
      {
        "name": "Brother Aldous the Scribe",
        "gender": "male",
        "meaning": "Illuminator of holy manuscripts"
      },
      {
        "name": "Lady Rowena of Stirling",
        "gender": "female",
        "meaning": "Keeper of the highland seal"
      },
      {
        "name": "Sir Percival the Brave",
        "gender": "male",
        "meaning": "Seeker of the holy grail"
      },
      {
        "name": "Baron William of Warwick",
        "gender": "male",
        "meaning": "Kingmaker marshal of the peerage"
      },
      {
        "name": "Lady Beatrice de Montfort",
        "gender": "female",
        "meaning": "Chatelaine defending besieged castle walls"
      },
      {
        "name": "Sir Tristan of Lyonesse",
        "gender": "male",
        "meaning": "Harper knight of Arthurian chivalry"
      },
      {
        "name": "Count Baldwin of Flanders",
        "gender": "male",
        "meaning": "Commander of the Crusader vanguard"
      },
      {
        "name": "Lady Mathilda of Blois",
        "gender": "female",
        "meaning": "Empress disputing sovereign crown rights"
      },
      {
        "name": "Sir Lancelot du Lac",
        "gender": "male",
        "meaning": "Champion knight of the Round Table"
      },
      {
        "name": "Friar Tuck of Sherwood",
        "gender": "male",
        "meaning": "Stout monk ally of woodland outlaws"
      }
    ],
    "prefixes": [
      "Ald",
      "God",
      "Geoff",
      "Rod",
      "Perc",
      "Bald",
      "Ed",
      "Rich",
      "Will",
      "Gal",
      "Row",
      "Math",
      "Warw",
      "Mont",
      "Lyon",
      "Galah",
      "Genev",
      "Lancel",
      "Barth",
      "Os"
    ],
    "roots": [
      "win",
      "ric",
      "ard",
      "frey",
      "bert",
      "gar",
      "ham",
      "mond",
      "fred",
      "wald",
      "mar",
      "ton",
      "fort",
      "wood",
      "lace",
      "hart",
      "vale",
      "field",
      "bridge",
      "hall"
    ],
    "suffixes": [
      "us",
      "ald",
      "er",
      "en",
      "ard",
      "ic",
      "am",
      "e",
      "o",
      "ey",
      "on",
      "or",
      "bert",
      "mond",
      "win",
      "ric",
      "red",
      "stone",
      "burgh",
      "shire"
    ],
    "epithets": [
      "the Brave",
      "of Avalon",
      "Blackwood",
      "Strongbow",
      "the Lionheart",
      "the Valiant",
      "of the Marches",
      "the Pious",
      "the Gentle",
      "Iron-Shield",
      "the Steadfast",
      "of the High Tower",
      "the Just",
      "of the Round Table",
      "the Pure",
      "the Peerless"
    ]
  },
  "dnd": {
    "curated": [
      {
        "name": "Keth Farwanderer",
        "gender": "male",
        "meaning": "Human ranger scouting the untamed frontier"
      },
      {
        "name": "Lyra Dawnbringer",
        "gender": "female",
        "meaning": "Half-elf cleric of Lathander"
      },
      {
        "name": "Durnan Stonefist",
        "gender": "male",
        "meaning": "Dwarf barbarian of the Citadel Adbar"
      },
      {
        "name": "Sylphira Moonwhisper",
        "gender": "female",
        "meaning": "Elven rogue with velvet daggers"
      },
      {
        "name": "Garrick Spellforge",
        "gender": "male",
        "meaning": "Gnome wizard transmuting metal into glass"
      },
      {
        "name": "Zephyr Cloudstrider",
        "gender": "neutral",
        "meaning": "Air genasi monk of the Four Elements"
      },
      {
        "name": "Vespera Nightshade",
        "gender": "female",
        "meaning": "Tiefling warlock bound to fiendish patron"
      },
      {
        "name": "Brogden Oakhaven",
        "gender": "male",
        "meaning": "Halfling paladin sworn to Oath of Ancients"
      },
      {
        "name": "Morgath Ironhide",
        "gender": "male",
        "meaning": "Half-orc champion wielding a greataxe"
      },
      {
        "name": "Theron Brightwood",
        "gender": "male",
        "meaning": "Aasimar sorcerer radiating celestial warmth"
      },
      {
        "name": "Kallista Shadowstep",
        "gender": "female",
        "meaning": "Drow assassin of the Underdark"
      },
      {
        "name": "Rhogar Flameheart",
        "gender": "male",
        "meaning": "Dragonborn paladin of Bahamut"
      },
      {
        "name": "Cassian Drake",
        "gender": "male",
        "meaning": "Swashbuckler rogue sailing the Sword Coast"
      },
      {
        "name": "Elowen Greenleaf",
        "gender": "female",
        "meaning": "Wood elf druid of Circle of the Moon"
      },
      {
        "name": "Torvald Deepdelver",
        "gender": "male",
        "meaning": "Shield dwarf exploring ancient dwarven vaults"
      }
    ],
    "prefixes": [
      "Durn",
      "Keth",
      "Lyra",
      "Sylph",
      "Garr",
      "Zeph",
      "Vesp",
      "Brog",
      "Morg",
      "Ther",
      "Kall",
      "Rhog",
      "Cass",
      "Elow",
      "Torv",
      "Bram",
      "Corv",
      "Drak",
      "Fael",
      "Jor"
    ],
    "roots": [
      "an",
      "ick",
      "ira",
      "ath",
      "vald",
      "wen",
      "gar",
      "step",
      "hide",
      "forge",
      "heart",
      "delv",
      "wood",
      "shade",
      "fist",
      "blade",
      "shield",
      "lore",
      "strike",
      "path"
    ],
    "suffixes": [
      "us",
      "or",
      "an",
      "is",
      "en",
      "el",
      "ar",
      "ia",
      "wyn",
      "iel",
      "ath",
      "ak",
      "ir",
      "on",
      "in",
      "mar",
      "dun",
      "kin",
      "dor",
      "gard"
    ],
    "epithets": [
      "Farwanderer",
      "Dawnbringer",
      "Stonefist",
      "Moonwhisper",
      "Spellforge",
      "Cloudstrider",
      "Nightshade",
      "Oakhaven",
      "Ironhide",
      "Brightwood",
      "Shadowstep",
      "Flameheart",
      "Greenleaf",
      "Deepdelver",
      "the Steadfast",
      "the Relentless",
      "Oathkeeper",
      "the Unbroken"
    ]
  },
  "rpg": {
    "curated": [
      {
        "name": "Alden Stormchaser",
        "gender": "male",
        "meaning": "Legendary questing knight of the realm"
      },
      {
        "name": "Seraphina Lightward",
        "gender": "female",
        "meaning": "High inquisitor wielding radiant magic"
      },
      {
        "name": "Kael Thunderstrike",
        "gender": "male",
        "meaning": "Vanguard champion holding the choke point"
      },
      {
        "name": "Morrigan Crowcaller",
        "gender": "female",
        "meaning": "Shadow witch of the forbidden barrows"
      },
      {
        "name": "Balthier Skyblade",
        "gender": "male",
        "meaning": "Daring airship pirate and gunslinger"
      },
      {
        "name": "Yuna Wavecrest",
        "gender": "female",
        "meaning": "Summoner of ancient aquatic spirits"
      },
      {
        "name": "Darius Ironclad",
        "gender": "male",
        "meaning": "Heavily armored fortress juggernaut"
      },
      {
        "name": "Lyanna Frostbite",
        "gender": "female",
        "meaning": "Glacial archer from the frozen wastes"
      },
      {
        "name": "Gideon Soulreaver",
        "gender": "male",
        "meaning": "Dark knight wielding an enchanted soulblade"
      },
      {
        "name": "Tessa Swiftfoot",
        "gender": "female",
        "meaning": "Agile rogue picking impossible locks"
      },
      {
        "name": "Riven the Broken",
        "gender": "neutral",
        "meaning": "Wandering exile seeking martial redemption"
      },
      {
        "name": "Varian Sunstrider",
        "gender": "male",
        "meaning": "High king fighting on the battlefront"
      }
    ],
    "prefixes": [
      "Ald",
      "Seraph",
      "Kael",
      "Morr",
      "Balt",
      "Yuna",
      "Dar",
      "Lyann",
      "Gid",
      "Tess",
      "Riv",
      "Var",
      "Luc",
      "Cael",
      "Reyn",
      "Kael",
      "Brant",
      "Sora",
      "Noct",
      "Aura"
    ],
    "roots": [
      "en",
      "ina",
      "ith",
      "ier",
      "ius",
      "eon",
      "an",
      "or",
      "is",
      "a",
      "us",
      "ar",
      "heart",
      "wing",
      "fang",
      "blade",
      "wind",
      "flame",
      "star",
      "shield"
    ],
    "suffixes": [
      "blade",
      "ward",
      "strike",
      "caller",
      "clad",
      "reaver",
      "chaser",
      "crest",
      "foot",
      "frost",
      "song",
      "wing",
      "guard",
      "storm",
      "light",
      "spark"
    ],
    "epithets": [
      "Stormchaser",
      "Lightward",
      "Thunderstrike",
      "Crowcaller",
      "Skyblade",
      "Wavecrest",
      "Ironclad",
      "Frostbite",
      "Soulreaver",
      "Swiftfoot",
      "the Broken",
      "Sunstrider",
      "the Undaunted",
      "the Victorious",
      "the Legendary",
      "Bane of Dungeons"
    ]
  },
  "vampire": {
    "curated": [
      {
        "name": "Vladislav Drakulya",
        "gender": "male",
        "meaning": "Ancient voivode of Wallachian crypts"
      },
      {
        "name": "Carmilla von Karnstein",
        "gender": "female",
        "meaning": "Seductive countess of midnight revels"
      },
      {
        "name": "Lord Lucien Nightward",
        "gender": "male",
        "meaning": "Aristocratic bloodline regent"
      },
      {
        "name": "Countess Selene Moreau",
        "gender": "female",
        "meaning": "Eternal beauty of Parisian catacombs"
      },
      {
        "name": "Alucard Ravenloft",
        "gender": "male",
        "meaning": "Shadow stalker seeking redemption"
      },
      {
        "name": "Lilith Bloodborne",
        "gender": "female",
        "meaning": "Mother of nocturnal creatures"
      },
      {
        "name": "Lord Victor van Dort",
        "gender": "male",
        "meaning": "Aristocrat trapped between worlds"
      },
      {
        "name": "Lady Lenore Ravenscroft",
        "gender": "female",
        "meaning": "Nocturnal poetess of crumbling mausoleums"
      },
      {
        "name": "Niklaus the Immortal",
        "gender": "male",
        "meaning": "Original hybrid lord of ancient pacts"
      },
      {
        "name": "Countess Bathory",
        "gender": "female",
        "meaning": "High blood countess of Carpathian spires"
      },
      {
        "name": "Mikhail Bloodthorne",
        "gender": "male",
        "meaning": "Czarist officer awakened in cold catacombs"
      },
      {
        "name": "Elisabeta Nightfang",
        "gender": "female",
        "meaning": "Bride of the ancient wallachian prince"
      }
    ],
    "prefixes": [
      "Vlad",
      "Luci",
      "Carm",
      "Drak",
      "Raven",
      "Sangu",
      "Mor",
      "Nox",
      "Val",
      "Silv",
      "Ves",
      "Goth",
      "Nik",
      "Bath",
      "Len",
      "Victor",
      "Karn",
      "Lil",
      "Mort",
      "Noct"
    ],
    "roots": [
      "is",
      "en",
      "ian",
      "or",
      "gath",
      "thorn",
      "vane",
      "grave",
      "court",
      "blood",
      "mourn",
      "loft",
      "fang",
      "shade",
      "crypt",
      "night",
      "cask",
      "tomb"
    ],
    "suffixes": [
      "lav",
      "ius",
      "en",
      "a",
      "ia",
      "on",
      "ar",
      "ix",
      "an",
      "el",
      "ette",
      "or",
      "ula",
      "ina",
      "ith",
      "ov",
      "stein",
      "croft"
    ],
    "epithets": [
      "the Undying",
      "von Karnstein",
      "Nightward",
      "Ravenloft",
      "Bloodborne",
      "of the Crimson Court",
      "the Eternal",
      "Child of Shadow",
      "the Nocturnal",
      "Bane of Mortals",
      "the Sanguine",
      "of the Obsidian Tomb",
      "the Deathless",
      "Bloodthorne"
    ]
  },
  "fairy": {
    "curated": [
      {
        "name": "Titania Sunblossom",
        "gender": "female",
        "meaning": "Majestic queen of the summer fae"
      },
      {
        "name": "Zephyr Whisperwing",
        "gender": "neutral",
        "meaning": "Sprite riding gentle twilight breeze"
      },
      {
        "name": "Fern Dewdrop",
        "gender": "female",
        "meaning": "Guardian of mossy river stones"
      },
      {
        "name": "Puck Bramblefoot",
        "gender": "male",
        "meaning": "Mischievous trickster of midnight glades"
      },
      {
        "name": "Gossamer Starfrost",
        "gender": "female",
        "meaning": "Delicate weaver of morning spiderwebs"
      },
      {
        "name": "Rowan Silverbells",
        "gender": "neutral",
        "meaning": "Dancer under the harvest moon"
      },
      {
        "name": "Willow Shimmerthorn",
        "gender": "female",
        "meaning": "Keeper of enchanted springs"
      },
      {
        "name": "Oberon the Shadowking",
        "gender": "male",
        "meaning": "Sovereign consort of the twilight court"
      },
      {
        "name": "Bramble Quickstep",
        "gender": "male",
        "meaning": "Fleet-footed messenger across toadstool rings"
      },
      {
        "name": "Petal Honeywhisper",
        "gender": "female",
        "meaning": "Pollinator of enchanted clover fields"
      },
      {
        "name": "Thistle Dewgleam",
        "gender": "neutral",
        "meaning": "Prickly sentinel guarding fairy hollows"
      },
      {
        "name": "Moss Glade-Weaver",
        "gender": "neutral",
        "meaning": "Embroiderer of green woodland mantles"
      }
    ],
    "prefixes": [
      "Dew",
      "Fern",
      "Goss",
      "Puck",
      "Bram",
      "Zeph",
      "Twig",
      "Moss",
      "Star",
      "Petal",
      "Moon",
      "Breez",
      "Obe",
      "Tit",
      "Clav",
      "Thist",
      "Glade",
      "Hone",
      "Mallow",
      "Pollen"
    ],
    "roots": [
      "wing",
      "drop",
      "bell",
      "bloss",
      "thorn",
      "foot",
      "spark",
      "song",
      "glow",
      "whis",
      "dale",
      "mist",
      "ring",
      "bud",
      "leaf",
      "bloom",
      "beam",
      "glim",
      "shimm"
    ],
    "suffixes": [
      "a",
      "ia",
      "y",
      "ie",
      "en",
      "el",
      "on",
      "wyn",
      "or",
      "ina",
      "ette",
      "ling",
      "ette",
      "belle",
      "kin",
      "wee",
      "fay"
    ],
    "epithets": [
      "Sunblossom",
      "Whisperwing",
      "Dewdrop",
      "Bramblefoot",
      "Starfrost",
      "Silverbells",
      "Shimmerthorn",
      "Moonshimmer",
      "Glintwing",
      "of the Blossom Court",
      "Pollen-Drifter",
      "Twig-Twister",
      "Honeywhisper",
      "Quickstep",
      "of the Green Hollow",
      "the Enchanted"
    ]
  }
};

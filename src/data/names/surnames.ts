import { SurnameRecord } from './types';

export const SURNAMES: SurnameRecord[] = [
  // American / English
  { name: 'Smith', origin: 'american', meaning: 'Metal worker, blacksmith' },
  { name: 'Johnson', origin: 'american', meaning: 'Son of John' },
  { name: 'Williams', origin: 'american', meaning: 'Son of William' },
  { name: 'Brown', origin: 'american', meaning: 'Brown-haired or complexioned' },
  { name: 'Jones', origin: 'american', meaning: 'Son of John' },
  { name: 'Miller', origin: 'american', meaning: 'One who grinds grain' },
  { name: 'Davis', origin: 'american', meaning: 'Son of David' },
  { name: 'Wilson', origin: 'american', meaning: 'Son of Will' },
  { name: 'Anderson', origin: 'american', meaning: 'Son of Andrew' },
  { name: 'Taylor', origin: 'american', meaning: 'Cutter of cloth, tailor' },
  { name: 'Carter', origin: 'american', meaning: 'Transporter of goods' },
  { name: 'Bennett', origin: 'american', meaning: 'Blessed one' },
  { name: 'Mitchell', origin: 'american', meaning: 'Who is like God' },

  // British
  { name: 'Hawthorne', origin: 'british', meaning: 'Lives near the hawthorn bush' },
  { name: 'Pemberton', origin: 'british', meaning: 'Hill settlement' },
  { name: 'Sterling', origin: 'british', meaning: 'Little star, high quality' },
  { name: 'Blackwood', origin: 'british', meaning: 'From the dark forest' },
  { name: 'Sinclair', origin: 'british', meaning: 'Saint Clair' },
  { name: 'Holloway', origin: 'british', meaning: 'Sunken road' },
  { name: 'Kensington', origin: 'british', meaning: 'Estate of Cynesige' },
  { name: 'Wellington', origin: 'british', meaning: 'Estate near a spring' },
  { name: 'Montgomery', origin: 'british', meaning: 'Gomeric’s mountain' },

  // Indian
  { name: 'Sharma', origin: 'indian', meaning: 'Joy, shelter, teacher' },
  { name: 'Verma', origin: 'indian', meaning: 'Shield, armor, protector' },
  { name: 'Patel', origin: 'indian', meaning: 'Village headman, landholder' },
  { name: 'Chatterjee', origin: 'indian', meaning: 'Scholar of the four Vedas' },
  { name: 'Mukherjee', origin: 'indian', meaning: 'Chief scholar' },
  { name: 'Iyer', origin: 'indian', meaning: 'Respected elder, priest' },
  { name: 'Nair', origin: 'indian', meaning: 'Leader, noble warrior' },
  { name: 'Kapoor', origin: 'indian', meaning: 'Camphor, fragrant' },
  { name: 'Malhotra', origin: 'indian', meaning: 'Noble warrior clan' },
  { name: 'Deshmukh', origin: 'indian', meaning: 'Governor of a province' },
  { name: 'Bose', origin: 'indian', meaning: 'Leader, master' },
  { name: 'Choudhury', origin: 'indian', meaning: 'Holder of four domains' },

  // Irish
  { name: 'O’Connor', origin: 'irish', meaning: 'Descendant of Conchobhar (champion hound)' },
  { name: 'Murphy', origin: 'irish', meaning: 'Sea warrior' },
  { name: 'Kelly', origin: 'irish', meaning: 'Bright-headed, warrior' },
  { name: 'Sullivan', origin: 'irish', meaning: 'Hawk-eyed, dark-eyed' },
  { name: 'Walsh', origin: 'irish', meaning: 'The Welshman, foreigner' },
  { name: 'O’Brien', origin: 'irish', meaning: 'Descendant of high king Brian Boru' },
  { name: 'Byrne', origin: 'irish', meaning: 'Descendant of the raven' },
  { name: 'Kennedy', origin: 'irish', meaning: 'Armored head, helmeted chief' },

  // Scottish
  { name: 'MacLeod', origin: 'scottish', meaning: 'Son of Leod (ugly or beloved)' },
  { name: 'Campbell', origin: 'scottish', meaning: 'Crooked mouth, quick-witted' },
  { name: 'Stewart', origin: 'scottish', meaning: 'Guardian of the estate, royal clan' },
  { name: 'Robertson', origin: 'scottish', meaning: 'Son of Robert (bright fame)' },
  { name: 'MacDonald', origin: 'scottish', meaning: 'Ruler of the world' },
  { name: 'Fraser', origin: 'scottish', meaning: 'Of strawberry leaf emblem' },
  { name: 'MacKenzie', origin: 'scottish', meaning: 'Son of the fair one' },

  // French
  { name: 'Dubois', origin: 'french', meaning: 'Of the woods' },
  { name: 'Laurent', origin: 'french', meaning: 'Crowned with laurel' },
  { name: 'Moreau', origin: 'french', meaning: 'Dark-skinned, moor' },
  { name: 'Fontaine', origin: 'french', meaning: 'Keeper of the fountain, spring' },
  { name: 'Chevalier', origin: 'french', meaning: 'Knight, horseman' },
  { name: 'Mercier', origin: 'french', meaning: 'Merchant, haberdasher' },
  { name: 'Beaumont', origin: 'french', meaning: 'Beautiful mountain' },
  { name: 'De la Tour', origin: 'french', meaning: 'Of the tower fortress' },

  // German
  { name: 'Mueller', origin: 'german', meaning: 'Miller of grain' },
  { name: 'Schmidt', origin: 'german', meaning: 'Blacksmith, metal smith' },
  { name: 'Schneider', origin: 'german', meaning: 'Tailor, cloth cutter' },
  { name: 'Fischer', origin: 'german', meaning: 'Fisherman' },
  { name: 'Weber', origin: 'german', meaning: 'Weaver of textiles' },
  { name: 'Wagner', origin: 'german', meaning: 'Wagoner, wheelwright' },
  { name: 'Becker', origin: 'german', meaning: 'Baker of bread' },
  { name: 'Hoffmann', origin: 'german', meaning: 'Steward of the manor' },

  // Spanish
  { name: 'Garcia', origin: 'spanish', meaning: 'Brave in battle, bear' },
  { name: 'Rodriguez', origin: 'spanish', meaning: 'Son of Rodrigo (famous ruler)' },
  { name: 'Martinez', origin: 'spanish', meaning: 'Son of Martin (devoted to Mars)' },
  { name: 'Hernandez', origin: 'spanish', meaning: 'Son of Hernando (bold voyager)' },
  { name: 'Lopez', origin: 'spanish', meaning: 'Son of Lope (wolf)' },
  { name: 'Gonzalez', origin: 'spanish', meaning: 'Son of Gonzalo (battle spirit)' },
  { name: 'Navarro', origin: 'spanish', meaning: 'From the plains, Navarra' },
  { name: 'Castillo', origin: 'spanish', meaning: 'From the castle or fort' },

  // Italian
  { name: 'Rossi', origin: 'italian', meaning: 'Red-haired or ruddy' },
  { name: 'Russo', origin: 'italian', meaning: 'Red, fiery spirit' },
  { name: 'Ferrari', origin: 'italian', meaning: 'Blacksmith, iron worker' },
  { name: 'Esposito', origin: 'italian', meaning: 'Exposed, protected by heaven' },
  { name: 'Bianchi', origin: 'italian', meaning: 'White, fair, pure' },
  { name: 'Romano', origin: 'italian', meaning: 'Citizen of Rome' },
  { name: 'Colombo', origin: 'italian', meaning: 'Dove, peaceful messenger' },
  { name: 'Ricci', origin: 'italian', meaning: 'Curly-haired' },

  // Japanese
  { name: 'Sato', origin: 'japanese', meaning: 'Help, village of wisteria' },
  { name: 'Suzuki', origin: 'japanese', meaning: 'Bell tree, ear of rice' },
  { name: 'Takahashi', origin: 'japanese', meaning: 'High bridge' },
  { name: 'Tanaka', origin: 'japanese', meaning: 'Middle of the rice paddy' },
  { name: 'Watanabe', origin: 'japanese', meaning: 'Cross the border or ferry' },
  { name: 'Ito', origin: 'japanese', meaning: 'This wisteria' },
  { name: 'Yamamoto', origin: 'japanese', meaning: 'Base of the mountain' },
  { name: 'Nakamura', origin: 'japanese', meaning: 'Central village' },
  { name: 'Kobayashi', origin: 'japanese', meaning: 'Small forest' },
  { name: 'Kato', origin: 'japanese', meaning: 'Increasing wisteria' },

  // Chinese
  { name: 'Wang', origin: 'chinese', meaning: 'King, monarch' },
  { name: 'Li', origin: 'chinese', meaning: 'Plum tree, minister' },
  { name: 'Zhang', origin: 'chinese', meaning: 'Archer, stretch a bow' },
  { name: 'Liu', origin: 'chinese', meaning: 'Willow tree, kill or overcome' },
  { name: 'Chen', origin: 'chinese', meaning: 'Morning, old settlement' },
  { name: 'Yang', origin: 'chinese', meaning: 'Aspen tree, light sun' },
  { name: 'Huang', origin: 'chinese', meaning: 'Yellow, emperor’s color' },
  { name: 'Zhao', origin: 'chinese', meaning: 'Ancient state, shine' },

  // Korean
  { name: 'Kim', origin: 'korean', meaning: 'Gold, metal' },
  { name: 'Lee', origin: 'korean', meaning: 'Plum tree' },
  { name: 'Park', origin: 'korean', meaning: 'Gourd, plain magnolia' },
  { name: 'Choi', origin: 'korean', meaning: 'Pinnacle, mountain summit' },
  { name: 'Jung', origin: 'korean', meaning: 'Righteous, state of Jeong' },
  { name: 'Kang', origin: 'korean', meaning: 'River, peace and comfort' },
  { name: 'Yoon', origin: 'korean', meaning: 'Govern, oversee' },
  { name: 'Lim', origin: 'korean', meaning: 'Forest, woods' },

  // Arabic
  { name: 'Al-Mansoor', origin: 'arabic', meaning: 'The victorious by divine aid' },
  { name: 'Hashim', origin: 'arabic', meaning: 'Crusher of evil, generous host' },
  { name: 'Al-Sayed', origin: 'arabic', meaning: 'The master, chieftain' },
  { name: 'Khoury', origin: 'arabic', meaning: 'Priest, keeper of sanctuary' },
  { name: 'Najjar', origin: 'arabic', meaning: 'Carpenter, master woodworker' },
  { name: 'Al-Fassi', origin: 'arabic', meaning: 'From the imperial city of Fez' },
  { name: 'Darwish', origin: 'arabic', meaning: 'Dervish, ascetic seeker of truth' },

  // Turkish
  { name: 'Yilmaz', origin: 'turkish', meaning: 'Undaunted, unyielding' },
  { name: 'Kaya', origin: 'turkish', meaning: 'Solid rock, boulder' },
  { name: 'Demir', origin: 'turkish', meaning: 'Iron, indestructible' },
  { name: 'Celik', origin: 'turkish', meaning: 'Steel, sharp metal' },
  { name: 'Sahin', origin: 'turkish', meaning: 'Falcon, soaring hawk' },
  { name: 'Aydin', origin: 'turkish', meaning: 'Enlightened, bright scholar' },

  // Russian
  { name: 'Ivanov', origin: 'russian', meaning: 'Son of Ivan' },
  { name: 'Smirnov', origin: 'russian', meaning: 'Quiet, peaceful, still' },
  { name: 'Kuznetsov', origin: 'russian', meaning: 'Son of the blacksmith' },
  { name: 'Popov', origin: 'russian', meaning: 'Son of the priest' },
  { name: 'Vasiliev', origin: 'russian', meaning: 'Son of the royal king' },
  { name: 'Sokolov', origin: 'russian', meaning: 'Son of the falcon' },
  { name: 'Morozov', origin: 'russian', meaning: 'Son of the winter frost' },

  // Scandinavian
  { name: 'Lindqvist', origin: 'scandinavian', meaning: 'Linden tree twig' },
  { name: 'Stromberg', origin: 'scandinavian', meaning: 'River mountain' },
  { name: 'Nygaard', origin: 'scandinavian', meaning: 'New farmstead' },
  { name: 'Holm', origin: 'scandinavian', meaning: 'Small islet in the river' },
  { name: 'Eklund', origin: 'scandinavian', meaning: 'Oak grove' },
  { name: 'Lundgren', origin: 'scandinavian', meaning: 'Grove branch' },
  { name: 'Svensson', origin: 'scandinavian', meaning: 'Son of Sven (young man)' },

  // African
  { name: 'Okafor', origin: 'african', meaning: 'Born on Afor market day' },
  { name: 'Mensah', origin: 'african', meaning: 'Third born son' },
  { name: 'Diallo', origin: 'african', meaning: 'Bold traveler' },
  { name: 'Kamau', origin: 'african', meaning: 'Quiet warrior' },
  { name: 'Adeyemi', origin: 'african', meaning: 'Crown is worthy of me' },
  { name: 'Traore', origin: 'african', meaning: 'Courageous spearman' },

  // Greek
  { name: 'Papadopoulos', origin: 'greek', meaning: 'Son of the priest' },
  { name: 'Economos', origin: 'greek', meaning: 'Steward, household manager' },
  { name: 'Christodoulou', origin: 'greek', meaning: 'Servant of Christ' },
  { name: 'Vasiliou', origin: 'greek', meaning: 'Son of the royal basileus' },
  { name: 'Stavros', origin: 'greek', meaning: 'Cross, upright pillar' },

  // Latin
  { name: 'Valerius', origin: 'latin', meaning: 'To be strong, valiant clan' },
  { name: 'Cornelius', origin: 'latin', meaning: 'Horn of victory' },
  { name: 'Aurelius', origin: 'latin', meaning: 'Golden patrician' },
  { name: 'Claudius', origin: 'latin', meaning: 'Noble patrician of Rome' },
  { name: 'Flavius', origin: 'latin', meaning: 'Golden blond warrior' },
];

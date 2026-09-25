import { GeneratorOptions } from '../names/types';

export interface GeneratorPageData {
  slug: string;
  category: string;
  title: string;
  metaDescription: string;
  h1: string;
  subheading: string;
  introText: string;
  defaultOptions: Partial<GeneratorOptions>;
  howItWorks: { step: string; title: string; desc: string }[];
  examples: { name: string; tag: string; description: string }[];
  tips: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const GENERATOR_PAGES: Record<string, GeneratorPageData> = {
  // GENERAL
  'random-first-name-generator': {
    slug: 'random-first-name-generator',
    category: 'General Names',
    title: 'Random First Name Generator - Male, Female & Neutral',
    metaDescription: 'Generate random first names instantly with origin, style, and gender filters. Perfect for babies, story characters, online handles, and creative projects.',
    h1: 'Random First Name Generator',
    subheading: 'Instant, realistic first names across global cultures, styles, and genders.',
    introText: 'Looking for the perfect forename? Our random first name generator gives you instant access to thousands of traditional, modern, rare, and stylish first names from over 20 countries. Filter by gender, region, or style with a single click.',
    defaultOptions: { type: 'first', gender: 'any', origin: 'any', count: 10 },
    howItWorks: [
      { step: '1', title: 'Pick Gender & Origin', desc: 'Select male, female, neutral, or any country origin to match your intended cultural background.' },
      { step: '2', title: 'Choose Name Style', desc: 'Filter for classic, modern, cute, vintage, or strong phonetics.' },
      { step: '3', title: 'Generate & Save', desc: 'Click Generate to produce up to 100 unique first names. Copy or favorite your selections instantly.' },
    ],
    examples: [
      { name: 'Liam', tag: 'American / Modern', description: 'Strong-willed protector; currently one of the world’s most popular modern male names.' },
      { name: 'Amelia', tag: 'British / Vintage', description: 'Industrious and striving; timeless elegance popular across English-speaking regions.' },
      { name: 'Ren', tag: 'Japanese / Nature', description: 'Means lotus or water lily; crisp, gender-neutral, and deeply poetic.' },
      { name: 'Saoirse', tag: 'Irish / Meaningful', description: 'Means freedom or liberty; beautiful Celtic resonance.' },
    ],
    tips: [
      { title: 'Test Pronunciation Flow', desc: 'Say the first name aloud alongside potential surnames or titles to ensure rhythmic meter.' },
      { title: 'Consider Cultural Nuance', desc: 'Check that the origin and meaning fit the temporal or geographic setting of your project.' },
      { title: 'Balance Uniqueness with Clarity', desc: 'If writing fiction, avoid having multiple major characters start with identical syllables.' },
      { title: 'Check Nickname Potential', desc: 'Consider common diminutive forms (e.g., Theodore → Theo/Teddy).' },
    ],
    faqs: [
      { question: 'Can I generate only male or female first names?', answer: 'Yes! Select "Male", "Female", or "Gender-Neutral" in the gender filter to constrain the output immediately.' },
      { question: 'Are these first names authentic?', answer: 'Every name in our database comes from verified linguistic traditions, historical records, and national birth census statistics.' },
      { question: 'How many first names can I generate at once?', answer: 'You can generate 1, 5, 10, 20, 50, or 100 names per click without any page reloads.' },
      { question: 'Is this first name generator completely free?', answer: 'Yes, 100% free with no account required, no database tracking, and full offline/client-side functionality.' },
    ],
    relatedSlugs: ['random-full-name-generator', 'male-name-generator', 'female-name-generator', 'last-name-generator', 'baby-character-names'],
  },

  'random-full-name-generator': {
    slug: 'random-full-name-generator',
    category: 'General Names',
    title: 'Random Full Name Generator - Realistic First & Last Names',
    metaDescription: 'Generate authentic random full names complete with compatible first names and surnames. Filter by gender, ethnicity, nationality, and style.',
    h1: 'Random Full Name Generator',
    subheading: 'Create realistic full names combining authentic first names and culturally matched surnames.',
    introText: 'Need complete, convincing identities for novel protagonists, game NPCs, personas, or mock data? Our full name generator seamlessly pairs authentic given names with historically and culturally compatible family names.',
    defaultOptions: { type: 'full', gender: 'any', origin: 'any', count: 10, includeSurname: true },
    howItWorks: [
      { step: '1', title: 'Set Cultural Origin', desc: 'Select a country to pair culturally consistent first and last names, or choose "Any" for global combinations.' },
      { step: '2', title: 'Define Identity Parameters', desc: 'Configure gender and style, or supply an optional custom family surname.' },
      { step: '3', title: 'Instant Full Identities', desc: 'Generate complete two-part identities ready for immediate copying or text export.' },
    ],
    examples: [
      { name: 'Oliver Hawthorne', tag: 'British Classic', description: 'Combines an aristocratic given name with a traditional topographical English surname.' },
      { name: 'Aarav Patel', tag: 'Indian Modern', description: 'Harmonious pairing of a beloved modern given name with a historic Gujarati family name.' },
      { name: 'Camille Laurent', tag: 'French Elegant', description: 'Graceful balance of classic French phonetics and noble roots.' },
      { name: 'Mateo Castillo', tag: 'Spanish Contemporary', description: 'Popular Hispanic given name coupled with a distinguished architectural surname.' },
    ],
    tips: [
      { title: 'Check Syllable Rhythm', desc: 'A short first name often sounds punchiest with a multi-syllable surname (e.g., Jack Pemberton).' },
      { title: 'Preserve Ethnic Consistency', desc: 'Unless intentionally creating a multicultural background, keeping first and last names in the same linguistic family reinforces realism.' },
      { title: 'Watch for Accidental Celebrity Matches', desc: 'Always double-check that your generated combination doesn’t unintentionally match a famous living person.' },
      { title: 'Download Batch for Reference', desc: 'Use our "Download TXT" feature to keep an organized list of character rosters for your world-building binder.' },
    ],
    faqs: [
      { question: 'Does the generator automatically match surnames to the origin?', answer: 'Yes! When you select an origin like Japanese, German, or Irish, the system pairs compatible first and last names natively.' },
      { question: 'Can I provide my own surname?', answer: 'Yes, you can specify an optional custom surname, and the generator will pair diverse first names with it.' },
      { question: 'Can I export all generated full names?', answer: 'Yes, click "Copy All" or "Download TXT" to instantly save your full roster without signing up.' },
    ],
    relatedSlugs: ['random-first-name-generator', 'last-name-generator', 'character-name-generator', 'male-name-generator', 'female-name-generator'],
  },

  'male-name-generator': {
    slug: 'male-name-generator',
    category: 'General Names',
    title: 'Male Name Generator - Strong, Classic & Modern Boy Names',
    metaDescription: 'Generate thousands of random male names with meanings and origins. Discover strong, cool, vintage, and unique boy names for characters and babies.',
    h1: 'Male Name Generator',
    subheading: 'Discover strong, handsome, and charismatic male names tailored to any genre or culture.',
    introText: 'Whether you are naming a legendary heroic protagonist, a gritty noir detective, or searching for baby boy name inspiration, our male name generator delivers instant curated names spanning traditional, vintage, and modern trends.',
    defaultOptions: { type: 'first', gender: 'male', origin: 'any', count: 10 },
    howItWorks: [
      { step: '1', title: 'Select Regional Tone', desc: 'Choose from Anglo-American, Celtic, Nordic, Mediterranean, Asian, and Slavic heritage.' },
      { step: '2', title: 'Pick Personality Style', desc: 'Filter for strong warrior roots, classic gentlemen tones, or sleek modern names.' },
      { step: '3', title: 'Generate & Review', desc: 'Instantly view names alongside their linguistic meanings and cultural backstories.' },
    ],
    examples: [
      { name: 'Alexander', tag: 'Greek / Powerful', description: 'Defender of the people; historic imperial majesty.' },
      { name: 'Ragnar', tag: 'Norse / Warrior', description: 'Warrior of divine counsel; gritty Viking heritage.' },
      { name: 'Julian', tag: 'Latin / Classic', description: 'Youthful and noble; timeless aristocratic flair.' },
      { name: 'Kenji', tag: 'Japanese / Intelligent', description: 'Intelligent second son; respected modern appeal.' },
    ],
    tips: [
      { title: 'Match Hard Consonants to Archetypes', desc: 'Names with hard K, T, and R sounds naturally communicate martial strength, while vowels and L/M sounds convey gentle warmth.' },
      { title: 'Review Historical Weight', desc: 'Names like Arthur or Marcus carry centuries of mythic association that prime the reader’s perception.' },
      { title: 'Mix Vintage with Contemporary', desc: 'Vintage boy names (Archie, Henry, Theodore) are currently undergoing huge revivals.' },
    ],
    faqs: [
      { question: 'Does this generator only show male names?', answer: 'Yes, the gender filter is hard-locked to male entries, ensuring no mixed results.' },
      { question: 'Can I add surnames to male names?', answer: 'Simply toggle "Full Name" in the type dropdown to generate male given names with matching surnames.' },
    ],
    relatedSlugs: ['female-name-generator', 'gender-neutral-name-generator', 'warrior-name-generator', 'random-first-name-generator'],
  },

  'female-name-generator': {
    slug: 'female-name-generator',
    category: 'General Names',
    title: 'Female Name Generator - Beautiful, Elegant & Unique Girl Names',
    metaDescription: 'Generate random female names across dozens of styles, cultures, and origins. Explore beautiful, strong, vintage, and aesthetic girl names instantly.',
    h1: 'Female Name Generator',
    subheading: 'Find beautiful, elegant, and distinctive female names for stories, characters, and babies.',
    introText: 'From regal medieval queens and fierce fantasy heroines to modern minimalist girl names, our female name generator curates inspiring names with rich etymological roots and lyrical cadence.',
    defaultOptions: { type: 'first', gender: 'female', origin: 'any', count: 10 },
    howItWorks: [
      { step: '1', title: 'Choose Your Aesthetic', desc: 'Filter by cute, elegant, strong, rare, or mythological styles.' },
      { step: '2', title: 'Select Heritage', desc: 'Pick from French, Italian, Scandinavian, Indian, Japanese, Arabic, and more.' },
      { step: '3', title: 'Save Favorites', desc: 'Heart your top contenders to store them in your private local favorites drawer.' },
    ],
    examples: [
      { name: 'Genevieve', tag: 'French / Royal', description: 'Tribe woman; aristocratic presence and musical cadence.' },
      { name: 'Aurora', tag: 'Latin / Mythological', description: 'Dawn goddess; ethereal beauty that evokes celestial wonder.' },
      { name: 'Freja', tag: 'Scandinavian / Goddess', description: 'Norse goddess of love, gold, and destiny; fierce yet graceful.' },
      { name: 'Ananya', tag: 'Indian / Unique', description: 'Incomparable; one of the most graceful Sanskrit female names.' },
    ],
    tips: [
      { title: 'Consider Melodic Cadence', desc: 'Names ending in vowels (-a, -e, -i) tend to have an open, lyrical resonance.' },
      { title: 'Seek Depth in Meanings', desc: 'Choosing a name whose linguistic translation reflects your character’s internal arc adds subtle narrative symbolism.' },
    ],
    faqs: [
      { question: 'Can I find rare or unusual female names?', answer: 'Yes! Select the "Rare" or "Unique" style filter to view less common historical and literary gems.' },
      { question: 'Are meanings provided for each female name?', answer: 'Yes, our database includes verified meanings and linguistic roots for every entry.' },
    ],
    relatedSlugs: ['male-name-generator', 'gender-neutral-name-generator', 'fairy-name-generator', 'random-first-name-generator'],
  },

  'gender-neutral-name-generator': {
    slug: 'gender-neutral-name-generator',
    category: 'General Names',
    title: 'Gender-Neutral Name Generator - Unisex & Modern Names',
    metaDescription: 'Generate unisex, non-binary, and gender-neutral names instantly. Perfect for characters, modern babies, and stylish online personas.',
    h1: 'Gender-Neutral Name Generator',
    subheading: 'Explore versatile, modern, and timeless unisex names that transcend traditional boundaries.',
    introText: 'Gender-neutral names offer fluidity, modern sophistication, and memorable individuality. Our generator pulls from nature, geography, classic surnames used as first names, and cross-cultural unisex naming traditions.',
    defaultOptions: { type: 'first', gender: 'neutral', origin: 'any', count: 10 },
    howItWorks: [
      { step: '1', title: 'Explore Nature & Modern Roots', desc: 'Discover names derived from flora, celestial bodies, colors, and virtues.' },
      { step: '2', title: 'Select Origin', desc: 'Find unisex names in English, Japanese, French, Celtic, and African heritage.' },
      { step: '3', title: 'Copy & Share', desc: 'Easily copy individual names or export your favorites list to a text document.' },
    ],
    examples: [
      { name: 'Rowan', tag: 'Celtic / Nature', description: 'Associated with the protective mountain ash tree and red berry blossom.' },
      { name: 'Sage', tag: 'Latin / Herb', description: 'Represents wisdom, tranquility, and aromatic natural resilience.' },
      { name: 'Ren', tag: 'Japanese / Lotus', description: 'One of Japan’s most popular unisex names denoting purity and spiritual growth.' },
      { name: 'Riley', tag: 'Irish / Courageous', description: 'Adaptable, friendly, and energetic unisex favorite worldwide.' },
    ],
    tips: [
      { title: 'Embrace Nature-Inspired Roots', desc: 'Botanical and mineral names (River, Ash, Onyx, Sage) offer naturally organic neutrality.' },
      { title: 'Consider Surname-First Names', desc: 'Traditional patronymics and place-names (Avery, Jordan, Morgan) make charismatic unisex given names.' },
    ],
    faqs: [
      { question: 'What qualifies a name as gender-neutral in this tool?', answer: 'Names that are historically documented as being shared equally across genders, as well as modern nature and occupational unisex names.' },
    ],
    relatedSlugs: ['random-first-name-generator', 'male-name-generator', 'female-name-generator', 'username-generator'],
  },

  'last-name-generator': {
    slug: 'last-name-generator',
    category: 'General Names',
    title: 'Last Name Generator - Authentic Surnames by Origin',
    metaDescription: 'Generate random last names and family surnames from over 20 countries. Filter by British, Irish, French, German, Spanish, Asian, and Slavic origins.',
    h1: 'Random Last Name Generator',
    subheading: 'Discover authentic family names, historic surnames, and clan designations from across the globe.',
    introText: 'Surnames ground characters in family history, geography, and ancestral trade. Our last name generator provides thousands of verified patronymic, occupational, topographical, and noble surnames from around the world.',
    defaultOptions: { type: 'last', origin: 'any', count: 10 },
    howItWorks: [
      { step: '1', title: 'Choose Cultural Ancestry', desc: 'Select British, Scottish, French, German, Japanese, Indian, or other global traditions.' },
      { step: '2', title: 'Generate Surnames', desc: 'View authentic spellings alongside their etymological trade or topographical origins.' },
      { step: '3', title: 'Pair with First Names', desc: 'Combine with your existing character names or download a master reference list.' },
    ],
    examples: [
      { name: 'Blackwood', tag: 'English / Topographical', description: 'Dweller by the dense, shadowy woodland; evocative and gothic.' },
      { name: 'MacLeod', tag: 'Scottish / Clan', description: 'Descendant of Leod; iconic Highland clan heritage.' },
      { name: 'Fontaine', tag: 'French / Topographical', description: 'Dweller near the natural spring or fountain.' },
      { name: 'Takahashi', tag: 'Japanese / Topographical', description: 'High bridge; one of Japan’s most historic and respected family names.' },
    ],
    tips: [
      { title: 'Understand Surname Categories', desc: 'Surnames typically fall into Occupational (Smith, Miller), Topographical (Hill, Dubois), Patronymic (Johnson, Ivanov), or Characteristic (Armstrong).' },
    ],
    faqs: [
      { question: 'Can I generate surnames from specific countries?', answer: 'Yes, pick any country in the Origin dropdown to receive authentic surnames exclusively from that culture.' },
    ],
    relatedSlugs: ['random-full-name-generator', 'random-first-name-generator', 'character-name-generator'],
  },

  // FANTASY & CHARACTER
  'fantasy-name-generator': {
    slug: 'fantasy-name-generator',
    category: 'Character Names',
    title: 'Fantasy Name Generator - D&D, RPG, Elves, Dragons & Wizards',
    metaDescription: 'Generate epic fantasy names for D&D characters, tabletop RPGs, fantasy novels, and worldbuilding. Procedural names for elves, warriors, dragons, and sorcerers.',
    h1: 'Fantasy Name Generator',
    subheading: 'Create epic, immersive fantasy names for tabletop RPGs, high-fantasy fiction, and worldbuilders.',
    introText: 'Immerse your readers and players in realms of myth and wonder. Our fantasy name generator combines curated legendary names with a syllabic procedural engine that crafts limitless elven, wizardly, draconic, and heroic titles.',
    defaultOptions: { type: 'fantasy', subCategory: 'elf', count: 10 },
    howItWorks: [
      { step: '1', title: 'Pick Fantasy Race or Class', desc: 'Choose between Elves, Wizards, Warriors, Dragons, Pirates, Villains, Fairies, and more.' },
      { step: '2', title: 'Procedural Syllable Engine', desc: 'Our engine pairs phonetically curated prefixes, ancient roots, and race-specific epithets.' },
      { step: '3', title: 'Epic Roster Generation', desc: 'Instantly receive names with embedded lore and meanings ready for your next session.' },
    ],
    examples: [
      { name: 'Aeloria Silverleaf', tag: 'High Elf', description: 'Song of the moonlight dawn; revered ranger of the starlight glade.' },
      { name: 'Eldrin the Grey', tag: 'Archmage', description: 'Master of arcane mysteries and forbidden elemental wards.' },
      { name: 'Balerion the Black Dread', tag: 'Dragon', description: 'Winged shadow that consumed ancient empires in dragonfire.' },
      { name: 'Lord Malakor', tag: 'Dark Overlord', description: 'Ruler of the withered thrones and master of necromantic legions.' },
    ],
    tips: [
      { title: 'Match Phonetics to Lore', desc: 'Elves favor flowing sibilants (L, S, R, V), while Dwarves and Orcs thrive on guttural plosives (K, G, R, B).' },
      { title: 'Use Descriptive Epithets', desc: 'Adding titles like "Stormcaller" or "Stonebreaker" instantly provides backstory without paragraph-long exposition.' },
      { title: 'Keep Player Pronunciation in Mind', desc: 'For tabletop D&D games, make sure your players can easily pronounce character names during heated combat!' },
    ],
    faqs: [
      { question: 'Is this fantasy generator suitable for Dungeons & Dragons?', answer: 'Absolutely! All archetypes and procedural morphemes are tailored directly to 5e races, classes, and forgotten realms settings.' },
      { question: 'Are fantasy names generated randomly?', answer: 'Yes! We blend hand-curated mythical names with an algorithmic morpheme combiner that produces millions of unique variations.' },
    ],
    relatedSlugs: ['character-name-generator', 'dnd-name-generator', 'elf-name-generator', 'wizard-name-generator', 'dragon-name-generator', 'villain-name-generator'],
  },

  'character-name-generator': {
    slug: 'character-name-generator',
    category: 'Character Names',
    title: 'Character Name Generator - Names for Books, Games & Stories',
    metaDescription: 'Generate memorable character names for novelists, screenwriters, RPG game masters, and creative storytellers. Find names that match your character’s soul.',
    h1: 'Character Name Generator',
    subheading: 'Craft unforgettable character names that hook readers and define memorable protagonists.',
    introText: 'Great stories start with indelible characters. Our character name generator gives novelists, screenwriters, and game developers the tools to generate names that embody character archetypes, time periods, and thematic tones.',
    defaultOptions: { type: 'character', gender: 'any', origin: 'any', count: 10 },
    howItWorks: [
      { step: '1', title: 'Choose Character Archetype', desc: 'Select from heroic, gritty, dark, mysterious, or realistic contemporary genres.' },
      { step: '2', title: 'Configure Attributes', desc: 'Filter by gender and culture to ground your fictional characters in their world.' },
      { step: '3', title: 'Build Your Cast List', desc: 'Favorite standout names and download full cast sheets in plain text format.' },
    ],
    examples: [
      { name: 'Silas Graves', tag: 'Gritty Noir', description: 'Weathered detective carrying secrets through rainy cobblestone streets.' },
      { name: 'Vespera Nightcast', tag: 'Dark Fantasy', description: 'Sorceress walking the razor boundary between sanity and forbidden magic.' },
      { name: 'Arthur Hawthorne', tag: 'Period Drama', description: 'Stoic Victorian aristocrat holding together a crumbling estate.' },
    ],
    tips: [
      { title: 'Avoid Alliterative Overlap in Your Cast', desc: 'Ensure your main characters do not have names that look or sound alike (e.g., avoid pairing Brandon, Brenda, and Brian in the same scene).' },
      { title: 'Let the Name Reflect Flaws or Strengths', desc: 'Subtle etymological connections provide satisfying easter eggs for attentive readers.' },
    ],
    faqs: [
      { question: 'Can I use these names for commercial books and video games?', answer: 'Yes! All names generated are public domain linguistic combinations and can be freely used in published novels, indie games, and screenplays.' },
    ],
    relatedSlugs: ['fantasy-name-generator', 'random-full-name-generator', 'villain-name-generator', 'superhero-name-generator', 'warrior-name-generator'],
  },

  'dnd-name-generator': {
    slug: 'dnd-name-generator',
    category: 'Gaming',
    title: 'D&D Name Generator - 5e Character & NPC Names',
    metaDescription: 'Generate instant D&D character names for Dungeons & Dragons 5e. Create names for Elves, Dwarves, Tieflings, Rogues, Paladins, and Dungeon Master NPCs.',
    h1: 'D&D Name Generator',
    subheading: 'Instant, lore-friendly names for your next Dungeons & Dragons campaign or NPC encounter.',
    introText: 'When your party unexpectedly interrogates a tavern keeper or you need an epic name for your new Level 1 Sorcerer, our D&D name generator provides instant, setting-appropriate names complete with thematic flavor.',
    defaultOptions: { type: 'fantasy', subCategory: 'dnd', count: 10 },
    howItWorks: [
      { step: '1', title: 'Select Class or Heritage', desc: 'Choose warrior, wizard, elf, pirate, or dragon roots tailored to the Forgotten Realms.' },
      { step: '2', title: 'Generate with Lore', desc: 'Receive names with evocative epithets that provide immediate quest hooks.' },
      { step: '3', title: 'Ready for the Battlemat', desc: 'Copy straight into your Roll20, Foundry VTT, or character sheet.' },
    ],
    examples: [
      { name: 'Ragnar Stonebreaker', tag: 'Fighter / Barbarian', description: 'Mountain-born berserker with a two-handed greataxe and ancestral oaths.' },
      { name: 'Elyndra Starweaver', tag: 'Wizard / Sorcerer', description: 'Arcane scholar attuned to celestial divinations and cosmic leylines.' },
      { name: 'Cutlass Jack Vance', tag: 'Rogue / Swashbuckler', description: 'Quick-tongued privateer who never enters a tavern without an escape route.' },
    ],
    tips: [
      { title: 'Have 5 Backup NPC Names Ready', desc: 'Dungeon Masters: keep a batch of 10 names open on your tablet so you never freeze when players ask for a random guard’s name!' },
    ],
    faqs: [
      { question: 'Is this generator compliant with D&D 5e canon?', answer: 'Yes, the phonetic patterns match official fantasy race naming conventions.' },
    ],
    relatedSlugs: ['fantasy-name-generator', 'rpg-name-generator', 'elf-name-generator', 'wizard-name-generator'],
  },

  'elf-name-generator': {
    slug: 'elf-name-generator',
    category: 'Character Names',
    title: 'Elf Name Generator - High Elf, Wood Elf & Drow Names',
    metaDescription: 'Generate mystical elf names with lyrical sibilants and nature epithets. Perfect for Tolkien-inspired high elves, wood elves, and fantasy worldbuilding.',
    h1: 'Elf Name Generator',
    subheading: 'Lyrical, ethereal, and ancient elven names steeped in starlight and woodland lore.',
    introText: 'Elven names are characterized by melodic vowels, flowing consonants, and poetic surnames celebrating nature, celestial bodies, and ancient magic.',
    defaultOptions: { type: 'fantasy', subCategory: 'elf', count: 10 },
    howItWorks: [
      { step: '1', title: 'Linguistic Harmony', desc: 'Generated using classical Tolkien-inspired morphemes and Celtic cadence.' },
      { step: '2', title: 'Nature Surnames', desc: 'Paired with evocative clan designations like Moonwhisper, Silverleaf, and Sunstrider.' },
      { step: '3', title: 'Instant Inspiration', desc: 'Click to generate and copy ethereal names for your fantasy campaigns.' },
    ],
    examples: [
      { name: 'Faerand Sunstrider', tag: 'High Elf Ranger', description: 'Swift solar wanderer guarding the radiant perimeter.' },
      { name: 'Galadhel Dawnsinger', tag: 'Elven Cleric', description: 'Chanter of sacred dawn hymns that banish creeping shadow.' },
      { name: 'Kaelen Windrunner', tag: 'Wood Elf Archer', description: 'Ghostly marksman who moves silently among the canopy branches.' },
    ],
    tips: [
      { title: 'Focus on Fluid Transitions', desc: 'Elven names avoid jarring stops; prioritize smooth transitions like -iel, -wyn, -or, and -ae.' },
    ],
    faqs: [
      { question: 'Can I generate female elf names?', answer: 'Yes, you can filter for female, male, or unisex elven names.' },
    ],
    relatedSlugs: ['fantasy-name-generator', 'dnd-name-generator', 'fairy-name-generator', 'wizard-name-generator'],
  },

  'wizard-name-generator': {
    slug: 'wizard-name-generator',
    category: 'Character Names',
    title: 'Wizard Name Generator - Arcane Mage & Sorcerer Names',
    metaDescription: 'Generate mystical wizard names for mages, warlocks, sorcerers, and chronomancers. Evocative arcane titles and spellcaster names.',
    h1: 'Wizard Name Generator',
    subheading: 'Arcane, scholarly, and mysterious names for spellcasters, mages, and sorceresses.',
    introText: 'From wise elder archmages in starry robes to dark warlocks whispering forbidden curses, our wizard name generator conjures names brimming with esoteric power.',
    defaultOptions: { type: 'fantasy', subCategory: 'wizard', count: 10 },
    howItWorks: [
      { step: '1', title: 'Arcane Phonetics', desc: 'Combines Latinate and mythical roots with archaic scholar styling.' },
      { step: '2', title: 'Magical Epithets', desc: 'Automatically appends mysterious descriptors like "Spellweaver", "the Grey", or "Runeveil".' },
      { step: '3', title: 'Instant Grimoire Roster', desc: 'Generate hundreds of spellcaster names for fiction and tabletop gaming.' },
    ],
    examples: [
      { name: 'Zephyrus the Enlightened', tag: 'Aeromancer', description: 'Scholar of planar wind corridors and tempest wards.' },
      { name: 'Morgana Voidwalker', tag: 'Nether Mage', description: 'Explorer of liminal dimensions beyond mortal space.' },
      { name: 'Kelvin Frostbound', tag: 'Cryomancer', description: 'Master of perpetual winter atop frozen crystalline spires.' },
    ],
    tips: [
      { title: 'Pair Archaic First Names with Mysterious Titles', desc: 'A short Latin or Greek given name paired with a descriptive epithet (e.g., Baltazar the Timeless) creates an aura of ancient knowledge.' },
    ],
    faqs: [
      { question: 'Can I generate dark sorcerer or necromancer names?', answer: 'Yes, the tool generates both noble archmages and ominous void-casting warlocks.' },
    ],
    relatedSlugs: ['fantasy-name-generator', 'dnd-name-generator', 'villain-name-generator', 'dragon-name-generator'],
  },

  'warrior-name-generator': {
    slug: 'warrior-name-generator',
    category: 'Character Names',
    title: 'Warrior Name Generator - Fierce Knight & Berserker Names',
    metaDescription: 'Generate fierce warrior names for gladiators, knights, vikings, and battle commanders. Unyielding names that command respect on the battlefield.',
    h1: 'Warrior Name Generator',
    subheading: 'Ironclad, indomitable, and battle-tested names for fighters, champions, and warlords.',
    introText: 'When your character must withstand dragon fire, hold the line at the city gates, or cleave through enemy ranks, our warrior name generator produces names of pure martial strength.',
    defaultOptions: { type: 'fantasy', subCategory: 'warrior', count: 10 },
    howItWorks: [
      { step: '1', title: 'Hard Consonants & Guttural Roots', desc: 'Engineered using Norse, Saxon, and Spartan phonetic cadences.' },
      { step: '2', title: 'Battlefield Epithets', desc: 'Paired with honorifics like Ironclad, Bloodfang, Stonebreaker, and Shieldmaiden.' },
      { step: '3', title: 'Ready for War', desc: 'Copy your chosen champion’s name directly into your character sheet.' },
    ],
    examples: [
      { name: 'Valda Shieldmaiden', tag: 'Valkyrie Vanguard', description: 'Guardian of the mountain hearth whose shield has never splintered.' },
      { name: 'Bjorn Bearclaw', tag: 'Berserker', description: 'Fierce warrior fighting with the raw fury of an arctic predator.' },
      { name: 'Garrick the Indomitable', tag: 'Veteran Knight', description: 'Survivor of twenty campaigns and master of siege defense.' },
    ],
    tips: [
      { title: 'Use Two-Part Descriptive Surnames', desc: 'Combinations like "Stormblade" or "Helmcrusher" immediately communicate combat feats.' },
    ],
    faqs: [
      { question: 'Can I generate female warrior names?', answer: 'Yes, select "Female" to generate formidable shieldmaidens, valkyries, and warrior queens.' },
    ],
    relatedSlugs: ['fantasy-name-generator', 'medieval-name-generator', 'dnd-name-generator', 'male-name-generator'],
  },

  'dragon-name-generator': {
    slug: 'dragon-name-generator',
    category: 'Character Names',
    title: 'Dragon Name Generator - Ancient Wyrm & Drake Names',
    metaDescription: 'Generate terrifying, majestic dragon names for fantasy novels, RPG campaigns, and mythical worldbuilding. Ancient drakes, wyverns, and cosmic dragons.',
    h1: 'Dragon Name Generator',
    subheading: 'Majestic, ancient, and apocalyptic names for mythical wyrms, drakes, and elder dragons.',
    introText: 'Dragons represent primordial nature, immense greed, and world-shaking power. Our dragon name generator produces names echoing thunder, scorched stone, and millennia of slumber.',
    defaultOptions: { type: 'fantasy', subCategory: 'dragon', count: 10 },
    howItWorks: [
      { step: '1', title: 'Draconic Morphemes', desc: 'Procedural generation using harsh sibilants, guttural stops, and rolling r’s.' },
      { step: '2', title: 'Calamity Titles', desc: 'Appends grand epithets such as "the Black Dread", "Embermaw", and "the Star Forger".' },
      { step: '3', title: 'Instant Boss Lore', desc: 'Every dragon comes with a descriptive summary of their mythical menace.' },
    ],
    examples: [
      { name: 'Vermithrax Pejorative', tag: 'Caldera Wyrm', description: 'Ancient terror lurking within molten volcanic magma.' },
      { name: 'Frostfang Glaciovore', tag: 'Frost Drake', description: 'Glacial terror that freezes entire northern armadas in solid ice.' },
      { name: 'Pyroth Embermaw', tag: 'Fire Drake', description: 'Living inferno whose breath turns granite battlements to slag.' },
    ],
    tips: [
      { title: 'Lengthen the Syllables for Age', desc: 'Young drakes have short, snapping names (Vael, Ash), while thousand-year-old elder wyrms carry grand Latinate designations.' },
    ],
    faqs: [
      { question: 'Can these names be used for friendly or pet dragons?', answer: 'Yes, select from celestial Star Forger variants or shorter nicknames as needed.' },
    ],
    relatedSlugs: ['fantasy-name-generator', 'wizard-name-generator', 'villain-name-generator'],
  },

  'pirate-name-generator': {
    slug: 'pirate-name-generator',
    category: 'Character Names',
    title: 'Pirate Name Generator - Swashbuckler & Sea Captain Names',
    metaDescription: 'Generate salty pirate names for captains, buccaneers, deckhands, and privateers. Swashbuckling monikers for sea adventures and tavern brawls.',
    h1: 'Pirate Name Generator',
    subheading: 'Swashbuckling, roguish, and salty names for high-seas buccaneers, captains, and privateers.',
    introText: 'Hoist the Jolly Roger! Our pirate name generator creates authentic maritime scoundrels, fearless captains, and cutthroat privateers ready to sail the Spanish Main.',
    defaultOptions: { type: 'fantasy', subCategory: 'pirate', count: 10 },
    howItWorks: [
      { step: '1', title: 'Maritime Ranks & Nicknames', desc: 'Includes Captain, Quartermaster, One-Eyed, and Cutlass honorifics.' },
      { step: '2', title: '17th-Century Cadence', desc: 'Historical English, Celtic, and Caribbean sailing names.' },
      { step: '3', title: 'High-Seas Ready', desc: 'Instantly download character profiles for your pirate crew.' },
    ],
    examples: [
      { name: 'Captain Barnaby Thorne', tag: 'Galleon Captain', description: 'Feared terror of the Caribbean trade routes.' },
      { name: 'Scarlett Flint', tag: 'Privateer', description: 'Fierce captain of the Blood Tide whose cannon crews never miss.' },
      { name: 'One-Eyed Silas Graves', tag: 'Quartermaster', description: 'Keeper of charts, hidden coves, and buried gold bullion.' },
    ],
    tips: [
      { title: 'Add a Quirky Physical Trait', desc: 'Pirate nicknames historically derived from combat injuries, eccentric hats, or favored weapons.' },
    ],
    faqs: [
      { question: 'Can I generate female pirate names?', answer: 'Yes! Generate historical buccaneers like Anne Bonny and Mary Read inspired names.' },
    ],
    relatedSlugs: ['character-name-generator', 'warrior-name-generator', 'villain-name-generator'],
  },

  'superhero-name-generator': {
    slug: 'superhero-name-generator',
    category: 'Character Names',
    title: 'Superhero Name Generator - Comic Book & Vigilante Hero Names',
    metaDescription: 'Generate superhero and heroine names for comic books, video games, and graphic novels. Tech heroes, cosmic titans, and street-level vigilantes.',
    h1: 'Superhero Name Generator',
    subheading: 'Electrifying, iconic, and heroic aliases for comic book champions, vigilantes, and cosmic defenders.',
    introText: 'Every masked champion needs a name that strikes hope into innocent citizens and terror into villainous syndicates. Our superhero name generator crafts unforgettable superhero names.',
    defaultOptions: { type: 'fantasy', subCategory: 'superhero', count: 10 },
    howItWorks: [
      { step: '1', title: 'Power Archetypes', desc: 'Select cosmic, shadow, cyber, or elemental hero roots.' },
      { step: '2', title: 'Iconic Compounds', desc: 'Blends evocative adjectives with punchy heroic nouns.' },
      { step: '3', title: 'Save Your Hero', desc: 'Store your superhero universe in local browser favorites.' },
    ],
    examples: [
      { name: 'Shadowstrike', tag: 'Vigilante', description: 'Silent martial artist patrolling moonlit rooftops.' },
      { name: 'Solarflare', tag: 'Cosmic Heroine', description: 'Manipulator of solar plasma and electromagnetic shields.' },
      { name: 'Chrono Knight', tag: 'Time Traveler', description: 'Guardian defending timeline integrity against paradoxes.' },
    ],
    tips: [
      { title: 'Keep It Punchy and Visual', desc: 'Great comic book names (Batman, Storm, Flash) can be visualized as an emblem on a chest.' },
    ],
    faqs: [
      { question: 'Can I generate names for superhero teams?', answer: 'Yes, generate multiple compatible names to build an entire justice league.' },
    ],
    relatedSlugs: ['villain-name-generator', 'character-name-generator', 'gamer-name-generator'],
  },

  'villain-name-generator': {
    slug: 'villain-name-generator',
    category: 'Character Names',
    title: 'Villain Name Generator - Dark Lords & Comic Supervillains',
    metaDescription: 'Generate sinister villain names for dark lords, evil masterminds, assassins, and gothic antagonists. Create names that send chills down spines.',
    h1: 'Villain Name Generator',
    subheading: 'Sinister, chilling, and malevolent names for dark lords, corrupt overlords, and rogue masterminds.',
    introText: 'A story is only as compelling as its antagonist. Our villain name generator equips you with dark, intimidating monikers for conquerors, necromancers, and calculating schemers.',
    defaultOptions: { type: 'fantasy', subCategory: 'villain', count: 10 },
    howItWorks: [
      { step: '1', title: 'Dark Phonetics', desc: 'Harnessing sharp consonants, Latin mal- prefixes, and gothic cadence.' },
      { step: '2', title: 'Ominous Epithets', desc: 'Paired with dread designations like "the Corrupt", "Nightshade", and "Lord of Ruin".' },
      { step: '3', title: 'Rival Roster Ready', desc: 'Export dark names to plot your protagonist’s ultimate confrontation.' },
    ],
    examples: [
      { name: 'Lord Malakor', tag: 'Dark Overlord', description: 'Tyrant reigning from obsidian citadel above a withered empire.' },
      { name: 'Vespera Nightshade', tag: 'Poisoner', description: 'Master alchemist of undetectable neurotoxins in royal courts.' },
      { name: 'Baron Grimm', tag: 'Gothic Aristocrat', description: 'Corrupt industrialist funding forbidden subterranean laboratories.' },
    ],
    tips: [
      { title: 'Contrast Sophistication with Brutality', desc: 'Aristocratic titles (Baron, Countess) paired with sinister names elevate the antagonist’s menace.' },
    ],
    faqs: [
      { question: 'Can I generate subtle or realistic antagonist names?', answer: 'Yes, switch to the "Character" or "Full Name" generator for grounded, modern villain personas.' },
    ],
    relatedSlugs: ['superhero-name-generator', 'fantasy-name-generator', 'vampire-name-generator'],
  },

  'medieval-name-generator': {
    slug: 'medieval-name-generator',
    category: 'Character Names',
    title: 'Medieval Name Generator - Knights, Nobles & Peasant Names',
    metaDescription: 'Generate historically inspired medieval names for knights, lords, ladies, squires, and castle folk. Authentic feudal names with historical titles.',
    h1: 'Medieval Name Generator',
    subheading: 'Feudal, noble, and chivalric names from the age of castles, tournaments, and crusades.',
    introText: 'Transport your story or game to the age of chivalry. Our medieval name generator creates historically accurate names for noble lords, courtly ladies, wandering knights, and monastery scribes.',
    defaultOptions: { type: 'fantasy', subCategory: 'medieval', count: 10 },
    howItWorks: [
      { step: '1', title: 'Feudal Ranks', desc: 'Features titles including Sir, Lady, Lord, Countess, and Brother.' },
      { step: '2', title: 'High Middle Ages Cadence', desc: 'Rooted in Anglo-Norman, Saxon, and Continental European records.' },
      { step: '3', title: 'Download Manor Rosters', desc: 'Generate complete cast lists for historical fiction novels.' },
    ],
    examples: [
      { name: 'Sir Galahad the Pure', tag: 'Holy Knight', description: 'Questing paladin sworn to chivalric virtue and sacred relics.' },
      { name: 'Lady Genevieve of Avalon', tag: 'High Noble', description: 'Keeper of castle seals and patron of wandering troubadours.' },
      { name: 'Brother Aldous the Scribe', tag: 'Scholar Monk', description: 'Monastery archivist preserving ancient illuminated scrolls.' },
    ],
    tips: [
      { title: 'Use Place-Name Surnames', desc: 'Nobles took their names from their family holdings (e.g., "of Stirling", "of Avalon").' },
    ],
    faqs: [
      { question: 'Are these names historically grounded?', answer: 'Yes, based on 11th through 15th-century European feudal naming conventions.' },
    ],
    relatedSlugs: ['character-name-generator', 'warrior-name-generator', 'british-name-generator'],
  },

  'vampire-name-generator': {
    slug: 'vampire-name-generator',
    category: 'Character Names',
    title: 'Vampire Name Generator - Gothic, Aristocratic & Bloodline Names',
    metaDescription: 'Generate seductive, immortal vampire names for gothic novels, tabletop roleplay, and dark fantasy. Ancient bloodline names and Victorian nocturnal aristocrats.',
    h1: 'Vampire Name Generator',
    subheading: 'Immortal, seductive, and gothic names for children of the night and vampire nobility.',
    introText: 'Vampires inhabit opulent castles, midnight salons, and centuries of hidden history. Our vampire name generator blends Eastern European lore, Victorian elegance, and dark immortal romance.',
    defaultOptions: { type: 'fantasy', subCategory: 'vampire', count: 10 },
    howItWorks: [
      { step: '1', title: 'Bloodline Nobility', desc: 'Select from Romanian, Germanic, French, and Russian gothic roots.' },
      { step: '2', title: 'Immortal Epithets', desc: 'Paired with dark surnames like Drakulya, Ravenloft, and Bloodborne.' },
      { step: '3', title: 'Create Coven Rosters', desc: 'Build an entire aristocratic nocturnal court in seconds.' },
    ],
    examples: [
      { name: 'Vladislav Drakulya', tag: 'Wallachian Voivode', description: 'Ancient warlord resurrected through dark crypt rituals.' },
      { name: 'Carmilla von Karnstein', tag: 'Gothic Countess', description: 'Lethal noblewoman holding court in mist-shrouded ballrooms.' },
      { name: 'Lord Lucien Nightward', tag: 'Victorian Regent', description: 'Secret patron of occult societies across 19th-century London.' },
    ],
    tips: [
      { title: 'Incorporate Outdated Spellings', desc: 'Using archaic spellings gives a subtle sense that the vampire has lived across multiple centuries.' },
    ],
    faqs: [
      { question: 'Can I generate both ancient and modern vampire names?', answer: 'Yes! The generator includes centuries-old counts as well as sleek modern nocturnal handles.' },
    ],
    relatedSlugs: ['villain-name-generator', 'fantasy-name-generator', 'character-name-generator'],
  },

  'fairy-name-generator': {
    slug: 'fairy-name-generator',
    category: 'Character Names',
    title: 'Fairy Name Generator - Whimsical Pixie & Fae Court Names',
    metaDescription: 'Generate whimsical, magical fairy names for pixies, sprites, dryads, and high fae royalty. Nature-inspired names for enchanted storybooks.',
    h1: 'Fairy Name Generator',
    subheading: 'Enchanting, delicate, and whimsical names for woodland sprites, pixies, and fae queens.',
    introText: 'From tiny fluttering meadow pixies to majestic rulers of the Summer and Winter Fae Courts, our fairy name generator weaves nature elements, dew drops, and shimmering starlight into unforgettable names.',
    defaultOptions: { type: 'fantasy', subCategory: 'fairy', count: 10 },
    howItWorks: [
      { step: '1', title: 'Botanical & Weather Roots', desc: 'Names derived from moss, blossoms, twilight breezes, and petals.' },
      { step: '2', title: 'Sparkling Surnames', desc: 'Blended with compound fairy surnames like Whisperwing and Sunblossom.' },
      { step: '3', title: 'Charming Children’s Book Names', desc: 'Perfect for bedtime stories, fantasy games, and botanical craft projects.' },
    ],
    examples: [
      { name: 'Titania Sunblossom', tag: 'Fae Queen', description: 'Regal ruler of the blooming summer fae courts.' },
      { name: 'Zephyr Whisperwing', tag: 'Breeze Sprite', description: 'Playful messenger who rides dandelion seeds across autumn fields.' },
      { name: 'Fern Dewdrop', tag: 'Woodland Pixie', description: 'Caretaker of mossy stones and glowing morning mushrooms.' },
    ],
    tips: [
      { title: 'Combine Two Tactile Nature Words', desc: 'Fairy names thrive on sensory nature imagery: "Glint" + "wing", "Dew" + "petal".' },
    ],
    faqs: [
      { question: 'Are these names suitable for children’s books?', answer: 'Yes! They are delightfully whimsical, friendly, and non-violent.' },
    ],
    relatedSlugs: ['elf-name-generator', 'fantasy-name-generator', 'cute-names-generator'],
  },

  // GAMING & USERNAMES
  'username-generator': {
    slug: 'username-generator',
    category: 'Gaming & Online',
    title: 'Username Generator - Cool, Aesthetic & Gamer Handles',
    metaDescription: 'Generate cool, catchy, and unique usernames for TikTok, Instagram, YouTube, Twitch, Discord, and gaming. Check style and character limits.',
    h1: 'Username Generator',
    subheading: 'Create unique, memorable handles for social media, streaming platforms, and online gaming.',
    introText: 'Struggling to find an untaken username that actually looks great? Our smart username generator blends aesthetic prefixes, tech roots, and cool gaming handles to give you clean, stylish online handles in seconds.',
    defaultOptions: { type: 'username', subCategory: 'gamer', count: 10 },
    howItWorks: [
      { step: '1', title: 'Pick Your Online Vibe', desc: 'Choose between Gamer, Aesthetic, Tech/Dev, Minecraft, and Random.' },
      { step: '2', title: 'Algorithmic Blending', desc: 'Engine combines stylish prefixes, punchy root nouns, and optional suffixes.' },
      { step: '3', title: 'Instant Platform Copying', desc: 'One-click copy to paste directly into Instagram, Discord, or Steam registration.' },
    ],
    examples: [
      { name: 'NeonViper', tag: 'Gamer / Streamer', description: 'High-energy, futuristic handle ideal for competitive FPS players.' },
      { name: 'CosmicWhisper', tag: 'Aesthetic / Creator', description: 'Soft, dreamy identity perfect for TikTok or art portfolios.' },
      { name: 'ByteCrafter', tag: 'Tech / Developer', description: 'Smart, professional handle for GitHub and tech communities.' },
    ],
    tips: [
      { title: 'Avoid Excessive Numbers', desc: 'Clean usernames with zero or two intentional digits look far more professional than "John837492".' },
      { title: 'Test Pronunciation for Streaming', desc: 'If you plan to stream on Twitch or YouTube, make sure shoutouts are easy for creators to say.' },
    ],
    faqs: [
      { question: 'Will these usernames work on Discord and Steam?', answer: 'Yes! They adhere to standard alphanumeric conventions used by major gaming networks.' },
      { question: 'Can I generate aesthetic handles?', answer: 'Yes, switch to the "Aesthetic" or "Minimal" subcategory to get poetic handles.' },
    ],
    relatedSlugs: ['gamer-name-generator', 'random-username-generator', 'minecraft-name-generator', 'cool-names-generator'],
  },

  'gamer-name-generator': {
    slug: 'gamer-name-generator',
    category: 'Gaming & Online',
    title: 'Gamer Name Generator - Gamertags for Xbox, PS5 & Steam',
    metaDescription: 'Generate badass gamer tags and handles for FPS, Battle Royale, RPGs, and esports. Stand out on Xbox Live, PlayStation Network, Steam, and Twitch.',
    h1: 'Gamer Name Generator',
    subheading: 'Badass, competitive, and unforgettable gamertags for esports, streamers, and multiplayer clans.',
    introText: 'Dominate the leaderboard with a gamertag that demands respect. Whether you are climbing the competitive ranks in Valorant, Apex Legends, or Call of Duty, our gamer name generator gives you elite tag options.',
    defaultOptions: { type: 'username', subCategory: 'gamer', count: 10 },
    howItWorks: [
      { step: '1', title: 'Select Aggressive / Sleek Tone', desc: 'Filter for high-velocity FPS tags or tactical RPG handles.' },
      { step: '2', title: 'Pro Clan Formatting', desc: 'Generates sleek one-word and compound names without tacky number clutter.' },
      { step: '3', title: 'Copy & Claim', desc: 'Quickly test and claim your new tag across Xbox Live, PSN, and Steam.' },
    ],
    examples: [
      { name: 'ApexStriker', tag: 'Battle Royale', description: 'Fast, lethal, and instantly memorable in kill feeds.' },
      { name: 'FrostByte', tag: 'Tech / Sniper', description: 'Clever double-meaning combining chilling cold and computing power.' },
      { name: 'QuantumEcho', tag: 'Sci-Fi / Tactical', description: 'Mysterious, sleek alias for tactical team shooters.' },
    ],
    tips: [
      { title: 'Keep It Under 15 Characters', desc: 'Xbox Live limits gamertags to 12 characters, while PSN allows up to 16. Aiming for 8-12 ensures universal compatibility.' },
    ],
    faqs: [
      { question: 'Are these gamertags unique?', answer: 'Our procedural engine mixes thousands of roots to provide high availability across gaming networks.' },
    ],
    relatedSlugs: ['username-generator', 'random-username-generator', 'minecraft-name-generator'],
  },

  'random-username-generator': {
    slug: 'random-username-generator',
    category: 'Gaming & Online',
    title: 'Random Username Generator - Catchy & Clean Handles',
    metaDescription: 'Need a fast, random username for a burner account, forum, or gaming profile? Generate catchy, funny, and clean random usernames instantly.',
    h1: 'Random Username Generator',
    subheading: 'Instant, catchy, and clean usernames when you just need a great handle fast.',
    introText: 'Don’t overthink your handle. Our random username generator produces charming, quirky, and memorable usernames ready for instant account signups.',
    defaultOptions: { type: 'username', subCategory: 'random', count: 10 },
    howItWorks: [
      { step: '1', title: 'One-Click Generation', desc: 'Instantly rolls friendly adjectives and punchy animal or tech nouns.' },
      { step: '2', title: 'Clean & Memorable', desc: 'No complicated punctuation; easy to remember and type on mobile keyboards.' },
      { step: '3', title: 'Private & Local', desc: 'Generated completely in your browser without saving your selections.' },
    ],
    examples: [
      { name: 'LuckyPanda42', tag: 'Quirky / Friendly', description: 'Playful and approachable handle for Reddit or mobile games.' },
      { name: 'SwiftFalcon', tag: 'Clean / Fast', description: 'Simple, sharp two-word combination with high readability.' },
      { name: 'AtomicOtter', tag: 'Funny / Animal', description: 'Charming blend of scientific energy and wildlife humor.' },
    ],
    tips: [
      { title: 'Use Alliteration for Memorability', desc: 'Combinations starting with the same letter (Swift Sparrow, Cosmic Comet) stick in memory easily.' },
    ],
    faqs: [
      { question: 'Are these names safe for work and school?', answer: 'Yes, our dictionary is strictly family-friendly and safe for all community guidelines.' },
    ],
    relatedSlugs: ['username-generator', 'gamer-name-generator', 'cool-names-generator'],
  },

  'minecraft-name-generator': {
    slug: 'minecraft-name-generator',
    category: 'Gaming & Online',
    title: 'Minecraft Name Generator - Cool IGNs & Blocky Handles',
    metaDescription: 'Generate awesome Minecraft In-Game Names (IGN). Find available, cool, and block-themed usernames for Java and Bedrock editions.',
    h1: 'Minecraft Name Generator',
    subheading: 'Blocky, adventurous, and legendary in-game names for Minecraft Java & Bedrock.',
    introText: 'Crafting your identity in the world of blocks? Our Minecraft name generator creates unique usernames featuring iconic elements like Redstone, Netherite, Enders, and diamond mining lore.',
    defaultOptions: { type: 'username', subCategory: 'minecraft', count: 10 },
    howItWorks: [
      { step: '1', title: 'Thematic Game Elements', desc: 'Draws from beloved Minecraft lore: pickaxes, mobs, dimensions, and minerals.' },
      { step: '2', title: 'Sleek IGN Formats', desc: 'Formatted within Java edition’s 3-16 character limit without illegal characters.' },
      { step: '3', title: 'Claim Your Skin & Name', desc: 'Copy instantly to check availability on NameMC or your Microsoft account.' },
    ],
    examples: [
      { name: 'RedstoneCrafter', tag: 'Engineer / Builder', description: 'Respected handle for automation geniuses and contraption creators.' },
      { name: 'EnderKnight', tag: 'PvP / Fighter', description: 'Shadowy warrior wielding ender pearls and Netherite armor.' },
      { name: 'ObsidianGolem', tag: 'Tank / Protector', description: 'Unbreakable fortress player who anchors guild bases.' },
    ],
    tips: [
      { title: 'Mind the 16-Character Limit', desc: 'Minecraft Java Edition names must be between 3 and 16 characters long.' },
    ],
    faqs: [
      { question: 'Will these names work on Minecraft Java and Bedrock?', answer: 'Yes! They conform strictly to character length and character set rules.' },
    ],
    relatedSlugs: ['username-generator', 'gamer-name-generator', 'fantasy-name-generator'],
  },

  // BUSINESS & STARTUPS
  'business-name-generator': {
    slug: 'business-name-generator',
    category: 'Business',
    title: 'Business Name Generator - Catchy Company & Brand Ideas',
    metaDescription: 'Generate modern, memorable business name ideas for startups, tech companies, retail shops, and consulting firms. Instant brand inspiration.',
    h1: 'Business Name Generator',
    subheading: 'Inventive, modern, and memorable brand names for startups, ventures, and boutique companies.',
    introText: 'The right company name sets the foundation for investor confidence, customer recall, and brand identity. Our business name generator uses linguistic blending and modern brand structures to generate top-tier business names.',
    defaultOptions: { type: 'business', subCategory: 'startup', count: 10 },
    howItWorks: [
      { step: '1', title: 'Select Industry Focus', desc: 'Choose from Tech/SaaS Startup, Corporate Enterprise, Creative Brand Studio, or Boutique Shop.' },
      { step: '2', title: 'Modern Naming Formulas', desc: 'Combines word blends (-ify, -flow, -pulse), compound nouns, and clean roots.' },
      { step: '3', title: 'Export & Check Domains', desc: 'Copy your favorite name candidates to check domain and trademark registers.' },
    ],
    examples: [
      { name: 'ApexFlow', tag: 'SaaS / Automation', description: 'Streamline team operations instantly; agile, fast, and scalable.' },
      { name: 'NovaSphere', tag: 'Cloud Platform', description: 'Scalable multi-cloud orchestration for next-generation enterprises.' },
      { name: 'SyncNest', tag: 'Productivity App', description: 'Unified workspace for modern distributed remote teams.' },
      { name: 'Velvet & Vine', tag: 'Boutique Lifestyle', description: 'Artisanal botanicals and home goods for mindful interior spaces.' },
    ],
    tips: [
      { title: 'Prioritize Brevity and Phonetics', desc: 'The most memorable brands (Stripe, Slack, Figma) are one or two syllables and easy to spell.' },
      { title: 'Check Trademark and Social Availability', desc: 'Before committing, verify that the name isn’t registered in your industry classification (USPTO/EUIPO).' },
    ],
    faqs: [
      { question: 'Can I generate names for local shops or agencies?', answer: 'Yes! Use the subcategory selector to choose "Shop / Retail" or "Brand Studio".' },
      { question: 'Are these business names trademarked?', answer: 'No, all names are procedurally generated suggestions. Always perform official trademark clearance before incorporation.' },
    ],
    relatedSlugs: ['company-name-generator', 'startup-name-generator', 'brand-name-generator'],
  },

  'company-name-generator': {
    slug: 'company-name-generator',
    category: 'Business',
    title: 'Company Name Generator - Professional Corporate & Firm Names',
    metaDescription: 'Generate authoritative company names for consulting firms, investment holdings, legal partners, and enterprises. Professional brand naming.',
    h1: 'Company Name Generator',
    subheading: 'Authoritative, stable, and prestigious names for corporate enterprises, advisory firms, and partnerships.',
    introText: 'When credibility, trust, and institutional stability are paramount, our company name generator crafts names conveying decades of integrity and leadership.',
    defaultOptions: { type: 'business', subCategory: 'company', count: 10 },
    howItWorks: [
      { step: '1', title: 'Corporate Sound Architecture', desc: 'Harnesses distinguished roots like Vanguard, Keystone, Pinnacle, and Sterling.' },
      { step: '2', title: 'Enterprise Suffixes', desc: 'Appends Partners, Holdings, Ventures, Capital, and Global.' },
      { step: '3', title: 'Boardroom Ready', desc: 'Export executive-level names for pitch decks and legal incorporation.' },
    ],
    examples: [
      { name: 'Pinnacle Capital Partners', tag: 'Finance & PE', description: 'Communicates disciplined strategic wealth management and governance.' },
      { name: 'Keystone Global Holdings', tag: 'Logistics', description: 'Represents foundational structural integrity and international reach.' },
      { name: 'Vanguard Solutions Group', tag: 'Advisory', description: 'Forward-thinking leadership guiding corporate digital transformation.' },
    ],
    tips: [
      { title: 'Leverage Established Institutional Vocabulary', desc: 'Words associated with architectural stability (Keystone, Cornerstone, Anchor) inspire investor trust.' },
    ],
    faqs: [
      { question: 'Are these names appropriate for law firms and consultancies?', answer: 'Yes, they are specifically tuned for professional service firms and enterprise holdings.' },
    ],
    relatedSlugs: ['business-name-generator', 'startup-name-generator', 'brand-name-generator'],
  },

  'startup-name-generator': {
    slug: 'startup-name-generator',
    category: 'Business',
    title: 'Startup Name Generator - Modern Tech & SaaS Brand Ideas',
    metaDescription: 'Generate sleek startup names for software, AI apps, Web3, and venture-backed tech platforms. Modern word blends and suffix innovations.',
    h1: 'Startup Name Generator',
    subheading: 'Agile, futuristic, and tech-forward names for seed-stage startups and SaaS products.',
    introText: 'From Y-Combinator hopefuls to bootstrapping indie hackers, your startup needs a name that feels fast, smart, and modern. Our startup name generator crafts high-conversion brand names.',
    defaultOptions: { type: 'business', subCategory: 'startup', count: 10 },
    howItWorks: [
      { step: '1', title: 'Tech Morpheme Blends', desc: 'Generates modern names using -ify, -flow, -io, and -base patterns.' },
      { step: '2', title: 'Compound Power Words', desc: 'Pairs energetic verbs and clear tech nouns (DeepLayer, SmartScale).' },
      { step: '3', title: 'Product Hunt Ready', desc: 'Short, memorable names designed for app store icons and landing page hero banners.' },
    ],
    examples: [
      { name: 'LuminaTech', tag: 'AI & Data', description: 'Intelligent decision-making through autonomous neural insights.' },
      { name: 'PulseBase', tag: 'Dev Tools', description: 'Real-time telemetry and cloud observability dashboard.' },
      { name: 'VeloceLabs', tag: 'Deep Tech', description: 'Accelerating foundational frontier machine learning models.' },
    ],
    tips: [
      { title: 'Keep the .com or .dev in Mind', desc: 'Modern startups often thrive with .dev, .io, or .ai domains when pure .com is parked by speculators.' },
    ],
    faqs: [
      { question: 'Can I generate one-word startup names?', answer: 'Yes! Our blended word algorithm produces modern single-word brand names like Apexify and NovaFlow.' },
    ],
    relatedSlugs: ['business-name-generator', 'company-name-generator', 'brand-name-generator'],
  },

  // COUNTRY & CULTURAL GENERATORS
  'japanese-name-generator': {
    slug: 'japanese-name-generator',
    category: 'Country & Culture',
    title: 'Japanese Name Generator - Authentic First & Family Names',
    metaDescription: 'Generate authentic Japanese male, female, and gender-neutral names with meanings and compatible surnames. Cultural naming tool.',
    h1: 'Japanese Name Generator',
    subheading: 'Authentic, beautiful Japanese given names and surnames with rich linguistic meanings.',
    introText: 'Japanese names frequently draw from nature, seasonal beauty, and auspicious virtues. Our Japanese name generator provides authentic given names (such as Ren, Sakura, Haruto, and Yui) matched with historically prevalent family names like Sato, Tanaka, and Takahashi.',
    defaultOptions: { type: 'full', origin: 'japanese', gender: 'any', count: 10, includeSurname: true },
    howItWorks: [
      { step: '1', title: 'Authentic Kanji Themes', desc: 'Names derived from cherry blossoms, pine forests, ocean waves, and starlight.' },
      { step: '2', title: 'Matched Surnames', desc: 'Pairs authentic Japanese first names with genuine family names like Suzuki, Sato, and Ito.' },
      { step: '3', title: 'Cultural Meanings Provided', desc: 'Every generated name includes contextual explanations of its kanji connotations.' },
    ],
    examples: [
      { name: 'Sakura Tanaka', tag: 'Classic Harmony', description: 'Sakura (cherry blossom) paired with Tanaka (center of the rice paddy).' },
      { name: 'Haruto Takahashi', tag: 'Modern Brightness', description: 'Haruto (sun soaring) paired with Takahashi (high bridge).' },
      { name: 'Ren Kobayashi', tag: 'Elegance & Nature', description: 'Ren (lotus water lily) paired with Kobayashi (small forest).' },
    ],
    tips: [
      { title: 'Note Traditional Name Order', desc: 'In Japan, the surname traditionally precedes the given name (Tanaka Sakura). In Western media, it is often reversed.' },
    ],
    faqs: [
      { question: 'Are these names based on real Japanese census records?', answer: 'Yes! All given names and surnames are based on verified contemporary and historical Japanese registries.' },
    ],
    relatedSlugs: ['chinese-name-generator', 'korean-name-generator', 'indian-name-generator', 'random-full-name-generator'],
  },

  'indian-name-generator': {
    slug: 'indian-name-generator',
    category: 'Country & Culture',
    title: 'Indian Name Generator - Hindu, Muslim & Sanskrit Names',
    metaDescription: 'Generate authentic Indian names with meanings, origins, and family surnames. Discover popular, modern, and traditional Indian male and female names.',
    h1: 'Indian Name Generator',
    subheading: 'Meaningful, melodic, and traditional Indian first names and regional surnames.',
    introText: 'Indian names are steeped in thousands of years of philosophical, literary, and cultural heritage. Our Indian name generator offers beloved given names like Aarav, Ananya, Arjun, and Priya alongside authentic surnames across regional communities.',
    defaultOptions: { type: 'full', origin: 'indian', gender: 'any', count: 10, includeSurname: true },
    howItWorks: [
      { step: '1', title: 'Sanskrit & Regional Roots', desc: 'Draws from ancient epic texts, celestial concepts, and auspicious virtues.' },
      { step: '2', title: 'Authentic Surnames', desc: 'Pairs given names with respected surnames like Sharma, Patel, Verma, and Nair.' },
      { step: '3', title: 'Instant Meanings', desc: 'Understand the exact meaning behind every name (e.g., Diya = divine light).' },
    ],
    examples: [
      { name: 'Arjun Sharma', tag: 'Mythological Hero', description: 'Arjun (bright, honorable warrior of the Mahabharata) with Sharma (scholar, joy).' },
      { name: 'Ananya Patel', tag: 'Modern Elegance', description: 'Ananya (incomparable, unique) paired with the distinguished Patel family name.' },
      { name: 'Kabir Malhotra', tag: 'Literary & Strong', description: 'Kabir (great, beloved mystic poet) with Malhotra (noble warrior clan).' },
    ],
    tips: [
      { title: 'Appreciate Spiritual Nuance', desc: 'Many Indian names reference attributes of the divine, light, knowledge, or eternal seasons.' },
    ],
    faqs: [
      { question: 'Does this include both modern and traditional Indian names?', answer: 'Yes, from contemporary favorites like Aarav and Diya to timeless classics like Vikram and Meera.' },
    ],
    relatedSlugs: ['arabic-name-generator', 'japanese-name-generator', 'random-full-name-generator'],
  },

  'british-name-generator': {
    slug: 'british-name-generator',
    category: 'Country & Culture',
    title: 'British Name Generator - Classic UK First & Last Names',
    metaDescription: 'Generate authentic British names for English, Scottish, and Welsh characters. Classic royal names, vintage charm, and aristocratic surnames.',
    h1: 'British Name Generator',
    subheading: 'Classic, vintage, and aristocratic British names for characters and storytellers.',
    introText: 'From Victorian drawing rooms to bustling modern London streets, our British name generator provides authentic given names (George, Arthur, Florence, Isla) combined with historic English and Welsh family names.',
    defaultOptions: { type: 'full', origin: 'british', gender: 'any', count: 10, includeSurname: true },
    howItWorks: [
      { step: '1', title: 'Royal & Vintage Heritage', desc: 'Curated using centuries of British parish records and nobility rolls.' },
      { step: '2', title: 'Topographical English Surnames', desc: 'Paired with names like Pemberton, Hawthorne, and Blackwood.' },
      { step: '3', title: 'Perfect for Period & Contemporary Fiction', desc: 'Instant character identities for historical drama and cozy mysteries.' },
    ],
    examples: [
      { name: 'Arthur Hawthorne', tag: 'Period Aristocrat', description: 'Bear king paired with dweller near the hawthorn grove.' },
      { name: 'Florence Pemberton', tag: 'Vintage Elegance', description: 'Flourishing, blossoming one with hill settlement heritage.' },
      { name: 'George Blackwood', tag: 'Classic English', description: 'Stalwart royal given name with gothic woodland surname.' },
    ],
    tips: [
      { title: 'Balance Stiff Formalism with Friendly Nicknames', desc: 'Characters with grand names often go by warm diminutives (e.g., Charles → Charlie, Florence → Flossie).' },
    ],
    faqs: [
      { question: 'Can I generate Scottish or Irish names specifically?', answer: 'Yes, we have dedicated generator pages for both Irish and Scottish names.' },
    ],
    relatedSlugs: ['irish-name-generator', 'scottish-name-generator', 'french-name-generator', 'american-name-generator'],
  },

  'french-name-generator': {
    slug: 'french-name-generator',
    category: 'Country & Culture',
    title: 'French Name Generator - Elegant French First & Last Names',
    metaDescription: 'Generate romantic, elegant French names with compatible surnames. Discover timeless Parisian names for characters, babies, and stories.',
    h1: 'French Name Generator',
    subheading: 'Romantic, sophisticated, and lyrical French names from Paris to Provence.',
    introText: 'French names are celebrated globally for their melodic phrasing and romantic charm. Our French name generator pairs classic given names like Louis, Camille, Juliette, and Antoine with authentic surnames like Dubois and Fontaine.',
    defaultOptions: { type: 'full', origin: 'french', gender: 'any', count: 10, includeSurname: true },
    howItWorks: [
      { step: '1', title: 'Lyrical French Pronunciation', desc: 'Curated to produce graceful, flowing cadence.' },
      { step: '2', title: 'Topographical & Occupational Surnames', desc: 'Matched with heritage surnames like Laurent, Dubois, and Chevalier.' },
      { step: '3', title: 'Rich Historical Meaning', desc: 'Discover the noble origins behind every French entry.' },
    ],
    examples: [
      { name: 'Juliette Fontaine', tag: 'Parisian Romance', description: 'Youthful soft-haired one near the crystal spring.' },
      { name: 'Louis Chevalier', tag: 'Feudal Noble', description: 'Famous royal warrior paired with the knight/horseman surname.' },
    ],
    tips: [
      { title: 'Observe Silent Endings in Pronunciation', desc: 'French names often end in silent consonants (Louis is pronounced loo-EE, not loo-iss).' },
    ],
    faqs: [
      { question: 'Does this include modern French baby names?', answer: 'Yes, popular contemporary names like Maxime, Chloe, and Theo are included alongside classics.' },
    ],
    relatedSlugs: ['italian-name-generator', 'spanish-name-generator', 'british-name-generator'],
  },

  'german-name-generator': {
    slug: 'german-name-generator',
    category: 'Country & Culture',
    title: 'German Name Generator - Traditional & Modern German Names',
    metaDescription: 'Generate authentic German first names and surnames. Classic Bavarian, Prussian, and modern Berlin names for realistic characters.',
    h1: 'German Name Generator',
    subheading: 'Resolute, classic, and modern German names paired with traditional craft surnames.',
    introText: 'German names embody centuries of craft, philosophical rigor, and cultural distinction. Our generator matches popular given names like Lukas, Sophie, Felix, and Hannah with iconic occupational surnames like Mueller, Schmidt, and Weber.',
    defaultOptions: { type: 'full', origin: 'german', gender: 'any', count: 10, includeSurname: true },
    howItWorks: [
      { step: '1', title: 'Authentic Germanic Roots', desc: 'Derived from ancient Germanic virtues: light, victory, protection, and wisdom.' },
      { step: '2', title: 'Guild Surnames', desc: 'Paired with trade surnames: blacksmith (Schmidt), miller (Mueller), weaver (Weber).' },
      { step: '3', title: 'Fast & Accurate', desc: 'Generate complete, believable German character rosters in seconds.' },
    ],
    examples: [
      { name: 'Lukas Schmidt', tag: 'Modern Classic', description: 'Bringer of light paired with master blacksmith surname.' },
      { name: 'Maximilian Hoffmann', tag: 'Aristocratic Firmness', description: 'Greatest one paired with the manor steward surname.' },
    ],
    tips: [
      { title: 'Notice Compound Surnames', desc: 'German surnames often combine landscape features with human presence (e.g., Bergmann = mountain man).' },
    ],
    faqs: [
      { question: 'Are these names appropriate for World War historical fiction?', answer: 'Yes, our database includes timeless 19th and 20th-century German names as well as modern favorites.' },
    ],
    relatedSlugs: ['scandinavian-name-generator', 'russian-name-generator', 'french-name-generator'],
  },

  'spanish-name-generator': {
    slug: 'spanish-name-generator',
    category: 'Country & Culture',
    title: 'Spanish Name Generator - Hispanic First Names & Surnames',
    metaDescription: 'Generate authentic Spanish and Hispanic names for characters, stories, and babies. Traditional and modern names with patronymic surnames.',
    h1: 'Spanish Name Generator',
    subheading: 'Passionate, lyrical, and traditional Spanish and Latin American names.',
    introText: 'Spanish names are known for their musical rhythm, deep familial ties, and enduring warmth. Our generator pairs vibrant first names like Mateo, Valentina, Santiago, and Lucia with classic patronymic surnames like Garcia, Rodriguez, and Martinez.',
    defaultOptions: { type: 'full', origin: 'spanish', gender: 'any', count: 10, includeSurname: true },
    howItWorks: [
      { step: '1', title: 'Vibrant Latin Cadence', desc: 'Musical open-vowel rhythms popular across Spain and Latin America.' },
      { step: '2', title: 'Patronymic Surnames', desc: 'Heritage family names with the traditional "-ez" ending (son of).' },
      { step: '3', title: 'Instant Verification', desc: 'Check meanings and cultural heritage with one click.' },
    ],
    examples: [
      { name: 'Mateo Garcia', tag: 'Modern Popular', description: 'Gift of God paired with the ancient brave warrior surname.' },
      { name: 'Valentina Navarro', tag: 'Graceful Strength', description: 'Strong, healthy one paired with plains of Navarra roots.' },
    ],
    tips: [
      { title: 'Understand Double Surnames', desc: 'In Hispanic tradition, individuals often carry two surnames: the paternal surname followed by the maternal surname.' },
    ],
    faqs: [
      { question: 'Are these names common throughout Latin America as well as Spain?', answer: 'Yes! Names like Mateo, Santiago, Sofia, and Rodriguez are beloved across Mexico, Colombia, Argentina, and Spain.' },
    ],
    relatedSlugs: ['italian-name-generator', 'french-name-generator', 'random-full-name-generator'],
  },

  'italian-name-generator': {
    slug: 'italian-name-generator',
    category: 'Country & Culture',
    title: 'Italian Name Generator - Classic & Renaissance Italian Names',
    metaDescription: 'Generate romantic, classic Italian names with authentic surnames. Explore Renaissance charm and modern Italian first names with meanings.',
    h1: 'Italian Name Generator',
    subheading: 'Artistic, passionate, and timeless Italian names from Rome, Florence, and Venice.',
    introText: 'From the master artists of the Renaissance to contemporary Italian cinema, Italian names possess unmatched flair and vocal resonance. Our generator creates combinations like Leonardo Rossi and Aurora Bianchi effortlessly.',
    defaultOptions: { type: 'full', origin: 'italian', gender: 'any', count: 10, includeSurname: true },
    howItWorks: [
      { step: '1', title: 'Renaissance & Latin Roots', desc: 'Flowing syllables evoking artistic majesty and ancient Roman glory.' },
      { step: '2', title: 'Iconic Regional Surnames', desc: 'Features surnames like Ferrari, Rossi, Romano, and Bianchi.' },
      { step: '3', title: 'Export & Enjoy', desc: 'Instant access without any account creation.' },
    ],
    examples: [
      { name: 'Leonardo Rossi', tag: 'Artistic & Bold', description: 'Brave lion with fiery red-haired ancestry.' },
      { name: 'Aurora Bianchi', tag: 'Luminous Grace', description: 'Dawn goddess with fair, pure lineage.' },
    ],
    tips: [
      { title: 'Enjoy the Rolling Double Consonants', desc: 'Italian pronunciation leans into double consonants (Francesco, Matteo, Ferrari) with emphatic rhythm.' },
    ],
    faqs: [
      { question: 'Can I generate classic Roman names?', answer: 'Yes, check out our Latin and Italian categories for Roman antiquity inspiration.' },
    ],
    relatedSlugs: ['spanish-name-generator', 'french-name-generator', 'random-full-name-generator'],
  },

  'scandinavian-name-generator': {
    slug: 'scandinavian-name-generator',
    category: 'Country & Culture',
    title: 'Scandinavian Name Generator - Nordic & Viking Names',
    metaDescription: 'Generate authentic Scandinavian and Nordic names for characters. Explore Swedish, Norwegian, and Danish names with Viking mythology origins.',
    h1: 'Scandinavian Name Generator',
    subheading: 'Stoic, mythological, and nature-rooted Nordic names from Sweden, Norway, and Denmark.',
    introText: 'Nordic names carry the quiet beauty of northern pine forests, deep fjords, and legendary Norse deities. Our Scandinavian name generator creates authentic character names like Astrid Lindqvist, Soren Stromberg, and Freja Holm.',
    defaultOptions: { type: 'full', origin: 'scandinavian', gender: 'any', count: 10, includeSurname: true },
    howItWorks: [
      { step: '1', title: 'Norse Lore & Nature Roots', desc: 'Names honoring divine beauty, bear spirits, and sacred lime groves.' },
      { step: '2', title: 'Topographical Nordic Surnames', desc: 'Combines nature compounds like -qvist (twig), -berg (mountain), and -lund (grove).' },
      { step: '3', title: 'One-Click Generation', desc: 'Immediate, authentic results.' },
    ],
    examples: [
      { name: 'Astrid Lindqvist', tag: 'Divinely Beautiful', description: 'Ancient Norse divine beauty paired with the linden tree twig surname.' },
      { name: 'Magnus Stromberg', tag: 'Great & Resolute', description: 'Mighty royal sovereign with river mountain ancestral roots.' },
    ],
    tips: [
      { title: 'Notice Nature Surnames', desc: 'Unlike patronymics ending in -son, many modern Scandinavian surnames celebrate flora and geography (Holm, Lund, Eklund).' },
    ],
    faqs: [
      { question: 'Does this generator include Viking names?', answer: 'Yes! Names like Bjorn, Ragnar, Freja, and Astrid are directly derived from Old Norse traditions.' },
    ],
    relatedSlugs: ['german-name-generator', 'russian-name-generator', 'warrior-name-generator'],
  },

  'arabic-name-generator': {
    slug: 'arabic-name-generator',
    category: 'Country & Culture',
    title: 'Arabic Name Generator - Meaningful & Traditional Arabic Names',
    metaDescription: 'Generate authentic Arabic names with profound meanings and heritage surnames. Discover popular male and female names with poetic origins.',
    h1: 'Arabic Name Generator',
    subheading: 'Poetic, honorable, and spiritually rich Arabic first names and respected family surnames.',
    introText: 'Arabic names are famous for their profound etymological poetry, honoring spiritual devotion, leadership, radiant stars, and steadfast bravery. Our Arabic name generator pairs beloved names like Zayn, Layla, Tariq, and Amira with prestigious family names.',
    defaultOptions: { type: 'full', origin: 'arabic', gender: 'any', count: 10, includeSurname: true },
    howItWorks: [
      { step: '1', title: 'Eloquent Triliteral Roots', desc: 'Curated based on classical Arabic linguistics and poetic traditions.' },
      { step: '2', title: 'Honorific Surnames', desc: 'Matched with titles and surnames like Al-Mansoor, Hashim, and Al-Sayed.' },
      { step: '3', title: 'Etymological Insights', desc: 'Every name is explained with its poetic and cultural meaning.' },
    ],
    examples: [
      { name: 'Tariq Al-Mansoor', tag: 'Pathfinder & Victorious', description: 'Morning star / nocturnal visitor paired with divine victory.' },
      { name: 'Amira Hashim', tag: 'Noble Princess', description: 'Leader and princess paired with crusher of evil / generous host.' },
    ],
    tips: [
      { title: 'Appreciate Metaphorical Depths', desc: 'Names like Layla (nocturnal beauty) or Noor (celestial light) evoke deep visual poetry.' },
    ],
    faqs: [
      { question: 'Are these names recognized across the Middle East and North Africa?', answer: 'Yes! These names and surnames are widely cherished across Egypt, Levant, the Gulf, and North Africa.' },
    ],
    relatedSlugs: ['indian-name-generator', 'turkish-name-generator', 'random-full-name-generator'],
  },

  // STYLES
  'cool-names-generator': {
    slug: 'cool-names-generator',
    category: 'Styles',
    title: 'Cool Names Generator - Badass, Edgy & Sleek Names',
    metaDescription: 'Generate cool, stylish, and badass names for characters, babies, usernames, and game avatars. Punchy, modern, and memorable names.',
    h1: 'Cool Names Generator',
    subheading: 'Edgy, charismatic, and sleek names that turn heads and make an unforgettable impression.',
    introText: 'When ordinary names won’t cut it, our cool names generator delivers magnetic, edgy names with effortless style. Perfect for charismatic protagonists, standout gamertags, and modern baby names with attitude.',
    defaultOptions: { type: 'first', style: 'cool', count: 10 },
    howItWorks: [
      { step: '1', title: 'Sharp Phonetic Curves', desc: 'Names featuring crisp consonants, dynamic Z/X/K sounds, and energetic rhythm.' },
      { step: '2', title: 'Cross-Cultural Charm', desc: 'Pulls the coolest names from Celtic, Latin, Norse, and Japanese traditions.' },
      { step: '3', title: 'Instant Standout Results', desc: 'Generate names that feel ahead of their time.' },
    ],
    examples: [
      { name: 'Jasper', tag: 'British / Cool', description: 'Bringer of treasure; vintage flair with modern edge.' },
      { name: 'Cassius', tag: 'Latin / Sleek', description: 'Historic patrician gravitas made famous by legends.' },
      { name: 'Kaito', tag: 'Japanese / Ocean Soaring', description: 'Airy, energetic, and effortlessly cool.' },
    ],
    tips: [
      { title: 'Look for Unconventional Syllables', desc: 'Names with unexpected middle consonants (like Jasper, Felix, or Declan) stand out without being alien.' },
    ],
    faqs: [
      { question: 'Can I generate cool full names with surnames?', answer: 'Yes, toggle "Full Name" in the generator to pair cool given names with sharp family names.' },
    ],
    relatedSlugs: ['unique-names-generator', 'gamer-name-generator', 'username-generator'],
  },

  'cute-names-generator': {
    slug: 'cute-names-generator',
    category: 'Styles',
    title: 'Cute Names Generator - Sweet, Adorable & Charming Names',
    metaDescription: 'Generate cute, charming, and sweet names for baby characters, pets, stories, and usernames. Whimsical and heartwarming naming ideas.',
    h1: 'Cute Names Generator',
    subheading: 'Adorable, sweet, and heartwarming names for baby characters, whimsical stories, and pets.',
    introText: 'Looking for a name that sparks an instant smile? Our cute names generator curates the sweetest, most charming names with soft syllables, friendly diminutives, and gentle nature meanings.',
    defaultOptions: { type: 'first', style: 'cute', count: 10 },
    howItWorks: [
      { step: '1', title: 'Gentle Phonetics', desc: 'Prioritizes soft consonants (M, L, P) and melodic open endings (-y, -ie, -a).' },
      { step: '2', title: 'Cheerful Meanings', desc: 'Names meaning sunshine, flowers, friendly companions, and gentle dawn.' },
      { step: '3', title: 'Instant Delight', desc: 'Save your sweetest discoveries in your personal favorites list.' },
    ],
    examples: [
      { name: 'Poppy', tag: 'British / Floral', description: 'Vibrant red flower full of cheerful energy.' },
      { name: 'Maisie', tag: 'Scottish / Pearl', description: 'Precious gem with cozy vintage storybook charm.' },
      { name: 'Diya', tag: 'Indian / Bright Light', description: 'Warm little divine lamp that brings warmth to any hearth.' },
    ],
    tips: [
      { title: 'Diminutives Make Great Given Names', desc: 'Names ending in -ie or -y (Archie, Maisie, Daisy) have an innate, timeless sweetness.' },
    ],
    faqs: [
      { question: 'Are these names suitable for naming beloved pets?', answer: 'Yes! Many users use this generator for puppies, kittens, and cozy video game avatars.' },
    ],
    relatedSlugs: ['fairy-name-generator', 'cool-names-generator', 'unique-names-generator'],
  },

  'unique-names-generator': {
    slug: 'unique-names-generator',
    category: 'Styles',
    title: 'Unique Names Generator - Rare & Distinctive Name Ideas',
    metaDescription: 'Generate rare, distinctive, and unconventional names that stand apart from the crowd. Curated unusual names with rich historical roots.',
    h1: 'Unique Names Generator',
    subheading: 'Distinctive, rare, and one-of-a-kind names for characters and visionary creatives.',
    introText: 'Tired of the same top-10 baby name lists repeated everywhere? Our unique names generator surfaces hidden gems, forgotten historical treasures, and rare cross-cultural names with striking individuality.',
    defaultOptions: { type: 'first', style: 'unique', count: 10 },
    howItWorks: [
      { step: '1', title: 'Low Frequency / High Distinctiveness', desc: 'Surfaces names outside the common top 500 charts.' },
      { step: '2', title: 'Etymologically Verified', desc: 'Rare does not mean made-up; each name has authentic linguistic roots.' },
      { step: '3', title: 'Memorable Impact', desc: 'Give your fictional characters names that readers will never confuse with anyone else.' },
    ],
    examples: [
      { name: 'Saoirse', tag: 'Irish / Liberty', description: 'Poetic, striking, and deeply meaningful.' },
      { name: 'Ginevra', tag: 'Italian / Phantom', description: 'Ethereal juniper beauty; rare outside northern Italy.' },
      { name: 'Aisling', tag: 'Gaelic / Vision', description: 'Gaelic poetic dream or celestial vision.' },
    ],
    tips: [
      { title: 'Keep Spelling Intuitive When Possible', desc: 'If writing for a broad audience, choose unique names with intuitive phonetic flow so readers stay immersed.' },
    ],
    faqs: [
      { question: 'Will these names sound completely unnatural?', answer: 'Not at all. Every unique name in our dataset is a genuine historic or literary name with rich heritage.' },
    ],
    relatedSlugs: ['cool-names-generator', 'fantasy-name-generator', 'random-first-name-generator'],
  },

  'classic-names-generator': {
    slug: 'classic-names-generator',
    category: 'Styles',
    title: 'Classic Names Generator - Timeless & Traditional Names',
    metaDescription: 'Generate timeless, traditional, and dignified classic names that never go out of style. Historical kings, queens, and gentlemen names.',
    h1: 'Classic Names Generator',
    subheading: 'Dignified, enduring, and timeless names that have commanded respect across generations.',
    introText: 'Trends come and go, but classic names endure for centuries. Our classic names generator presents time-tested names with regal dignity, scholarly presence, and enduring cultural reverence.',
    defaultOptions: { type: 'first', style: 'classic', count: 10 },
    howItWorks: [
      { step: '1', title: 'Century-Spanning Popularity', desc: 'Curated from hundreds of years of literature, history, and records.' },
      { step: '2', title: 'Dignified Gravitas', desc: 'Names that suit university professors, statesmen, monarchs, and doctors.' },
      { step: '3', title: 'Flawless Surnames Pairings', desc: 'Easily matches with any family name without clashing.' },
    ],
    examples: [
      { name: 'William', tag: 'Royal / Resolute', description: 'Resolute protector; held by conquerors, kings, and playwrights.' },
      { name: 'Sophia', tag: 'Greek / Wisdom', description: 'Universal wisdom; elegant in almost every major world language.' },
      { name: 'Eleanor', tag: 'Medieval / Radiant', description: 'Bright, shining one; held by world-shaping queens and first ladies.' },
    ],
    tips: [
      { title: 'Classics Never Feel Outdated', desc: 'When writing historical fiction or seeking a name that will age gracefully, classics are always safe.' },
    ],
    faqs: [
      { question: 'Can I generate classic full names?', answer: 'Yes, select Full Name to pair classic given names with heritage surnames.' },
    ],
    relatedSlugs: ['random-first-name-generator', 'male-name-generator', 'female-name-generator', 'medieval-name-generator'],
  },

  "random-name-generator": {
    slug: "random-name-generator",
    category: "General Names",
    title: "Random Name Generator - Instant Creative Names",
    metaDescription: "Generate random names instantly for characters, stories, games, usernames, and businesses. Filter by style, gender, origin, and quantity.",
    h1: "Random Name Generator",
    subheading: "Create authentic, diverse, and creative names tailored to any genre, country, or project.",
    introText: "Welcome to the ultimate random name generation hub. Whether you need an authentic full name for a novel protagonist, a mythical fantasy alias, or a catchy username, our tool produces instant, unique results.",
    defaultOptions: { type: "full", gender: "any", origin: "any", count: 10, includeSurname: true },
    howItWorks: [
      { step: "1", title: "Select Categories", desc: "Choose first, full, fantasy, gamer, or brand name types." },
      { step: "2", title: "Refine Parameters", desc: "Tune gender, origin, and stylistic qualities." },
      { step: "3", title: "Generate & Save", desc: "Instantly copy or favorite your selections." },
    ],
    examples: [
      { name: "Liam Carter", tag: "American / Modern", description: "Strong-willed warrior paired with dependable trade surname." },
      { name: "Aeloria Silverleaf", tag: "Fantasy / Elven", description: "Song of moonlight dawn; radiant high elf guardian." },
      { name: "Ren Takahashi", tag: "Japanese / Harmony", description: "Poetic lotus blossom with historic high bridge heritage." },
    ],
    tips: [
      { title: "Test Acoustic Balance", desc: "Listen for cadence between given names and family surnames." },
      { title: "Use Local Storage", desc: "Save multiple candidate names without losing your place." },
    ],
    faqs: [
      { question: "Is this generator completely free?", answer: "Yes, 100% free with no accounts, limits, or subscriptions." },
      { question: "Can I generate commercial names?", answer: "Yes, all generated names are royalty-free for published books, games, and products." },
    ],
    relatedSlugs: ["random-first-name-generator", "random-full-name-generator", "character-name-generator", "fantasy-name-generator"],
  },

  "american-name-generator": {
    slug: "american-name-generator",
    category: "Country & Culture",
    title: "American Name Generator - Popular US First & Last Names",
    metaDescription: "Generate authentic American names for characters and stories. Explore contemporary, colonial, and modern USA first names and family surnames.",
    h1: "American Name Generator",
    subheading: "Classic, modern, and diverse American first and last names with meanings.",
    introText: "American names reflect a rich tapestry of contemporary trends, vintage revivals, and diverse cultural roots. Our American name generator combines modern census favorites with authentic family surnames.",
    defaultOptions: { type: "full", origin: "american", gender: "any", count: 10, includeSurname: true },
    howItWorks: [
      { step: "1", title: "US Census Registers", desc: "Curated from verified national birth records and historical registries." },
      { step: "2", title: "Matched Surnames", desc: "Paired with classic American surnames like Smith, Carter, and Bennett." },
      { step: "3", title: "Immediate Output", desc: "Generate up to 100 authentic American identities per click." },
    ],
    examples: [
      { name: "Olivia Bennett", tag: "Classic Grace", description: "Peace and olive tree paired with blessed ancestral trade heritage." },
      { name: "Jackson Miller", tag: "Modern Strong", description: "Son of Jack paired with historic agrarian grain miller roots." },
      { name: "Harper Davis", tag: "Contemporary Arts", description: "Minstrel harp player paired with beloved David patronymic heritage." },
      { name: "Wyatt Hayes", tag: "Western Resolute", description: "Brave in battle paired with enclosure or hedge boundary landholding." },
    ],
    tips: [
      { title: "Blend Modern with Vintage", desc: "American naming frequently pairs vintage given names (Harper, Evelyn, Henry) with traditional surnames." },
      { title: "Account for Regional Flavor", desc: "Southern names often feature double first names or occupational surnames as first names (Hunter, Brooks)." },
      { title: "Test Full Name Meter", desc: "Pair a three-syllable first name with a one- or two-syllable surname for memorable cadence." },
      { title: "Check Decade Trends", desc: "Colonial period fiction benefits from classic biblical names (Abigail, Nathaniel) rather than modern blends." },
    ],
    faqs: [
      { question: "Are these names based on real US baby census data?", answer: "Yes, our datasets incorporate verified Social Security Administration historical registries and contemporary top 1,000 name rankings." },
      { question: "Can I generate full American names with family surnames?", answer: "Yes, checking 'Include Surname' automatically pairs culturally harmonious American family names." },
      { question: "Are both modern and vintage American names supported?", answer: "Yes, you can generate everything from contemporary favorites like Liam and Emma to historic 19th-century staples like Silas and Clara." },
      { question: "Can I use generated American names for novel characters?", answer: "Yes, all generated names are 100% royalty-free for published literature, games, screenplays, and commercial projects." },
    ],
    relatedSlugs: ["british-name-generator", "random-full-name-generator", "male-name-generator", "female-name-generator"],
  },

  "irish-name-generator": {
    slug: "irish-name-generator",
    category: "Country & Culture",
    title: "Irish Name Generator - Traditional Gaelic First & Last Names",
    metaDescription: "Generate authentic Irish names with Gaelic roots and meanings. Discover traditional male and female names paired with O and Mac surnames.",
    h1: "Irish Name Generator",
    subheading: "Poetic, mythic, and traditional Gaelic first names and ancient clan surnames.",
    introText: "Rooted in ancient Celtic mythology, saints, and emerald landscapes, Irish names carry deep history and lyrical resonance. Our generator pairs names like Saoirse, Finn, and Cillian with historic clans like O’Connor and Murphy.",
    defaultOptions: { type: "full", origin: "irish", gender: "any", count: 10, includeSurname: true },
    howItWorks: [
      { step: "1", title: "Gaelic Etymology", desc: "Names meaning freedom, warrior hounds, and radiant beauty." },
      { step: "2", title: "Historic Clan Surnames", desc: "Features patronymic O’ and Mac family designations." },
      { step: "3", title: "Story-Ready", desc: "Instant inspiration for Celtic fantasy, historical novels, and characters." },
    ],
    examples: [
      { name: "Finn O’Connor", tag: "Mythological Hero", description: "Fair-haired champion hunter paired with descendant of the chieftain hound." },
      { name: "Saoirse Murphy", tag: "Freedom & Sea", description: "Liberty and independence paired with the historic sea-warrior clan." },
      { name: "Cillian Gallagher", tag: "Monastic Scholar", description: "Bright-headed church associate paired with lover of foreign help." },
      { name: "Róisín Walsh", tag: "Little Rose", description: "Beloved national emblem paired with Welsh-born borderland settler surname." },
    ],
    tips: [
      { title: "Master Gaelic Pronunciation", desc: "Keep standard phonetic guides handy: Saoirse is SEER-sha, Cillian is KILL-ee-an, Niamh is NEEV, and Cian is KEE-an." },
      { title: "Understand Patronymic Prefixes", desc: "O' signifies 'grandson or descendant of', while Mac denotes 'son of', representing ancient clan loyalty." },
      { title: "Reflect Mythological Roots", desc: "Names derived from the Fenian and Ulster Cycles evoke heroic warrior temperaments." },
      { title: "Balance Spelling for Readers", desc: "In international fantasy, clarify complex Gaelic spellings early to assist reader immersion." },
    ],
    faqs: [
      { question: "Are Irish spellings authentic in this generator?", answer: "Yes, our dataset includes verified Gaelic spellings alongside recognized anglicized variants." },
      { question: "How do Irish clan surnames work?", answer: "Irish surnames historically stem from ancestral chieftains, using O' (descendant) or Mac (son) prefixes." },
      { question: "Can I generate gender-neutral Irish names?", answer: "Yes, names like Rowan, Dara, and Rory have traditional unisex usage across Ireland." },
      { question: "Can I use these names for fantasy novels?", answer: "Absolutely. Celtic and Irish mythic names provide unmatched atmosphere for fantasy worlds." },
    ],
    relatedSlugs: ["scottish-name-generator", "british-name-generator", "fantasy-name-generator", "medieval-name-generator"],
  },

  "scottish-name-generator": {
    slug: "scottish-name-generator",
    category: "Country & Culture",
    title: "Scottish Name Generator - Highland Clan First & Last Names",
    metaDescription: "Generate authentic Scottish names for Highland and Lowland characters. Discover traditional Celtic names paired with Mac clan surnames.",
    h1: "Scottish Name Generator",
    subheading: "Highland clans, lochs, and historic Scottish first names and tartans.",
    introText: "From misty highland glens to historic castle halls, Scottish names evoke courage, clan loyalty, and natural ruggedness. Our generator pairs names like Callum, Fiona, and Hamish with iconic clan names like MacLeod and Campbell.",
    defaultOptions: { type: "full", origin: "scottish", gender: "any", count: 10, includeSurname: true },
    howItWorks: [
      { step: "1", title: "Highland & Lowland Lore", desc: "Names celebrating nature, islands, and Celtic nobility." },
      { step: "2", title: "Ancient Clan Names", desc: "Paired with MacLeod, MacDonald, Stewart, and Fraser." },
      { step: "3", title: "One-Click Roster", desc: "Instant character sets for historical fiction and RPGs." },
    ],
    examples: [
      { name: "Callum MacLeod", tag: "Highland Clan", description: "Peaceful dove paired with son of Leod Norse-Gaelic clan heritage." },
      { name: "Fiona Campbell", tag: "Fair & Resolute", description: "Fair white one paired with the powerful, quick-witted Argyll clan." },
      { name: "Hamish Stewart", tag: "Gaelic James", description: "Supplanter protector paired with the historic royal Scottish ruling house." },
      { name: "Isla MacDonald", tag: "Island Grace", description: "Islay island river resonance paired with rulers of the western isles." },
    ],
    tips: [
      { title: "Honor Clan Associations", desc: "Scottish surnames historically indicated regional fealty to chieftains across the Highlands and Borders." },
      { title: "Distinguish Highland from Lowland", desc: "Highland names skew Gaelic (Alasdair, Eilidh, Ian); Lowland names skew Scots and English (Douglas, Graham)." },
      { title: "Consider Geography", desc: "Toponymic surnames like Crawford, Murray, and Sutherland denote ancestral territories." },
      { title: "Explore Historic Diminutives", desc: "Traditional Scots diminutives like Jamie, Rab, and Maisie add colloquial warmth to dialogues." },
    ],
    faqs: [
      { question: "Can I generate Scottish Gaelic names?", answer: "Yes, our database features traditional Scottish Gaelic given names and clan surnames." },
      { question: "What is the difference between Mac and Mc?", answer: "Both mean 'son of' in Scottish Gaelic and Irish. 'Mac' is the original Gaelic spelling." },
      { question: "Are Scottish royal house surnames included?", answer: "Yes, prominent historical dynasties such as Stewart, Bruce, and Fraser are fully integrated." },
      { question: "Can I generate Scottish names for tabletop games?", answer: "Yes, ideal for D&D fighters, barbarian clans, and historical RPG campaigns." },
    ],
    relatedSlugs: ["irish-name-generator", "british-name-generator", "medieval-name-generator", "warrior-name-generator"],
  },

  "chinese-name-generator": {
    slug: "chinese-name-generator",
    category: "Country & Culture",
    title: "Chinese Name Generator - Authentic Given & Family Names",
    metaDescription: "Generate authentic Chinese names with traditional and contemporary characters. Balanced tones, auspicious meanings, and historic family names.",
    h1: "Chinese Name Generator",
    subheading: "Auspicious, balanced, and poetic Chinese given names and historic family surnames.",
    introText: "Chinese names blend philosophical ideals, ancestral reverence, and poetic virtues. Our generator pairs given names like Wei, Mei-Ling, Chen, and Jun with prominent family names like Wang, Li, Zhang, and Liu.",
    defaultOptions: { type: "full", origin: "chinese", gender: "any", count: 10, includeSurname: true },
    howItWorks: [
      { step: "1", title: "Pinyin & Meaning", desc: "Names carrying virtues of brightness, dawn, strength, and grace." },
      { step: "2", title: "Historic Hundred Family Surnames", desc: "Matched with Baijiaxing surnames like Wang, Li, and Chen." },
      { step: "3", title: "Instant Translation", desc: "Explore etymological roots for all generated entries." },
    ],
    examples: [
      { name: "Wei Zhang", tag: "Greatness & Archer", description: "Greatness and moral power paired with archer bow lineage." },
      { name: "Mei-Ling Wang", tag: "Delicate Beauty", description: "Graceful jade tinkling paired with royal monarch dynasty surname." },
      { name: "Jun Chen", tag: "Handsome & Truth", description: "Handsome gentleman paired with ancient dawn kingdom surname." },
      { name: "Xiu-Ying Liu", tag: "Graceful Blossom", description: "Graceful flower bravery paired with the historic Han imperial clan." },
    ],
    tips: [
      { title: "Honor Eastern Name Order", desc: "In Chinese tradition, the surname precedes the given name (Zhang Wei); in westernized bios it is often inverted." },
      { title: "Select Auspicious Meaning Combinations", desc: "Characters frequently emphasize virtues like benevolence (Ren), wisdom (Zhi), or seasonal beauty." },
      { title: "Consider Gender Conventions", desc: "Male names often feature strength and solar characters (Yang, Long, Hao); female names celebrate lotus, jade, and dawn." },
      { title: "Standardize Romanization", desc: "Use consistent Hanyu Pinyin with standard spacing or hyphens to keep characters clear for English readers." },
    ],
    faqs: [
      { question: "Are these names realistic for contemporary fiction?", answer: "Yes, based on widely used Chinese personal names and verified Romanizations across mainland China, Taiwan, and Singapore." },
      { question: "What are the most common Chinese surnames?", answer: "The top surnames include Wang (King), Li (Plum), Zhang (Archer), Liu (Axe/Willow), and Chen (Ancient state)." },
      { question: "How does the Chinese naming structure work?", answer: "Traditionally, Chinese names consist of a single-syllable surname followed by a one- or two-syllable given name." },
      { question: "Can I generate commercial character names?", answer: "Yes, all generated names are royalty-free and ready for video games, novels, and films." },
    ],
    relatedSlugs: ["japanese-name-generator", "korean-name-generator", "random-full-name-generator", "character-name-generator"],
  },

  "korean-name-generator": {
    slug: "korean-name-generator",
    category: "Country & Culture",
    title: "Korean Name Generator - Modern & Classic Hangul Names",
    metaDescription: "Generate authentic Korean names with popular contemporary given names and traditional clans (Kim, Lee, Park). Cultural naming tool.",
    h1: "Korean Name Generator",
    subheading: "Contemporary, melodious, and traditional Korean first names and family clans.",
    introText: "From Seoul’s modern trends to historical dynasties, Korean names are renowned for rhythmic two-syllable elegance and auspicious connotations. Generate names like Min-jun Kim, Seo-yeon Lee, and Do-yun Park instantly.",
    defaultOptions: { type: "full", origin: "korean", gender: "any", count: 10, includeSurname: true },
    howItWorks: [
      { step: "1", title: "Contemporary Trends", desc: "Features top names from recent Seoul birth registries." },
      { step: "2", title: "Respected Clans", desc: "Paired with historic surnames like Kim, Lee, Park, Choi, and Jung." },
      { step: "3", title: "Cultural Accuracy", desc: "Meanings explained with virtue and seasonal context." },
    ],
    examples: [
      { name: "Min-jun Kim", tag: "Clever & Golden", description: "Clever and talented paired with precious gold royal clan roots." },
      { name: "Seo-yeon Lee", tag: "Graceful Omen", description: "Felicitous omen paired with plum tree dynasty ancestry." },
      { name: "Do-yun Park", tag: "Path of Radiance", description: "Righteous path paired with magnolia tree founder heritage." },
      { name: "Ji-woo Choi", tag: "Wisdom & Universe", description: "Vast intellect paired with lofty, towering ancestral mountain clan." },
    ],
    tips: [
      { title: "Standardize Hyphenation", desc: "Romanized Korean given names are typically hyphenated (Do-yun, Min-jun) with the second syllable lowercase." },
      { title: "Recognize Major Clan Surnames", desc: "Over half the Korean population shares Kim, Lee, Park, or Choi, each tied to historic ancestral clans (bon-gwan)." },
      { title: "Reflect Modern Two-Syllable Flow", desc: "Most modern Korean given names consist of two sino-korean syllables carrying complementary virtues." },
      { title: "Check Unisex Suitability", desc: "Names ending in -woo, -min, or -hyun often carry balanced appeal across male and female characters." },
    ],
    faqs: [
      { question: "Are these names common in modern South Korea?", answer: "Yes! They represent the most popular given names registered across Seoul and nationwide birth census records." },
      { question: "Does the surname come first in Korean names?", answer: "Yes, historically the family clan surname comes first (Kim Min-jun), though international formats often write Min-jun Kim." },
      { question: "Can I generate gender-neutral Korean names?", answer: "Yes, selecting unisex or neutral options highlights names like Ha-neul (Sky) and Ji-min." },
      { question: "Are these names suitable for Webtoons and K-dramas?", answer: "Yes, our roster provides authentic names for modern fiction, screenplays, and manhwa characters." },
    ],
    relatedSlugs: ["japanese-name-generator", "chinese-name-generator", "random-full-name-generator", "female-name-generator"],
  },

  "russian-name-generator": {
    slug: "russian-name-generator",
    category: "Country & Culture",
    title: "Russian Name Generator - Slavic First Names & Patronymics",
    metaDescription: "Generate authentic Russian names for characters, stories, and historical fiction. Classic Slavic first names and traditional family surnames.",
    h1: "Russian Name Generator",
    subheading: "Slavic, imperial, and contemporary Russian names with historical patronymics.",
    introText: "Rich with literary prestige and grand imperial history, Russian names provide immense character depth. Our generator combines names like Dmitri, Anastasia, Nikolai, and Elena with authentic surnames like Ivanov, Morozov, and Sokolov.",
    defaultOptions: { type: "full", origin: "russian", gender: "any", count: 10, includeSurname: true },
    howItWorks: [
      { step: "1", title: "Slavic & Greek Roots", desc: "Names carrying meanings of resurrection, victory, and winter frost." },
      { step: "2", title: "Authentic Surnames", desc: "Paired with surnames like Ivanov, Vasiliev, and Morozov." },
      { step: "3", title: "Literature-Ready", desc: "Instant character sets for novels, thrillers, and historical dramas." },
    ],
    examples: [
      { name: "Nikolai Sokolov", tag: "Noble & Falcon", description: "Victory of the people with son of the noble hunting falcon surname." },
      { name: "Elena Morozova", tag: "Radiant & Frost", description: "Radiant light paired with descendant of the winter frost clan." },
      { name: "Dmitri Volkov", tag: "Earth & Wolf", description: "Devoted to the harvest paired with son of the swift northern wolf." },
      { name: "Anastasia Petrova", tag: "Resurrection", description: "Rebirth and hope paired with ancient rock stone foundation." },
    ],
    tips: [
      { title: "Note Gendered Surname Endings", desc: "Female Russian surnames traditionally add an -a (Ivanov &rarr; Ivanova, Morozov &rarr; Morozova, Volkov &rarr; Volkova)." },
      { title: "Incorporate Patronymics in Formal Dialogue", desc: "Formal Russian address uses given name plus patronymic derived from the father's name (Nikolai Dmitrievich)." },
      { title: "Use Affectionate Diminutives", desc: "Russian possesses rich diminutives expressing intimacy (Dmitri &rarr; Dima, Elena &rarr; Lena, Alexander &rarr; Sasha)." },
      { title: "Distinguish Historical Eras", desc: "Pre-revolutionary aristocratic stories favor Greek-rooted names; rural folklore leans into Slavic names (Yaroslav, Svyatoslav)." },
    ],
    faqs: [
      { question: "Can I generate names for historical 19th-century fiction?", answer: "Yes, our dataset includes timeless literary classics suited for Tolstoy- and Dostoevsky-inspired eras." },
      { question: "How do gendered Russian surnames work?", answer: "Russian surnames inflect for gender; masculine surnames ending in -ov, -ev, or -in become -ova, -eva, and -ina for females." },
      { question: "What are the most iconic Russian family names?", answer: "Prominent historical surnames include Ivanov, Smirnov, Kuznetsov, Popov, and Sokolov." },
      { question: "Can I use generated Russian names commercially?", answer: "Yes, all generated names are royalty-free for published books, video games, and scripts." },
    ],
    relatedSlugs: ["scandinavian-name-generator", "german-name-generator", "character-name-generator", "medieval-name-generator"],
  },

  "rpg-name-generator": {
    slug: "rpg-name-generator",
    category: "Gaming",
    title: "RPG Name Generator - Role-Playing Game Character Names",
    metaDescription: "Generate immersive RPG names for fantasy, sci-fi, and tabletop role-playing games. Heroes, villains, NPCs, and quest givers.",
    h1: "RPG Name Generator",
    subheading: "Immersive, setting-appropriate names for tabletop and video game role-playing adventures.",
    introText: "Whether you are rolling dice in Pathfinder, building an Elder Scrolls avatar, or scripting an indie RPG, our generator delivers memorable names tailored to character classes, races, and alignments.",
    defaultOptions: { type: "fantasy", subCategory: "rpg", count: 10 },
    howItWorks: [
      { step: "1", title: "Class & Race Lore", desc: "Engineered for fighters, rogues, clerics, and sorcerers." },
      { step: "2", title: "Memorable Titles", desc: "Paired with descriptive epithets that immediately establish character feats." },
      { step: "3", title: "Session-Ready", desc: "Copy straight into your virtual tabletop or character sheet." },
    ],
    examples: [
      { name: "Thorgar Stonebreaker", tag: "Dwarven Tank", description: "Crusher of fortress gates with unyielding subterranean resolve." },
      { name: "Astaroth Runeveil", tag: "Mystic Diviner", description: "Scholar of ancient forgotten fate and celestial astral omens." },
      { name: "Vaelin Shadowstalker", tag: "Rogue Assassin", description: "Silent blade navigating moonlit alleys without footprint or whisper." },
      { name: "Lyanna Dawnbringer", tag: "Paladin of Light", description: "Devoted sun knight carrying an enchanted blade against the dark." },
    ],
    tips: [
      { title: "Match Alignment to Tone", desc: "Lawful good paladins suit noble Latinate names; chaotic rogues thrive with sharp, guttural monikers." },
      { title: "Incorporate Character Feats into Surnames", desc: "Compound titles like Ironhide, Spellweaver, and Oakhaven ground characters in campaign accomplishments." },
      { title: "Test Callout Clarity", desc: "Ensure your tabletop group can pronounce and abbreviate your character's name during chaotic combat turns." },
      { title: "Leave Room for Character Growth", desc: "Start with an unadorned given name and allow your adventurer to earn grandiose epithets over time." },
    ],
    faqs: [
      { question: "Can I use these for tabletop and video games?", answer: "Yes, fully compatible with D&D 5e, Pathfinder 2e, Baldur's Gate 3, World of Warcraft, and homebrew tabletop systems." },
      { question: "Are fantasy racial naming conventions supported?", answer: "Yes, our algorithm supports conventions for elves, dwarves, tieflings, humans, and dragonborn." },
      { question: "Can I generate names for dungeon master NPCs?", answer: "Yes, generate instant lists of tavern keepers, mercenary captains, arcane shopkeepers, and villains." },
      { question: "Are generated RPG names commercial-safe?", answer: "Yes, 100% royalty-free for published TTRPG modules, Kickstarter supplements, and video games." },
    ],
    relatedSlugs: ["dnd-name-generator", "fantasy-name-generator", "warrior-name-generator", "wizard-name-generator"],
  },

  "gaming-name-generator": {
    slug: "gaming-name-generator",
    category: "Gaming",
    title: "Gaming Name Generator - Gamertags & Multiplayer Avatars",
    metaDescription: "Generate epic gaming names for Steam, Twitch, Xbox, PSN, and esports teams. Stand out in the lobby with memorable player handles.",
    h1: "Gaming Name Generator",
    subheading: "Catchy, competitive, and unforgettable handles for multiplayer gaming and esports.",
    introText: "Your gaming alias is your calling card across multiplayer servers and streaming platforms. Our gaming name generator combines high-energy verbs, sleek tech terms, and punchy gamer handles.",
    defaultOptions: { type: "username", subCategory: "gamer", count: 10 },
    howItWorks: [
      { step: "1", title: "Competitive Cadence", desc: "Fast-paced, high-impact naming formulas." },
      { step: "2", title: "Clan & Solo Tagging", desc: "Formatted cleanly without number clutter." },
      { step: "3", title: "Claim Your Tag", desc: "Copy directly to check username availability." },
    ],
    examples: [
      { name: "VortexTitan", tag: "Competitive FPS", description: "Heavyweight presence in tournament lobbies commanding lane control." },
      { name: "PixelSlayer", tag: "Retro / Action", description: "Agile, sharp, and instantly recognizable across leaderboard broadcasts." },
      { name: "ApexGhost", tag: "Battle Royale", description: "Stealthy survivor claiming high-ground victories in final rings." },
      { name: "NovaStriker", tag: "MOBA Carry", description: "Explosive burst damage archetype dominating late-game team fights." },
    ],
    tips: [
      { title: "Keep It Pronounceable", desc: "Make sure teammates can easily call your name out during high-stress comms and Discord matches." },
      { title: "Avoid Excessive Numbers", desc: "Clean compound words (NovaStriker) look significantly more professional than trailing digits (Nova98231)." },
      { title: "Check Cross-Platform Availability", desc: "Verify your candidate handle across Steam, Discord, Twitch, and YouTube for cohesive streamer branding." },
      { title: "Select a Visual Motif", desc: "Words denoting elements (Frost, Vapor, Ash) or celestial phenomena provide instant logo and avatar ideas." },
    ],
    faqs: [
      { question: "Will these work across all major gaming platforms?", answer: "Yes, names are engineered to comply with standard 3–16 character limits across Steam, Xbox, PlayStation, and Discord." },
      { question: "Can I use these handles for Twitch and YouTube streaming?", answer: "Yes, they are designed to look clean on overlays, stream alerts, and esports team rosters." },
      { question: "Do these names avoid profanity filters?", answer: "Yes, every root word is curated to comply with standard console and platform safety guidelines." },
      { question: "Can I generate esports team and clan names?", answer: "Yes, use the generated handles as inspiration for clan tags, squad names, and competitive teams." },
    ],
    relatedSlugs: ["gamer-name-generator", "username-generator", "minecraft-name-generator", "cool-names-generator"],
  },

  "nickname-generator": {
    slug: "nickname-generator",
    category: "Gaming & Online",
    title: "Nickname Generator - Fun, Catchy & Quirky Nicknames",
    metaDescription: "Generate catchy, affectionate, and cool nicknames for friends, online profiles, gaming handles, and characters. Instant nickname inspiration.",
    h1: "Nickname Generator",
    subheading: "Catchy, affectionate, and charismatic nicknames for online handles and close companions.",
    introText: "Great nicknames forge instant connection, humor, and camaraderie. Our nickname generator invents playful aliases, snappy diminutives, and memorable handles for group chats and social profiles.",
    defaultOptions: { type: "username", subCategory: "random", count: 10 },
    howItWorks: [
      { step: "1", title: "Playful Combinations", desc: "Blends cheerful adjectives with spirited animal or nature nouns." },
      { step: "2", title: "Clean & Punchy", desc: "Short, friendly names that roll off the tongue." },
      { step: "3", title: "Instant Sharing", desc: "Copy and share favorite nicknames with friends." },
    ],
    examples: [
      { name: "TurboBadger", tag: "Energetic & Fun", description: "Tenacious, tireless, and unstoppable with an infectious sense of humor." },
      { name: "ChillFox", tag: "Relaxed & Clever", description: "Smooth, cunning, and approachable in any social server or hangout." },
      { name: "CosmicPanda", tag: "Playful Mascot", description: "Cuddly outer-space traveler who brings laughs to every gaming lobby." },
      { name: "VelvetWhiz", tag: "Sharp Prodigy", description: "Effortlessly smooth talent mastering creative hurdles in seconds." },
    ],
    tips: [
      { title: "Use Animal Imagery", desc: "Animals evoke immediate personality traits (loyal canine, swift falcon, cunning fox, stubborn badger)." },
      { title: "Match Temperament to Adjective", desc: "Pair energetic qualities (Turbo, Spark, Zippy) or calm moods (Chill, Velvet, Cozy) to fit personality." },
      { title: "Keep Syllables Snappy", desc: "The best nicknames span 2 to 3 syllables for natural cadence in conversation." },
      { title: "Test Inside Jokes", desc: "A great moniker often stems from an exaggerated quirk, favorite food, or funny shared memory." },
    ],
    faqs: [
      { question: "Are these nicknames family-friendly?", answer: "Yes, strictly moderated and safe for all age groups, classroom projects, and online communities." },
      { question: "Can I use these nicknames for social media handles?", answer: "Yes, they work wonderfully for Instagram, TikTok, Roblox, Discord, and Snapchat accounts." },
      { question: "Can I generate couple and best friend nicknames?", answer: "Yes, generate cute, affectionate, and humorous companion names in seconds." },
      { question: "Are these names free to use?", answer: "Yes, 100% free with zero registration, limits, or subscriptions required." },
    ],
    relatedSlugs: ["random-username-generator", "username-generator", "cute-names-generator", "cool-names-generator"],
  },

  "brand-name-generator": {
    slug: "brand-name-generator",
    category: "Business",
    title: "Brand Name Generator - Creative Agency & Studio Names",
    metaDescription: "Generate creative, modern brand names for design agencies, lifestyle labels, studios, and consumer brands. Memorable branding ideas.",
    h1: "Brand Name Generator",
    subheading: "Evocative, artisanal, and modern brand names for creative studios and consumer products.",
    introText: "A great brand name sparks curiosity and emotional connection. Our brand name generator crafts elegant, compound, and aesthetic brand names for design studios, fashion lines, and digital agencies.",
    defaultOptions: { type: "business", subCategory: "brand", count: 10 },
    howItWorks: [
      { step: "1", title: "Aesthetic Brand Foundations", desc: "Harnesses poetic roots like Aura, Lux, Velvet, and Echo." },
      { step: "2", title: "Creative Suffixes", desc: "Paired with Collective, Studio, Lab, and Co." },
      { step: "3", title: "Trademark Ready", desc: "Export candidates for brand identity workshops." },
    ],
    examples: [
      { name: "Echo Collective", tag: "Creative Studio", description: "Compelling stories shaped through multi-disciplinary design and production." },
      { name: "Urban Grain Co.", tag: "Artisanal Goods", description: "Timeless handcrafted goods for modern sustainable living." },
      { name: "Lumina Labs", tag: "Tech Innovation", description: "Next-generation software engineering illuminating complex workflows." },
      { name: "Velvet & Stone", tag: "Lifestyle Boutique", description: "Contrast of soft luxury and enduring geological craftsmanship." },
    ],
    tips: [
      { title: "Evoke Sensory Imagery", desc: "Brands with tactile vocabulary (Velvet, Grain, Light, Stone) resonate deeply and create tactile mental associations." },
      { title: "Check Linguistic Neutrality", desc: "Ensure your brand name sounds appealing and culturally unencumbered across target global markets." },
      { title: "Keep Domain Flexibility", desc: "Pair your brand name with prefixes or suffixes (get, app, studio, co) if the exact dot-com is registered." },
      { title: "Conduct Trademark Diligence", desc: "Always check national patent and trademark offices (USPTO, EUIPO) before committing to a commercial launch." },
    ],
    faqs: [
      { question: "Can I use these brand names commercially?", answer: "Yes, all generated names are royalty-free. We recommend conducting standard trademark searches before registering." },
      { question: "What industries do these brand names suit?", answer: "They are tailored for creative agencies, architecture studios, SaaS apps, apparel labels, and coffee roasters." },
      { question: "How does the brand generator create ideas?", answer: "It algorithmically combines evocative sensory prefixes with contemporary industry anchors." },
      { question: "Can I export candidate brand lists?", answer: "Yes, you can copy all names to your clipboard or download a formatted TXT file with a single click." },
    ],
    relatedSlugs: ["business-name-generator", "startup-name-generator", "company-name-generator", "unique-names-generator"],
  },

  "rare-names-generator": {
    slug: "rare-names-generator",
    category: "Styles",
    title: "Rare Names Generator - Unusual & Forgotten Historical Names",
    metaDescription: "Generate rare, obscure, and beautiful forgotten names for characters and babies. Hidden gems with rich historical etymology.",
    h1: "Rare Names Generator",
    subheading: "Uncommon, mysterious, and forgotten names that defy ordinary popularity charts.",
    introText: "If you want a name that feels truly rare and mysterious, our rare names generator excavates ancient chronicles, forgotten mythology, and obscure historical registers for one-of-a-kind names.",
    defaultOptions: { type: "first", style: "rare", count: 10 },
    howItWorks: [
      { step: "1", title: "Deep Historical Archives", desc: "Curated from outside the standard top 1,000 name charts." },
      { step: "2", title: "Linguistic Depth", desc: "Every rare name carries documented etymological heritage." },
      { step: "3", title: "Unforgettable Identity", desc: "Give your characters names that instantly leave an impression." },
    ],
    examples: [
      { name: "Persephone", tag: "Mythological Greek", description: "Bringer of verdant spring and queen of the underworld; mystical and immortal." },
      { name: "Cassander", tag: "Ancient Hellenic", description: "Brother to Alexander the Great’s legacy; majestic ruler of men." },
      { name: "Zephyrine", tag: "West Wind", description: "Delicate breeze of twilight; poetic, airy, and exceptionally scarce in modern charts." },
      { name: "Leopoldine", tag: "Imperial Archduchess", description: "Brave people heritage paired with 19th-century royal botanical patronage." },
    ],
    tips: [
      { title: "Pair Rare First Names with Grounded Surnames", desc: "An unusual given name paired with a familiar surname creates believable, grounded literary contrast." },
      { title: "Consider Phonetic Flow", desc: "Look for rare names with intuitive syllable stress so readers and peers do not stumble when speaking them aloud." },
      { title: "Explore Forgotten Classics", desc: "Dig into Victorian censuses, medieval parish records, and astronomical catalogs for genuine historical gems." },
      { title: "Match Rarity to Character Archetype", desc: "Bestow rare names on enigmatic mentors, ancient monarchs, or isolated protagonists whose names should feel extraordinary." },
    ],
    faqs: [
      { question: "Are rare names difficult to pronounce?", answer: "We select rare names that remain melodically natural, phonetic, and pleasant to the ear." },
      { question: "Where do these rare names originate?", answer: "Our database draws from ancient Greek chronicles, Latin texts, Celtic myths, and archaic parish records." },
      { question: "Can I use rare names for baby name inspiration?", answer: "Yes! Many parents seek unique names that avoid being shared by multiple classmates." },
      { question: "Are these names verified with genuine meanings?", answer: "Yes, each rare name includes verified linguistic and etymological roots." },
    ],
    relatedSlugs: ["unique-names-generator", "cool-names-generator", "fantasy-name-generator", "classic-names-generator"],
  },
};

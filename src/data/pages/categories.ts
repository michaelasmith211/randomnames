export interface CategoryGroup {
  id: string;
  name: string;
  description: string;
  icon: string;
  items: {
    title: string;
    slug: string;
    description: string;
    tag?: string;
  }[];
}

export const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    id: 'general',
    name: 'General Name Generators',
    description: 'Core generators for first, last, and full names across all genders and world regions.',
    icon: 'User',
    items: [
      { title: 'Random Name Generator', slug: '', description: 'Universal name generator for all characters and needs.' },
      { title: 'Random First Name Generator', slug: 'random-first-name-generator', description: 'Instant given names for babies, characters, and aliases.' },
      { title: 'Random Full Name Generator', slug: 'random-full-name-generator', description: 'Realistic two-part identities with compatible surnames.' },
      { title: 'Male Name Generator', slug: 'male-name-generator', description: 'Strong, classic, and modern boy names with meanings.' },
      { title: 'Female Name Generator', slug: 'female-name-generator', description: 'Beautiful, elegant, and lyrical girl names with origins.' },
      { title: 'Gender-Neutral Name Generator', slug: 'gender-neutral-name-generator', description: 'Modern unisex and non-binary names.' },
      { title: 'Last Name Generator', slug: 'last-name-generator', description: 'Authentic family surnames from over 20 countries.' },
    ],
  },
  {
    id: 'character',
    name: 'Character & Fantasy Names',
    description: 'Immersive fantasy races, mythic classes, and story archetypes for novels and tabletop RPGs.',
    icon: 'Sword',
    items: [
      { title: 'Character Name Generator', slug: 'character-name-generator', description: 'Names tailored for fictional book and game protagonists.' },
      { title: 'Fantasy Name Generator', slug: 'fantasy-name-generator', description: 'Epic procedural names for elves, dragons, and sorcerers.' },
      { title: 'D&D Name Generator', slug: 'dnd-name-generator', description: '5e tabletop RPG character and NPC name inspiration.' },
      { title: 'Elf Name Generator', slug: 'elf-name-generator', description: 'Lyrical High Elf, Wood Elf, and Drow names.' },
      { title: 'Wizard Name Generator', slug: 'wizard-name-generator', description: 'Arcane mages, warlocks, and sorcerers with titles.' },
      { title: 'Warrior Name Generator', slug: 'warrior-name-generator', description: 'Battle-hardened knights, gladiators, and berserkers.' },
      { title: 'Dragon Name Generator', slug: 'dragon-name-generator', description: 'Ancient wyrms, drakes, and apocalyptic winged beasts.' },
      { title: 'Pirate Name Generator', slug: 'pirate-name-generator', description: 'Swashbuckling sea captains and roguish buccaneers.' },
      { title: 'Superhero Name Generator', slug: 'superhero-name-generator', description: 'Iconic aliases for comic heroes and vigilantes.' },
      { title: 'Villain Name Generator', slug: 'villain-name-generator', description: 'Sinister dark lords and evil masterminds.' },
      { title: 'Medieval Name Generator', slug: 'medieval-name-generator', description: 'Feudal lords, ladies, squires, and castle knights.' },
      { title: 'Vampire Name Generator', slug: 'vampire-name-generator', description: 'Gothic immortal aristocrats and bloodline regents.' },
      { title: 'Fairy Name Generator', slug: 'fairy-name-generator', description: 'Whimsical sprites, dryads, and fae royalty.' },
    ],
  },
  {
    id: 'gaming',
    name: 'Gaming & Online Names',
    description: 'Catchy usernames, gamertags, and handles for gamers, streamers, and social profiles.',
    icon: 'Gamepad2',
    items: [
      { title: 'Username Generator', slug: 'username-generator', description: 'Catchy, available handles for Instagram, Discord & TikTok.' },
      { title: 'Gamer Name Generator', slug: 'gamer-name-generator', description: 'Competitive gamertags for Xbox, PS5, Steam & Twitch.' },
      { title: 'Random Username Generator', slug: 'random-username-generator', description: 'Instant, clean handles for quick online accounts.' },
      { title: 'Minecraft Name Generator', slug: 'minecraft-name-generator', description: 'Block-themed IGNs for Minecraft Java & Bedrock.' },
    ],
  },
  {
    id: 'business',
    name: 'Business & Startup Names',
    description: 'Modern, brandable names for tech startups, corporations, agencies, and boutique shops.',
    icon: 'Briefcase',
    items: [
      { title: 'Business Name Generator', slug: 'business-name-generator', description: 'Brandable company ideas across tech, consulting & retail.' },
      { title: 'Company Name Generator', slug: 'company-name-generator', description: 'Authoritative names for consulting, capital & enterprise.' },
      { title: 'Startup Name Generator', slug: 'startup-name-generator', description: 'Modern blended names for SaaS, AI & Web3 products.' },
    ],
  },
  {
    id: 'countries',
    name: 'Country & Cultural Names',
    description: 'Culturally respectful given names and authentic surnames from around the world.',
    icon: 'Globe',
    items: [
      { title: 'American Name Generator', slug: 'random-full-name-generator', description: 'Contemporary & classic American first and last names.' },
      { title: 'British Name Generator', slug: 'british-name-generator', description: 'Traditional English, Scottish, and Welsh names.' },
      { title: 'Indian Name Generator', slug: 'indian-name-generator', description: 'Meaningful Sanskrit, Hindu, and regional Indian names.' },
      { title: 'French Name Generator', slug: 'french-name-generator', description: 'Lyrical and romantic French first names and surnames.' },
      { title: 'German Name Generator', slug: 'german-name-generator', description: 'Resolute Germanic names with historic guild surnames.' },
      { title: 'Spanish Name Generator', slug: 'spanish-name-generator', description: 'Vibrant Hispanic names popular across Spain and Latin America.' },
      { title: 'Italian Name Generator', slug: 'italian-name-generator', description: 'Passionate Renaissance and modern Italian names.' },
      { title: 'Japanese Name Generator', slug: 'japanese-name-generator', description: 'Poetic Japanese names with authentic kanji meanings.' },
      { title: 'Scandinavian Name Generator', slug: 'scandinavian-name-generator', description: 'Nordic and Viking names from Sweden, Norway & Denmark.' },
      { title: 'Arabic Name Generator', slug: 'arabic-name-generator', description: 'Spiritually rich and poetic Arabic first and family names.' },
    ],
  },
  {
    id: 'styles',
    name: 'Name Styles',
    description: 'Curated by phonetic aesthetic, personality archetype, and emotional tone.',
    icon: 'Sparkles',
    items: [
      { title: 'Cool Names Generator', slug: 'cool-names-generator', description: 'Edgy, badass, and charismatic names with attitude.' },
      { title: 'Cute Names Generator', slug: 'cute-names-generator', description: 'Sweet, charming, and soft names for babies and pets.' },
      { title: 'Unique Names Generator', slug: 'unique-names-generator', description: 'Rare, distinctive gems outside the common charts.' },
      { title: 'Classic Names Generator', slug: 'classic-names-generator', description: 'Timeless, traditional names with century-long appeal.' },
    ],
  },
];

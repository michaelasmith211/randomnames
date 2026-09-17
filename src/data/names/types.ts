export type Gender = 'any' | 'male' | 'female' | 'neutral';

export type Origin =
  | 'any'
  | 'american'
  | 'british'
  | 'indian'
  | 'irish'
  | 'scottish'
  | 'french'
  | 'german'
  | 'spanish'
  | 'italian'
  | 'japanese'
  | 'chinese'
  | 'korean'
  | 'arabic'
  | 'turkish'
  | 'russian'
  | 'scandinavian'
  | 'african'
  | 'greek'
  | 'latin';

export type Style =
  | 'any'
  | 'cute'
  | 'cool'
  | 'unique'
  | 'rare'
  | 'beautiful'
  | 'strong'
  | 'classic'
  | 'modern'
  | 'vintage'
  | 'short'
  | 'long'
  | 'mysterious'
  | 'dark'
  | 'funny'
  | 'elegant'
  | 'powerful'
  | 'magical'
  | 'nature'
  | 'mythological'
  | 'ancient'
  | 'royal'
  | 'unusual'
  | 'popular'
  | 'peaceful'
  | 'bright'
  | 'artistic'
  | 'romantic'
  | 'positive'
  | 'historical'
  | 'friendly'
  | 'noble'
  | 'traditional'
  | 'purposeful'
  | 'brave'
  | 'spiritual'
  | 'philosophy'
  | 'gentle'
  | 'precious'
  | 'dramatic'
  | 'golden'
  | 'warrior'
  | 'prophetic'
  | 'fantasy';

export type NameType =
  | 'first'
  | 'full'
  | 'last'
  | 'character'
  | 'fantasy'
  | 'username'
  | 'business';

export type SubCategory =
  | 'none'
  | 'dnd'
  | 'rpg'
  | 'elf'
  | 'wizard'
  | 'warrior'
  | 'dragon'
  | 'pirate'
  | 'superhero'
  | 'villain'
  | 'medieval'
  | 'vampire'
  | 'fairy'
  | 'gamer'
  | 'minecraft'
  | 'nickname'
  | 'random'
  | 'aesthetic'
  | 'tech'
  | 'startup'
  | 'company'
  | 'brand'
  | 'shop';

export interface GeneratorOptions {
  type: NameType;
  gender: Gender;
  origin: Origin;
  style: Style;
  count: number;
  subCategory?: SubCategory;
  includeSurname?: boolean;
  customSurname?: string;
  prefix?: string;
  suffix?: string;
}

export interface GeneratedName {
  id: string;
  name: string;
  gender?: string;
  origin?: string;
  style?: string;
  meaning?: string;
  category?: string;
  tags?: string[];
}

export interface NameRecord {
  name: string;
  gender: 'male' | 'female' | 'neutral';
  origin: Origin;
  styles: (Style | string)[];
  meaning?: string;
}

export interface SurnameRecord {
  name: string;
  origin: Origin;
  meaning?: string;
}

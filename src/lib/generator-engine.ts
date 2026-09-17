import { GeneratorOptions, GeneratedName, NameRecord, SurnameRecord, Origin, Gender, Style } from '../data/names/types';
import { FIRST_NAMES } from '../data/names/firstNames';
import { SURNAMES } from '../data/names/surnames';
import { FANTASY_DATA } from '../data/names/fantasy';
import { USERNAME_DATA } from '../data/names/usernames';
import { BUSINESS_DATA } from '../data/names/business';

// Utility random helpers
function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Generate Fantasy Name procedurally
function generateProceduralFantasy(category: string): { name: string; meaning: string } {
  const archetype = FANTASY_DATA[category] || FANTASY_DATA.elf;
  const prefix = getRandomItem(archetype.prefixes);
  const root = getRandomItem(archetype.roots);
  const suffix = getRandomItem(archetype.suffixes);
  const epithet = getRandomItem(archetype.epithets);

  const firstName = `${prefix}${root}${suffix}`;
  // Capitalize properly
  const formattedFirst = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();

  const useEpithet = Math.random() > 0.3;
  const fullName = useEpithet ? `${formattedFirst} ${epithet}` : formattedFirst;

  return {
    name: fullName,
    meaning: `Legendary ${category} of the ancient realms`,
  };
}

// Generate Procedural Username
function generateProceduralUsername(category: string): string {
  const data = USERNAME_DATA[category] || USERNAME_DATA.gamer;
  const styleRoll = Math.random();

  if (styleRoll < 0.35) {
    // Prefix + Word
    return `${getRandomItem(data.prefixes)}${getRandomItem(data.words)}`;
  } else if (styleRoll < 0.7) {
    // Word + Suffix
    return `${getRandomItem(data.words)}${getRandomItem(data.suffixes)}`;
  } else {
    // Prefix + Word + Suffix
    return `${getRandomItem(data.prefixes)}${getRandomItem(data.words)}${getRandomItem(data.suffixes)}`;
  }
}

// Generate Procedural Business Name
function generateProceduralBusiness(category: string): { name: string; tagline: string } {
  const data = BUSINESS_DATA[category] || BUSINESS_DATA.startup;
  const roll = Math.random();

  if (roll < 0.4) {
    // Blended word: root + suffix (e.g. Apexify, NovaFlow)
    const name = `${getRandomItem(data.roots)}${getRandomItem(data.suffixes)}`;
    return { name, tagline: 'Modern high-impact enterprise' };
  } else if (roll < 0.8) {
    // Compound word (e.g. PeakLogic, SmartScale)
    const name = `${getRandomItem(data.compoundFirst)} ${getRandomItem(data.compoundSecond)}`;
    return { name, tagline: 'Innovative solutions and services' };
  } else {
    // Root + space + suffix (e.g. Keystone Holdings)
    const name = `${getRandomItem(data.roots)} ${getRandomItem(data.suffixes)}`;
    return { name, tagline: 'Premium market-leading brand' };
  }
}

export function generateNames(options: GeneratorOptions): GeneratedName[] {
  const count = Math.max(1, Math.min(100, options.count || 10));
  const seenNames = new Set<string>();
  const results: GeneratedName[] = [];

  const {
    type,
    gender = 'any',
    origin = 'any',
    style = 'any',
    subCategory,
    includeSurname,
    customSurname,
    prefix = '',
    suffix = '',
  } = options;

  // Handle Fantasy Names
  if (type === 'fantasy' || (type === 'character' && subCategory && FANTASY_DATA[subCategory])) {
    const activeSub = (subCategory && FANTASY_DATA[subCategory]) ? subCategory : 'elf';
    const archetype = FANTASY_DATA[activeSub] || FANTASY_DATA.elf;

    // First use shuffled curated list
    const shuffledCurated = shuffleArray(archetype.curated);
    for (const item of shuffledCurated) {
      if (results.length >= count) break;
      let finalName = item.name;
      if (prefix) finalName = `${prefix} ${finalName}`;
      if (suffix) finalName = `${finalName} ${suffix}`;

      if (!seenNames.has(finalName)) {
        seenNames.add(finalName);
        results.push({
          id: `fantasy-${results.length}-${Date.now()}`,
          name: finalName,
          gender: item.gender || 'neutral',
          origin: 'Mythological',
          style: 'Fantasy',
          meaning: item.meaning,
          category: activeSub,
          tags: ['fantasy', activeSub],
        });
      }
    }

    // If more needed, generate procedurally
    while (results.length < count) {
      const generated = generateProceduralFantasy(activeSub);
      let finalName = generated.name;
      if (prefix) finalName = `${prefix} ${finalName}`;
      if (suffix) finalName = `${finalName} ${suffix}`;

      if (!seenNames.has(finalName)) {
        seenNames.add(finalName);
        results.push({
          id: `fantasy-${results.length}-${Date.now()}`,
          name: finalName,
          gender: 'neutral',
          origin: 'Mythological',
          style: 'Fantasy',
          meaning: generated.meaning,
          category: activeSub,
          tags: ['fantasy', activeSub],
        });
      }
    }

    return results;
  }

  // Handle Username Generation
  if (type === 'username') {
    const activeCat = (subCategory && USERNAME_DATA[subCategory]) ? subCategory : 'gamer';
    const data = USERNAME_DATA[activeCat] || USERNAME_DATA.gamer;

    // Use curated list first
    const shuffledCurated = shuffleArray(data.curated);
    for (const item of shuffledCurated) {
      if (results.length >= count) break;
      let finalName = item;
      if (prefix) finalName = `${prefix}${finalName}`;
      if (suffix) finalName = `${finalName}${suffix}`;

      if (!seenNames.has(finalName)) {
        seenNames.add(finalName);
        results.push({
          id: `username-${results.length}-${Date.now()}`,
          name: finalName,
          style: 'Username',
          category: activeCat,
          meaning: `Handle for ${activeCat} communities`,
          tags: ['username', activeCat],
        });
      }
    }

    while (results.length < count) {
      let finalName = generateProceduralUsername(activeCat);
      if (prefix) finalName = `${prefix}${finalName}`;
      if (suffix) finalName = `${finalName}${suffix}`;

      if (!seenNames.has(finalName)) {
        seenNames.add(finalName);
        results.push({
          id: `username-${results.length}-${Date.now()}`,
          name: finalName,
          style: 'Username',
          category: activeCat,
          meaning: `Handle for ${activeCat} communities`,
          tags: ['username', activeCat],
        });
      }
    }

    return results;
  }

  // Handle Business Name Generation
  if (type === 'business') {
    const activeCat = (subCategory && BUSINESS_DATA[subCategory]) ? subCategory : 'startup';
    const data = BUSINESS_DATA[activeCat] || BUSINESS_DATA.startup;

    const shuffledCurated = shuffleArray(data.curated);
    for (const item of shuffledCurated) {
      if (results.length >= count) break;
      let finalName = item.name;
      if (prefix) finalName = `${prefix} ${finalName}`;
      if (suffix) finalName = `${finalName} ${suffix}`;

      if (!seenNames.has(finalName)) {
        seenNames.add(finalName);
        results.push({
          id: `biz-${results.length}-${Date.now()}`,
          name: finalName,
          style: 'Brand',
          category: item.industry,
          meaning: item.tagline,
          tags: ['business', activeCat],
        });
      }
    }

    while (results.length < count) {
      const gen = generateProceduralBusiness(activeCat);
      let finalName = gen.name;
      if (prefix) finalName = `${prefix} ${finalName}`;
      if (suffix) finalName = `${finalName} ${suffix}`;

      if (!seenNames.has(finalName)) {
        seenNames.add(finalName);
        results.push({
          id: `biz-${results.length}-${Date.now()}`,
          name: finalName,
          style: 'Brand',
          category: activeCat,
          meaning: gen.tagline,
          tags: ['business', activeCat],
        });
      }
    }

    return results;
  }

  // Handle Last Names Only
  if (type === 'last') {
    let filteredSurnames = SURNAMES.filter((s) => {
      if (origin !== 'any' && s.origin !== origin) return false;
      return true;
    });

    if (filteredSurnames.length === 0) {
      filteredSurnames = SURNAMES;
    }

    const shuffled = shuffleArray(filteredSurnames);
    for (const s of shuffled) {
      if (results.length >= count) break;
      let finalName = s.name;
      if (prefix) finalName = `${prefix} ${finalName}`;
      if (suffix) finalName = `${finalName} ${suffix}`;

      if (!seenNames.has(finalName)) {
        seenNames.add(finalName);
        results.push({
          id: `surname-${results.length}-${Date.now()}`,
          name: finalName,
          origin: s.origin.charAt(0).toUpperCase() + s.origin.slice(1),
          style: 'Surname',
          meaning: s.meaning,
          tags: ['surname', s.origin],
        });
      }
    }

    return results;
  }

  // Standard First or Full Names
  let filteredFirstNames = FIRST_NAMES.filter((f) => {
    if (gender !== 'any' && f.gender !== gender && f.gender !== 'neutral') return false;
    if (origin !== 'any' && f.origin !== origin) return false;
    if (style !== 'any' && !f.styles.includes(style)) return false;
    return true;
  });

  // If filter is too strict and produces few results, relax style or origin gracefully
  if (filteredFirstNames.length < 5) {
    filteredFirstNames = FIRST_NAMES.filter((f) => {
      if (gender !== 'any' && f.gender !== gender && f.gender !== 'neutral') return false;
      if (origin !== 'any' && f.origin !== origin) return false;
      return true;
    });
  }
  if (filteredFirstNames.length < 5) {
    filteredFirstNames = FIRST_NAMES;
  }

  const shuffledFirst = shuffleArray(filteredFirstNames);
  const isFullName = type === 'full' || includeSurname === true;

  for (const fn of shuffledFirst) {
    if (results.length >= count) break;

    let finalName = fn.name;

    if (isFullName) {
      let surname = customSurname ? customSurname.trim() : '';
      if (!surname) {
        // Find compatible surname matching origin, or random
        const compatibleSurnames = SURNAMES.filter((s) => s.origin === fn.origin);
        if (compatibleSurnames.length > 0) {
          surname = getRandomItem(compatibleSurnames).name;
        } else {
          surname = getRandomItem(SURNAMES).name;
        }
      }
      finalName = `${fn.name} ${surname}`;
    }

    if (prefix) finalName = `${prefix} ${finalName}`;
    if (suffix) finalName = `${finalName} ${suffix}`;

    if (!seenNames.has(finalName)) {
      seenNames.add(finalName);
      results.push({
        id: `name-${results.length}-${Date.now()}`,
        name: finalName,
        gender: fn.gender.charAt(0).toUpperCase() + fn.gender.slice(1),
        origin: fn.origin.charAt(0).toUpperCase() + fn.origin.slice(1),
        style: fn.styles[0] ? fn.styles[0].charAt(0).toUpperCase() + fn.styles[0].slice(1) : undefined,
        meaning: fn.meaning,
        tags: [fn.origin, fn.gender, ...fn.styles],
      });
    }
  }

  // If we still need more names to satisfy count (e.g. 50 or 100), reuse combinations with variations
  if (results.length < count) {
    const pool = shuffleArray(FIRST_NAMES);
    let i = 0;
    while (results.length < count && i < 500) {
      const fn = pool[i % pool.length];
      i++;
      let surname = customSurname || getRandomItem(SURNAMES).name;
      let finalName = isFullName ? `${fn.name} ${surname}` : fn.name;
      if (results.some((r) => r.name === finalName)) {
        // synthesize variation with middle initial or compound surname
        const midLetters = ['A.', 'J.', 'M.', 'E.', 'R.', 'K.', 'T.', 'S.'];
        const mid = getRandomItem(midLetters);
        finalName = isFullName ? `${fn.name} ${mid} ${surname}` : `${fn.name} (${fn.origin})`;
      }

      if (!seenNames.has(finalName)) {
        seenNames.add(finalName);
        results.push({
          id: `name-${results.length}-${Date.now()}`,
          name: finalName,
          gender: fn.gender.charAt(0).toUpperCase() + fn.gender.slice(1),
          origin: fn.origin.charAt(0).toUpperCase() + fn.origin.slice(1),
          style: fn.styles[0] ? fn.styles[0].charAt(0).toUpperCase() + fn.styles[0].slice(1) : undefined,
          meaning: fn.meaning,
          tags: [fn.origin, fn.gender],
        });
      }
    }
  }

  return results;
}

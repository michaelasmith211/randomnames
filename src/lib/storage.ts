import { GeneratedName } from '../data/names/types';

const FAVORITES_KEY = 'rng_saved_favorites_v1';
const HISTORY_KEY = 'rng_generation_history_v1';
const MAX_HISTORY = 10;

export interface HistoryEntry {
  id: string;
  timestamp: number;
  label: string;
  names: GeneratedName[];
}

export function getSavedFavorites(): GeneratedName[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.warn('Unable to access localStorage for favorites', e);
    return [];
  }
}

export function toggleFavorite(name: GeneratedName): { isFavorite: boolean; favorites: GeneratedName[] } {
  if (typeof window === 'undefined') return { isFavorite: false, favorites: [] };
  try {
    const current = getSavedFavorites();
    const index = current.findIndex((item) => item.name === name.name);
    let updated: GeneratedName[];
    let isFavorite = false;

    if (index >= 0) {
      updated = current.filter((item) => item.name !== name.name);
      isFavorite = false;
    } else {
      updated = [name, ...current];
      isFavorite = true;
    }

    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    // Trigger custom event so header badge updates instantly
    window.dispatchEvent(new Event('favorites-updated'));
    return { isFavorite, favorites: updated };
  } catch (e) {
    console.warn('Failed to update favorites', e);
    return { isFavorite: false, favorites: [] };
  }
}

export function removeFavorite(nameString: string): GeneratedName[] {
  if (typeof window === 'undefined') return [];
  try {
    const current = getSavedFavorites();
    const updated = current.filter((item) => item.name !== nameString);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('favorites-updated'));
    return updated;
  } catch (e) {
    console.warn('Failed to remove favorite', e);
    return [];
  }
}

export function clearAllFavorites(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(FAVORITES_KEY);
    window.dispatchEvent(new Event('favorites-updated'));
  } catch (e) {
    console.warn('Failed to clear favorites', e);
  }
}

export function getGenerationHistory(): HistoryEntry[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.warn('Unable to access localStorage for history', e);
    return [];
  }
}

export function saveGenerationToHistory(label: string, names: GeneratedName[]): void {
  if (typeof window === 'undefined' || !names.length) return;
  try {
    const current = getGenerationHistory();
    const newEntry: HistoryEntry = {
      id: `history-${Date.now()}`,
      timestamp: Date.now(),
      label,
      names,
    };
    const updated = [newEntry, ...current].slice(0, MAX_HISTORY);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
  } catch (e) {
    console.warn('Failed to save history entry', e);
  }
}

export function clearHistory(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(HISTORY_KEY);
  } catch (e) {
    console.warn('Failed to clear history', e);
  }
}

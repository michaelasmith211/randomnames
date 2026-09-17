import { GeneratedName } from '../data/names/types';

export function formatNamesAsText(names: GeneratedName[], title = 'Generated Names'): string {
  const dateStr = new Date().toISOString().split('T')[0];
  let output = `========================================\n`;
  output += `${title} - randomnamegenerator.dev\n`;
  output += `Generated on: ${dateStr}\n`;
  output += `Total Names: ${names.length}\n`;
  output += `========================================\n\n`;

  names.forEach((item, index) => {
    output += `${index + 1}. ${item.name}`;
    const details = [];
    if (item.gender) details.push(item.gender);
    if (item.origin) details.push(item.origin);
    if (item.meaning) details.push(`"${item.meaning}"`);
    if (details.length) {
      output += ` (${details.join(' | ')})`;
    }
    output += `\n`;
  });

  output += `\n----------------------------------------\n`;
  output += `Generated privately with https://randomnamegenerator.dev\n`;
  return output;
}

export function downloadAsTxt(names: GeneratedName[], filename = 'generated-names.txt'): void {
  if (typeof window === 'undefined' || !names.length) return;
  try {
    const content = formatNamesAsText(names);
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (err) {
    console.error('Failed to download TXT file', err);
  }
}

export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof window === 'undefined') return false;
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    // Fallback for older environments
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textarea);
    return successful;
  } catch (err) {
    console.error('Failed to copy to clipboard', err);
    return false;
  }
}

export async function shareContent(data: { title: string; text: string; url?: string }): Promise<boolean> {
  if (typeof window === 'undefined') return false;
  try {
    if (navigator?.share) {
      await navigator.share(data);
      return true;
    }
    // Fallback: copy url or text to clipboard
    const shareText = `${data.title}\n${data.text}\n${data.url || window.location.href}`;
    return await copyToClipboard(shareText);
  } catch (err) {
    // User cancelled share or share failed
    return false;
  }
}

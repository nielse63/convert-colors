
import { isHexCode, defaults } from './utils';
import { rgbToHSL } from './rgb';

export function hexToRGB(string = defaults.hex) {
  const hex = !/^#/.test(string) ? `#${string}` : string;
  if (!isHexCode(hex)) {
    throw new TypeError('Invalid hex code provided');
  }

  const match = hex.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  let colorString = match[0];

  if (colorString.length === 3) {
    colorString = colorString.split('').map(char => char + char).join('');
  }

  const integer = parseInt(colorString, 16);
  const r = (integer >> 16) & 0xFF;
  const g = (integer >> 8) & 0xFF;
  const b = integer & 0xFF;

  return { r, g, b };
}

export function hexToHSL(hex) {
  const rgb = hexToRGB(hex);
  return rgbToHSL(rgb);
}

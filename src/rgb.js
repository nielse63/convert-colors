
import { defaults, minifyHex } from './utils';

export function rgbToHex(rgb = defaults.rgb) {
  const integer = ((Math.round(rgb.r) & 0xFF) << 16)
    + ((Math.round(rgb.g) & 0xFF) << 8)
    + (Math.round(rgb.b) & 0xFF);

  const string = integer.toString(16).toLowerCase();
  const output = '000000'.substring(string.length) + string;
  const hex = minifyHex(output);
  return `#${hex}`;
}

export function rgbToHSL(rgb = defaults.rgb) {
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const delta = max - min;
  let h;
  let s;

  if (max === min) {
    h = 0;
  } else if (r === max) {
    h = (g - b) / delta;
  } else if (g === max) {
    h = 2 + ((b - r) / delta);
  } else if (b === max) {
    h = 4 + ((r - g) / delta);
  }

  h = Math.min(h * 60, 360);

  const l = (min + max) / 2;

  if (max === min) {
    s = 0;
  } else if (l <= 0.5) {
    s = delta / (max + min);
  } else {
    s = delta / (2 - max - min);
  }

  return {
    h: parseInt(Math.round(h), 10),
    s: parseInt(Math.round(s * 100), 10),
    l: parseInt(Math.round(l * 100), 10),
  };
}

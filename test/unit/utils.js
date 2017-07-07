
export const colors = [
  {
    hex: '#000000',
    shorthex: '#000',
    rgb: { r: 0, g: 0, b: 0 },
    hsl: { h: 0, s: 0, l: 0 },
  }, {
    hex: '#ffffff',
    shorthex: '#fff',
    rgb: { r: 255, g: 255, b: 255 },
    hsl: { h: 0, s: 0, l: 100 },
  }, {
    hex: '#333333',
    shorthex: '#333',
    rgb: { r: 51, g: 51, b: 51 },
    hsl: { h: 0, s: 0, l: 20 },
  }, {
    hex: '#cc5803',
    rgb: { r: 204, g: 88, b: 3 },
    hsl: { h: 25, s: 97, l: 41 },
  }, {
    hex: '#e2711d',
    rgb: { r: 226, g: 113, b: 29 },
    hsl: { h: 26, s: 77, l: 50 },
  }, {
    hex: '#ff9505',
    rgb: { r: 255, g: 149, b: 5 },
    hsl: { h: 35, s: 100, l: 51 },
  }, {
    hex: '#ffb627',
    rgb: { r: 255, g: 182, b: 39 },
    hsl: { h: 40, s: 100, l: 58 },
  }, {
    hex: '#ffc971',
    rgb: { r: 255, g: 201, b: 113 },
    hsl: { h: 37, s: 100, l: 72 },
  }, {
    hex: '#0aff70',
    rgb: { r: 10, g: 255, b: 112 },
    hsl: { h: 145, s: 100, l: 52 },
  }, {
    hex: '#2f32ff',
    rgb: { r: 47, g: 50, b: 255 },
    hsl: { h: 239, s: 100, l: 59 },
  },
];

export function expandHex(hex) {
  return hex.split('').map(char => char + char).join('');
}


export function isString(object) {
  return typeof object === 'string';
}

export function isObject(object) {
  return {}.toString.call(object) === '[object Object]';
}

export function isHexCode(string) {
  return isString(string) && /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(string);
}

export const defaults = {
  rgb: { r: 0, g: 0, b: 0 },
  hex: '#000',
};

export function minifyHex(string) {
  const hex = string.replace(/#/g, '');
  const regexp = /^([a-f0-9])\1([a-f0-9])\2([a-f0-9])\3$/gi;
  const res = regexp.exec(hex);
  let color = hex;
  let r;
  let g;
  let b;
  if (res) {
    [color, r, g, b] = res;
    color = (r + g + b).toLowerCase();
  }
  return color;
}

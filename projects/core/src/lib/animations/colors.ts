export function toRGB(c: number) {
  const r = Math.floor(c / (256 * 256));
  const g = Math.floor(c / 256) % 256;
  const b = c % 256;
  return `rgb(${r},${g},${b})`;
}

export function rgbToHex(orig) {
  const rgb = parseRgb(orig);
  return rgb && rgb.length === 4
    ? '#' +
        ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
        ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
        ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2)
    : orig;
}

export function parseRgb(orig) {
  return orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+)/i);
}

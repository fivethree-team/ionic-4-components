export const linear = (t, from, to, duration) => {
  const c = to - from;
  return (c * t) / duration + from;
};

export const easeInQuad = (t, from, to, duration) => {
  const c = to - from;
  return c * (t /= duration) * t + from;
};

export const easeOutSine = (t, from, to, duration) => {
  const c = to - from;
  return c * Math.sin((t / duration) * (Math.PI / 2)) + from;
};

export const easeInOutQuad = (t, from, to, duration) => {
  const c = to - from;
  if ((t /= duration / 2) < 1) {
    return (c / 2) * t * t + from;
  } else {
    return (-c / 2) * (--t * (t - 2) - 1) + from;
  }
};

export const easeOutElastic = (t, b, _c, d) => {
  let c = _c - b;
  let a, p, s;
  s = 1.20158;
  p = 0;
  a = c;
  if (t === 0) {
    return b;
  } else if ((t /= d) === 1) {
    return b + c;
  }
  if (!p) {
    p = d * 0.54;
  }
  if (a < Math.abs(c)) {
    a = c;
    s = p / 4;
  } else {
    s = (p / (2 * Math.PI)) * Math.asin(c / a);
  }
  return (
    a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) +
    c +
    b
  );
};

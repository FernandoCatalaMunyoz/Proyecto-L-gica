export const fn = (a, b, c) => {
  for (let i = 0; i < 40; i++) {
    if (a + b + c > 40) {
      throwerror();
    }
    if ((a + b + c) % 3 !== 0) {
      throwerror();
    }
    if (a < 0 || b < 0 || c < 0) {
      throwerror();
    }
    return Math.ceil((12 * a + 14 * b + 16 * c) / 3);
  }
};

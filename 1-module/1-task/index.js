/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
  if (n == 1) {
    return m;
  }
  
  let value = m;
  let total = 1;
  for (let i = 0; i < n; i++) {
    total *= m;
  }
  return total;
}

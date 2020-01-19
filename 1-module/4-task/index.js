/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  return (/1xBet|xxx/gmi).test(str);
}

/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
  const newObj = JSON.parse(JSON.stringify(obj));
  return newObj;
}

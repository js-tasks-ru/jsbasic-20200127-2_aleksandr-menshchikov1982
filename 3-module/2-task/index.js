/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(string) {
  let arr = string.match(/([-+]?(\d+)[\.]?(\d+)?)/gm);
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let total = {min, max};

  return total;
}

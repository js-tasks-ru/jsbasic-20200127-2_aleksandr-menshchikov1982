/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let str = '';
  for (let elem of data) {
    if (elem.age <= age) {
      str += `${elem.name}, ${elem.balance}\n`;
    }
  }
  return str.split('\n').slice(0, -1).join('\n');
}


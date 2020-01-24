/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  for (let elem of table.children[1].children) {
    if (elem.children[3].dataset.available == 'true') {
      elem.classList.add('available');
    } else if (elem.children[3].dataset.available == 'false') {
      elem.classList.add('unavailable');
    } else if (!elem.children[3].hasAttribute('data-available')) {
      elem.hidden = true;
    } 

    if (elem.children[2].textContent == 'm') {
      elem.classList.add('male');
    } else if (elem.children[2].textContent == 'f') {
      elem.classList.add('female');
    }
    
    if (elem.children[1].textContent < 18) {
      elem.style.textDecoration = 'line-through';
    }
  }
}

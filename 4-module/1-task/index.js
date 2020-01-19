/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  for (let elem of friends) {
    let li = document.createElement('li');
    li.append(elem.firstName + ' ' + elem.lastName);
    ul.append(li);
  }
  return ul;
}

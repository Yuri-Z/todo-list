import localStorageCommit from '_src/js/localStorageCommit';

export default function listItem(item) {
  /** =========================
   * List Item
   =========================== */
  const li = document.createElement('li');
  li.classList.add('list__item');

  let innerHTML =  `<div class="list__item-checkbox">` +
                    `<input class="list__item-checkbox-input" type="checkbox">` +
                    `<i class="list__item-checkbox-appearance icon-check"></i>` +
                  `</div>` +
                  `<div class="list__item-name">${item.name}</div>` +
                  `<div class="list__item-tags">`;
  item.tags.forEach(tag => {
    innerHTML += `<div class="list__item-tag list__item-tag_${tag}"></div>`
  });
  innerHTML += `</div>`;

  li.innerHTML = innerHTML;

  /** =========================
   * Delete Button
   =========================== */
  const deleteButton = document.createElement('i');
  deleteButton.classList.add('list__item-close', 'icon-cross');
  deleteButton.addEventListener('click', (event) => {
    const parent = deleteButton.parentElement;
    let todo = localStorageCommit('read');
    document.querySelectorAll('.list__item').forEach((item, index) => {
      if (item === parent) {
        todo.splice(index, 1);
        localStorageCommit('write', todo);
      }
    });

    parent.remove();
    event.stopPropagation();
  });
  li.append(deleteButton);


  return li;
}
import listItem from '_src/js/listItem';
import localStorageCommit from '_src/js/localStorageCommit';

function createListItem(event, input) {
  if ((event.code === 'Enter' || event.code === 'NumpadEnter' || event.type ==='click') && input.value !== '') {
    const activeTagNodes = document.querySelectorAll('.panel__li-type_active');
    const activeTags = [];

    activeTagNodes.forEach(item => {
      activeTags.push(item.innerText.toLowerCase());
      item.classList.remove('panel__li-type_active');
    });
    localStorageCommit('write', {name: input.value, tags: activeTags});
    document.querySelector('.list__items').append(listItem({name: input.value, tags: activeTags}));
    input.value = '';
  }
}


export default function interactiveElements() {
  document.querySelector('.panel__li-types').innerHTML = '';
  document.querySelector('.panel__line').innerHTML = '';

  /** =========================
   * Input
    =========================== */
  const input = document.createElement('input');
  input.classList.add('panel__input');
  input.setAttribute('placeholder', 'Enter todo name');
  input.setAttribute('type', 'text');
  input.addEventListener('keydown', event => createListItem(event, input));
  document.querySelector('.panel__line').append(input);

  /** =========================
   * Types
   =========================== */
  const typesList = ['inbox', 'family', 'shopping', 'work', 'personal'];
  typesList.forEach(item => {
    const typeItem = document.createElement('div');
    typeItem.classList.add('panel__li-type', `panel__li-type_${item}`);
    typeItem.append(item);
    typeItem.addEventListener('click', () => {
      if (typeItem.classList.contains('panel__li-type_active')) {
        typeItem.classList.remove('panel__li-type_active');
      } else {
        typeItem.classList.add('panel__li-type_active');
      }
    });
    document.querySelector('.panel__li-types').append(typeItem);
  });

  /** =========================
   * Button
   ** ========================= */
  const button = document.createElement('button');
  button.classList.add('panel__button');
  button.append('Create todo');
  button.addEventListener('click', event => createListItem(event, input));
  document.querySelector('.panel').append(button);
}
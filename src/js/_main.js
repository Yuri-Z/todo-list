import '_src/fonts/icons/style.scss';
import '_src/fonts/roboto.scss';
import '_src/scss/_index.scss';

import localStorageCommit from '_src/js/localStorageCommit';
import list from '_src/js/list';
import interactiveElements from "_src/js/interactiveElements";

const items = [
  { name: 'Start making a presentation', tags: ['inbox', 'shopping'] },
  { name: 'Start making a presentation', tags: [] },
  { name: 'Buy a milk', tags: [] },
  { name: 'Buy a chocolate', tags: [] },
];

if (localStorageCommit('read') === null) {
  localStorageCommit('write', items)
}

interactiveElements();

list(localStorageCommit('read'), document.querySelector('.list__items'));
export default function localStorageCommit(action, payload = []) {
  switch (action) {
    case 'write': {
      let todo = JSON.parse(localStorage.getItem('todo'));
      if (todo === null) {
        todo = [];
      }
      if (Array.isArray(payload)) {
        todo = payload;
      } else {
        todo.push(payload)
      }
      localStorage.setItem('todo', JSON.stringify(todo));

      break;
    }
    case 'read': {
      return JSON.parse(localStorage.getItem('todo'));
    }
  }
}
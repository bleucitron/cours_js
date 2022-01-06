export function createTodos(todos, remove, toggle) {
  const ul = document.createElement('ul');
  ul.classList.add('todos');

  const lis = todos.map((t, i) =>
    createTodo(
      t,
      () => remove(i),
      () => toggle(i),
    ),
  );
  ul.append(...lis);

  return ul;
}

export function createTodo({ label, done }, remove, toggle) {
  const li = document.createElement('li');
  const div = document.createElement('div');
  const button = document.createElement('button');

  li.classList.add('todo');
  if (done) {
    li.classList.add('done');
  }

  div.textContent = label;
  button.textContent = 'Supprimer';

  button.addEventListener('click', e => {
    e.stopPropagation();
    remove();
  });
  li.addEventListener('click', toggle);

  li.append(div, button);

  return li;
}

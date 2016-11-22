function createTodo(id, text) {
  return {
    id,
    text,
    complete: false
  }
}

function toggleTodo(todos, id) {
  return todos.map(t => {
    if (t.id !== id)
      return t;
    return Object.assign({}, t, {
      completed: !t.completed
    })
  })
}

const todos = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        createTodo(action.id, action.text)
      ];
    case 'TOGGLE_TODO':
      return toggleTodo(state, action.id);
    default:
      return state
  }
};

export default todos;
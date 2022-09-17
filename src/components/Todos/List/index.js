import { useEffect } from 'react';

function List({ todos, setTodos, filtered }) {
  useEffect(() => {
    const status = todos.find((todo) => todo.completed === false);
    status ? document.getElementById('toggle-all').checked = false :
      document.getElementById('toggle-all').checked = true;
  }, [todos]);

  const todoStatu = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleAll = () => {
    const newTodos = [...todos];
    const completed = todos.every((todo) => todo.completed);
    newTodos.forEach((todo) => (todo.completed = !completed));
    setTodos(newTodos);
  };

  return (
    <div>
      <input
        id='toggle-all'
        className="toggle-all"
        type="checkbox"
        onClick={toggleAll}
      />
      {
        todos.length > 0 && (
          <label htmlFor="toggle-all">
            Mark all as complete
          </label>
        )
      }
      <ul className="todo-list">
        {
          todos.map((todo, i) => (
            <li
              key={i}
              className={
                (todo.completed ? 'completed' : '') +
                ((filtered === 'active' && todo.completed)
                  || (filtered === 'completed' && !todo.completed) ? ' hidden' : '')
              }
            >
              <div className="view">
                <input
                  id={`todo-${i}`}
                  className="toggle"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => todoStatu(i)}
                />
                <label htmlFor={`todo-${i}`}>
                  {todo.title}
                </label>
                <button
                  className="destroy"
                  onClick={() => deleteTodo(i)}
                />
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default List;
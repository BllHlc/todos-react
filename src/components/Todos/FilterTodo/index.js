import React from 'react';

function FilterTodo({ todos, filter, setFilter, setTodos }) {

  const handleFilter = (e) => {
    setFilter(e.target.name);
  };

  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => todo.completed === false);
    setFilter('all');
    setTodos(newTodos);
  };

  return (
    <div className='footer'>
      <span className="todo-count">
        <strong>{todos.filter((todo) => todo.completed === false).length} </strong>
        items left
      </span>
      <ul className="filters">
        <li>
          <a
            href="#/"
            className={filter === 'all' ? 'selected' : ''}
            onClick={handleFilter}
            name='all'
          >All</a>
        </li>
        <li>
          <a
            href="#/"
            className={filter === 'active' ? 'selected' : ''}
            onClick={handleFilter}
            name='active'
          >Active</a>
        </li>
        <li>
          <a
            href="#/"
            className={filter === 'completed' ? 'selected' : ''}
            onClick={handleFilter}
            name='completed'
          >Completed</a>
        </li>
        <button
          className="clear-completed"
          onClick={clearCompleted}
        >
          Clear completed
        </button>
      </ul>
    </div>
  );
}

export default FilterTodo;
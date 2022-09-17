import { useState, useEffect } from 'react';

function AddTodo({ addTodos, todos }) {
  const [todo, setTodo] = useState({ title: '', completed: false });

  const onSubmit = (e) => {
    let status = true;
    e.preventDefault();
    if (todo.title === "") {
      return false;
    }
    todos.map((item => item.title === todo.title ? status = false : status));
    status ? addTodos([todo, ...todos]) : alert("Todo already exists");
    setTodo({ title: '', completed: false });
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='header'>
      <h1>todos</h1>
      <form onSubmit={onSubmit} >
        <input type='text'
          name='title'
          className='new-todo'
          placeholder='What needs to be done?'
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
      </form>
    </div>
  );
}

export default AddTodo;
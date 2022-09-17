import { useState, } from 'react';
import "./styles.css";
import AddTodo from './AddTodo/index';
import FilterTodo from './FilterTodo/index';
import List from './List/index';

function Todos() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) ||
    [
      { title: 'Learn React', completed: false },
      { title: 'Learn Firebase', completed: true },
      { title: 'Learn GraphQL', completed: false }
    ]
  );
  const [filter, setFilter] = useState('all');

  return (
    <div className="todoapp">
      <AddTodo todos={todos} addTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} filtered={filter} />
      <FilterTodo todos={todos} setTodos={setTodos} filter={filter} setFilter={setFilter} />
    </div>
  );
}

export default Todos;
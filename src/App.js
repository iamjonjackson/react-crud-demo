import React, { useState} from 'react';
import './App.css';
import TodoTable from './tables/TodoTable';
import AddTodoForm from './forms/AddTodoForm';

const App = () => {

  const todoData = [
    { id: 1, title: 'Task 1', description: '' },
    { id: 2, title: 'Task 2', description: '' },
    { id: 3, title: 'Task 3', description: 'more details here' },
  ]

  const [todos, setTodos] = useState(todoData)

  const addTodo = todo => {
    todo.id = todos.length + 1
    setTodos([...todos, todo])
  }

  return (
    <div className="App">
      <h1>React Todo App</h1>
      <div className="row mt-4">
        <div className="col-6">
          <h3>Add Todo</h3>
          <AddTodoForm addTodo={addTodo} />
        </div>
        <div className="col-6">
          <h3>View Todos</h3>
          <TodoTable todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;

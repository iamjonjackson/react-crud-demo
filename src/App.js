import React, { useState} from 'react';
import './App.css';
import TodoTable from './tables/TodoTable';
import AddTodoForm from './forms/AddTodoForm';
import EditTodoForm from './forms/EditTodoForm';

const App = () => {

  const todoData = [
    { id: 1, title: 'Task 1', description: '' },
    { id: 2, title: 'Task 2', description: '' },
    { id: 3, title: 'Task 3', description: 'more details here' },
  ]

  const [todos, setTodos] = useState(todoData)

  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, title: '', description: '' }
  const [currentTodo, setCurrentTodo] = useState(initialFormState)

  const editRow = todo => {
    setEditing(true)
    setCurrentTodo({ id: todo.id, title: todo.title, description: todo.description })
  }

  const updateTodo = (id, updatedTodo) => {
    setEditing(false)
    setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)))
  }

  const addTodo = todo => {
    todo.id = todos.length + 1
    setTodos([...todos, todo])
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <h1>React Todo App</h1>
      <div className="row mt-4">
        <div className="col-6">
          {editing ? (
            <div>
              <h3>Edit Todo</h3>
              <EditTodoForm
                editing={editing}
                setEditing={setEditing}
                currentTodo={currentTodo}
                updateTodo={updateTodo}
              />
            </div>
          ) : (
            <div>
              <h3>Add Todo</h3>
              <AddTodoForm addTodo={addTodo} />
            </div>
          )}
        </div>
        <div className="col-6">
          <h3>View Todos</h3>
          <TodoTable todos={todos} deleteTodo={deleteTodo} editRow={editRow} editing={editing} />
        </div>
      </div>
    </div>
  );
}

export default App;

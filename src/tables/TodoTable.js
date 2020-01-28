import React from 'react'

const TodoTable = props => (
  <table className="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        {props.todos.length > 0 ? (
            props.todos.map(todo => (
                <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>
                    <button onClick={() => props.editRow(todo)} className="m-1 btn btn-primary btn-sm" disabled={props.editing}>Edit</button>
                    <button onClick={() => props.deleteTodo(todo.id)} className="m-1 btn btn-danger btn-sm" disabled={props.editing}>Delete</button>
                </td>
                </tr>
            ))
        ) : (
        <tr>
            <td colSpan={3}>No todos</td>
        </tr>
        )}
    </tbody>
  </table>
)

export default TodoTable
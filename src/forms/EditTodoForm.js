import React, { useState } from 'react'

const EditTodoForm = props => {
  const [todo, setTodo] = useState(props.currentTodo)

  const handleInputChange = event => {
    const { name, value } = event.target
    setTodo({ ...todo, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.updateTodo(todo.id, todo)
  }

  return (
    <form onSubmit={handleSubmit}>
        <input placeholder="Title" className="form-control" type="text" name="title" value={todo.title} onChange={handleInputChange} />
        <input placeholder="Description" className="form-control" type="text" name="description" value={todo.description} onChange={handleInputChange} />
        <button className="btn btn-primary mt-3 form-control">Update Todo</button>
        <button onClick={() => props.setEditing(false)} className="btn btn-secondary mt-3 form-control">Cancel</button>
    </form>
  )
}

export default EditTodoForm
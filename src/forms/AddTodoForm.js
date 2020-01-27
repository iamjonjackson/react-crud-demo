import React, { useState } from 'react'

const AddTodoForm = props => {

    const initialFormState = { id: null, title: '', description: '' }
    const [todo, setTodo] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.target
        console.log(event);
        setTodo({ ...todo, [name]: value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (!todo.title) return
        props.addTodo(todo)
        setTodo(initialFormState)
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <input placeholder="Title" className="form-control" type="text" name="title" value={todo.title} onChange={handleInputChange} />
            <input placeholder="Description" className="form-control" type="text" name="description" value={todo.description} onChange={handleInputChange} />
            <button className="btn btn-primary mt-3 form-control">Add New Todo</button>
        </form>
    )
}

export default AddTodoForm
import React, { useState } from 'react'

const AddTodoForm = props => {

    return (
        <form className="form">
            <input placeholder="Title" className="form-control" type="text" name="title" value="" />
            <input placeholder="Description" className="form-control" type="text" name="description" value="" />
            <button className="btn btn-primary mt-3 form-control">Add New Todo</button>
        </form>
    )
}

export default AddTodoForm
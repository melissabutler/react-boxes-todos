import React, { useState } from "react";
import {v4 as uuid} from "uuid";

const NewTodoForm = ({addTodo}) => {
    const initialState = {
        task: ""
    }

    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({...formData, id: uuid()});
        setFormData(initialState);
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task</label>
            <input 
            id="task" 
            type="text"
            name="task"
            placeholder="Task"
            value={formData.task}
            onChange={handleChange}
            />
            <button> Submit </button>
        </form>
    )
}

export default NewTodoForm;
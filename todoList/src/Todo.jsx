import React, {useState} from "react";

const Todo = ({ id, remove, edit, task }) => {

    const [editTask, setEdit] = useState(task);
    const [isEditting, setIsEditting] = useState(false)

    const toggleEdit = () => {
        setIsEditting(edit => !edit)
    }

    const handleRemove = () => remove(id);

    const handleChange = (e) => {
        e.preventDefault();
        setEdit(e.target.value)
    };

    const handleEdit = (e) => {
        e.preventDefault();
        console.log("clicked")
        edit(id, editTask);
        setIsEditting(false);
    }
    let jsx =  (
        <div>
            <button onClick={handleRemove}>X</button>
            <button onClick={toggleEdit}>Edit</button>
            {task}
            <input type="checkbox"></input>
            
        </div>

    )

    if(isEditting) {
        jsx = (
            <div>
                <form onSubmit={handleEdit}>
                    <input type="text" value={editTask} onChange={handleChange} />
                    <button>Update!</button>
                </form>
            </div>
        )
    }

    return jsx;
}

export default Todo;
import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import {v4 as uuid} from "uuid";
import Todo from "./Todo";

const TodoList = () => {
    const initialState = [
        {id: uuid(), task: "Make todo list"}
    ]

    const [todos, setTodos] = useState(initialState)

    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, {...newTodo, id: uuid()}])
    }

    const removeTodo = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }

    const editTodo = (id, updatedTask) => {
        setTodos(todos => 
            todos.map(todo => 
                todo.id === id ? {...todo, task: updatedTask} : todo
            )
        )
    };

    return (
        <div>
            <h1> To Do List</h1>
            <div>
                {todos.map(todo => <Todo 
                                    id={todo.id} 
                                    key={todo.id} 
                                    task={todo.task} 
                                    remove={removeTodo} 
                                    edit={editTodo}/>)}
            </div> 
            <NewTodoForm addTodo={addTodo}/>
       

        </div>
    )
}

export default TodoList;
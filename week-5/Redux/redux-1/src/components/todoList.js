import React from 'react'
import Todo from './todo'

export default function TodoList (){
    return(
    <div className="todo-list">
        <div className="todo-list-heading">
            <span>ID</span><span>Todo</span>
        </div>
        <Todo />
        <Todo />
    </div>
    )
}
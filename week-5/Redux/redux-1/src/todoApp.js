import React from 'react'
import FormInputTodo from './components/formInputTodo'
import TodoList from './components/todoList'


export default function TodoApp() {
    return (
        <div className="todoApp">
            <h1>Todo Application</h1>
            <FormInputTodo />
            <hr></hr>
            <TodoList />
        </div>
    )
}
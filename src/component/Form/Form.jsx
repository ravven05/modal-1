import React, { useContext } from 'react'
// import { useState } from 'react'
import "../../styles/Todo.css"
import { todoContext } from '../context/FormContext'
import Todo from '../Todo/Todo'


const Form = () => {

  const { inputTextHandler, inputText, submitTodoHandler } = useContext(todoContext)

  return (
    <div>
    <header>
      <h1>Ed's Todo List </h1>
    </header>
    <form>
    <input value={inputText}
     onChange={inputTextHandler}  type="text" className="todo-input" />
    <button onClick={submitTodoHandler} className="todo-button" type="submit">
      <i className="fas fa-plus-square">done</i>
    </button>
  </form>
  <Todo />
  </div>
    )
}

export default Form
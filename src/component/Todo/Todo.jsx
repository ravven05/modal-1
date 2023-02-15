import React, { useContext } from 'react'
import Todos from '../context/Todos'
import "../../styles/Todo.css"
import { todoContext } from '../context/FormContext'


const Todo = () => {

    const { todos } = useContext(todoContext)
    // console.log(todos);


  return (
    <div className="todo-container">
      <ul className="todo-list">
            {todos.map(todo => (
                <Todos todo={todo} key={todo.id} text={todo.text}/>
                ))}
      </ul>
    </div>
    )
}

export default Todo;
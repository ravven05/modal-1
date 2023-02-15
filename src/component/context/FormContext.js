import React, { useState } from 'react'   

export const todoContext = React.createContext();

const FormContext = ({ children }) => {

  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
      e.preventDefault();
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000}
      ])
      setInputText("");
    }

   
    
  return (
          <todoContext.Provider value={{
            inputText,
            todos,

            setTodos,
            setInputText,
            inputTextHandler,
            submitTodoHandler
          }}>
            { children }
          </todoContext.Provider>
    )
}

export default FormContext
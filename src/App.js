import React, { useState } from 'react'
import "./styles/Todo.css"
import Form from './component/Form/Form'
import FormContext from './component/context/FormContext'

const App = () => {
  return (
    <div> 
      <FormContext>
      < Form />
      </FormContext>
    </div>
  )
}

export default App
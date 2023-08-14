import React from 'react'
import InputTask from './components/inputTask/InputTask'
import List from './components/List/List'
import "./App.css";
const App = () => {
  return (
    <div>
    <h1>TODO</h1>
    <InputTask/>
    <List/>
 
    </div>
  )
}

export default App
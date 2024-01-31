import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo_App_title from './Title'
import Todo_input from './Todo_Input'
import "bootstrap/dist/css/bootstrap.min.css"
import Todo_Add_new from './Todo_Add_new'

function App() {
  

  return (
       <center>
        <Todo_App_title/>
        <Todo_Add_new/>
        <Todo_input/>
        
       </center>
  )
}

export default App

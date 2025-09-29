import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TodoList from "./components/TodoList";

function App() {
  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h1>To-Do List</h1>
      <TodoList />
    </div>
  );
}

export default App;
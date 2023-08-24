import React from 'react'
import { TaskList } from './components/TaskList';
import { TaskManager } from './components/TaskManager';
import './App.css'

function App() {
  let temp = new Date();
  temp.setDate(temp.getDate());

  return (
    <div className='App'>
      <TaskManager />
      {/* <TaskList /> */}
    </div>
  )
}

export default App

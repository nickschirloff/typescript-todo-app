import React from 'react'
import { TaskItem } from './components/TaskItem';
import { TaskManager } from './components/TaskManager'; 
import './App.css'

function App() {
  let temp = new Date();
  temp.setDate(temp.getDate());

  return (
    <div className='App'>
      <TaskManager />
      <TaskItem taskID='test-item' taskName={'task1'} completed={false} endDate={temp} />
    </div>
  )
}

export default App

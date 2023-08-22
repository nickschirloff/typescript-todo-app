import React from 'react'
import { TaskItem } from './components/TaskItem';
import './App.css'

function App() {
  return (
    <div className='App'>
      <TaskItem taskName={'task1'} taskDesc='this is a test item' completed={true} daysLeft={1} />
    </div>
  )
}

export default App

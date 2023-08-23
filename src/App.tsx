import React from 'react'
import { TaskItem } from './components/TaskItem';
import { TaskManager } from './components/TaskManager'; 
import ITask from './interfaces/ITask';
import './App.css'

function App() {
  let tasks: ITask[];

  const addTask = (): void => {

  }

  return (
    <div className='App'>
      <TaskManager />
      <TaskItem taskName={'task1'} completed={false} daysLeft={1} />
    </div>
  )
}

export default App

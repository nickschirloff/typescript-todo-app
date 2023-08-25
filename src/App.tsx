import React, { useState } from 'react'
import { TaskList } from './components/TaskList';
import { TaskManager } from './components/TaskManager';
import { ITask } from './interfaces/ITask';
import './App.css'

function App() {
  let [taskList, setTaskList] = useState<ITask[]>([]);
  return (
    <div className='App'>
      <TaskManager taskList={taskList} setTaskList={setTaskList} />
      {/* <TaskList taskList={taskList} setTaskList={setTaskList}/> */}
    </div>
  )
}

export default App

import { useState } from 'react'
import { TaskList } from './components/TaskList';
import { TaskManager } from './components/TaskManager';
import { ITask } from './interfaces/ITask';
import './App.css'

function App() {
  /*   
  *   The main hook that keeps track of the list of tasks, and the addition and removal of tasks
  *   Initially reads tasks saved in local storage, or generates an empty array if none are found
  */
  let [taskList, setTaskList] = useState<ITask[]>(JSON.parse(localStorage.getItem('TASK_ITEM_LIST') || '[]'));

  const clearLocal = (): void => {
    localStorage.clear();
    setTaskList([]);
  }

  return (
    <div className='App'>
      <div className='header-bg'></div>
      <div className='list-bg'></div>
      <div className='header'>
        <div className='h-left' onClick={() => window.open('https://github.com/nickschirloff/typescript-todo-app')}>
          nickschirloff
        </div>
        <div className='h-right' onClick={clearLocal}>
          Clear All Tasks
        </div>
      </div>
      <div className='title'>
        <h1>To-Do List</h1>
      </div>
      <TaskManager taskList={taskList} setTaskList={setTaskList} />
      <TaskList taskList={taskList} setTaskList={setTaskList} />
    </div>
  )
}

export default App

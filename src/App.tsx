import { useState } from 'react'
import { TaskList } from './components/TaskList';
import { TaskManager } from './components/TaskManager';
import { ITask } from './interfaces/ITask';
import './App.css'

// TODO:
// - Prevent adding a task with a blank name
// - Documentation

function App() {
  let [taskList, setTaskList] = useState<ITask[]>([]);

  const saveToLocal = (tasks: ITask[]): void => {
    if(tasks.length != 0) {
      localStorage.setItem('TASK_ITEM_LIST', JSON.stringify(taskList));
    }
  }

  const readFromLocal = (): void => {
    const readJSON = JSON.parse(localStorage.getItem('TASK_ITEM_LIST') || '{}');
    setTaskList(readJSON);
  }

  const clearLocal = (): void => {
    localStorage.clear();
    setTaskList([]);
  }

  return (
    <div className='App'>
      <div className='header-bg'></div>
      <div className='list-bg'></div>
      <div className='header'>
        <div className='header-l'>
          <button onClick={() => saveToLocal(taskList)}>Save</button>
          <button onClick={readFromLocal}>Load</button>
        </div>
        <div className='header-r'>
          <button onClick={clearLocal}>Clear</button>
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

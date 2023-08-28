import { useState } from 'react'
import { TaskList } from './components/TaskList';
import { TaskManager } from './components/TaskManager';
import { ITask } from './interfaces/ITask';
import './App.css'

// TODO:
// - Prevent adding a task with a blank name
// - Scrollable if tasks overflow screen

function App() {
  let [taskList, setTaskList] = useState<ITask[]>([]);

  const saveToLocal = (tasks: ITask[]): void => {
    if(tasks.length != 0) {
      const saveJSON = JSON.stringify(taskList);
      localStorage.setItem('TASK_LIST_LOCAL', saveJSON);
    }
  }

  const readFromLocal = (): void => {
    const readJSON = localStorage.getItem('TASK_LIST_LOCAL');
    const list = {};
    console.log('Read: ' + readJSON);
  }

  const clearLocal = (): void => {
    localStorage.clear();
    setTaskList([]);
    console.log(localStorage.getItem('TASK_ITEM_LIST'));
  }

  return (
    <div className='App'>
      <div className='header'>
        <div className='header-l'>
          <button onClick={() => saveToLocal(taskList)}>Save</button>
          <button onClick={readFromLocal}>Load</button>
        </div>
        <div className='header-r'>
          <button onClick={clearLocal}>Clear</button>
        </div>

      </div>
      <TaskManager taskList={taskList} setTaskList={setTaskList} />
      <TaskList taskList={taskList} setTaskList={setTaskList} />
    </div>
  )
}

export default App

import React, { useState } from 'react'
import { TaskList } from './components/TaskList';
import { TaskManager } from './components/TaskManager';
import { TaskItem } from './components/TaskItem';
import { isIDUnique } from './models/TILib';
import { ITask } from './interfaces/ITask';
import './App.css'

function App() {
  let [taskList, setTaskList] = useState<ITask[]>([]);
  let [taskID, setTaskID] = useState<string>('0');

  const addItem = () => {
    console.log(isIDUnique(taskID, taskList));
    setTaskList([...taskList, temp]);
  }

  const saveToLocal = (tasks: ITask[]): void => {
    if(tasks.length != 0) {
      const saveJSON = JSON.stringify(taskList);
      localStorage.setItem('TASK_LIST_LOCAL', saveJSON);
    }
  }

  const readFromLocal = (): void => {
    const readJSON = localStorage.getItem('TASK_LIST_LOCAL');
    console.log(readJSON);
  }

  const clearLocal = (): void => {
    setTaskID("");
    localStorage.clear();
    setTaskList([]);
    console.log(localStorage.getItem('TASK_ITEM_LIST'));
  }

  let temp = {
    taskID: taskID.toString(),
    taskName: 'test-item-desc',
    isCompleted: false,
    endDate: new Date()
  }



  return (
    <div className='App'>
      <button onClick={addItem}>X</button>
      <div>
        <div>
          {taskList.map((task: ITask) => {
            return `${task.taskID}, ${task.taskName}, ${task.isCompleted}, ${task.endDate}`
          })}
        </div>
          <button onClick={() => saveToLocal(taskList)}>Save</button>
          <button onClick={readFromLocal}>Read</button>
      </div>
      <div>
        <button onClick={clearLocal}>Clear</button>
      </div>
      <TaskManager taskList={taskList} setTaskList={setTaskList} />
      <TaskList taskList={taskList} setTaskList={setTaskList} />
    </div>
  )
}

export default App

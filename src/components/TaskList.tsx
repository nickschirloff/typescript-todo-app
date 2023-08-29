import { Dispatch, FC, SetStateAction } from 'react';
import { ITask } from '../interfaces/ITask';
import { TaskItem } from './TaskItem';
import '../styles/TaskList.scss';

type TLProps ={
  /* The list of tasks to render */
  taskList: ITask[],
  /* Function to re-render when tasks are removed */
  setTaskList: Dispatch<SetStateAction<ITask[]>>
}

/*
*   The component that manages the display of all current tasks.
*/
export const TaskList: FC<TLProps> = ({ taskList, setTaskList }) => {

  const removeTask = (removedTaskID: string):void => {
    setTaskList(taskList.filter((task) => {
      return task.taskID !== removedTaskID;
    }));
  }

  return(
    <div className='task-list'>
      {taskList.map(((task: ITask, key:number) => {
        return <TaskItem task={task} key={key} removeTask={removeTask} />;
      }))
      }
    </div>
  )
}
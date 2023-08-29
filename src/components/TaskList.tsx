import { Dispatch, FC, SetStateAction } from 'react';
import { ITask } from '../interfaces/ITask';
import { TaskItem } from './TaskItem';
import '../styles/TaskList.scss';

type TLProps ={
  taskList: ITask[],
  setTaskList: Dispatch<SetStateAction<ITask[]>>
}

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
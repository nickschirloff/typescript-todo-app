import React, { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { ITask } from '../interfaces/ITask';
import { TaskItem } from './TaskItem';

type Props = {
    taskList: ITask[],
    setTaskList: Dispatch<SetStateAction<ITask[]>>;
}

export const TaskList = ({taskList, setTaskList}: Props) => {

  const removeTask = (removedTaskID: string): void => {
    setTaskList(taskList.filter((task) => {
      return task.taskID !== removedTaskID;
    }))
  }

  return (
    <div className='task-list-wrapper'>
      {taskList.map((task: ITask) => {
        return <TaskItem taskID={task.taskID} taskName={task.taskName} completed={task.isCompleted} endDate={task.endDate} removeTask={removeTask} />
      })}
    </div>
    );
}
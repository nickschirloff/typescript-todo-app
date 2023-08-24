import React, { FC } from 'react';
import { ITask } from '../interfaces/ITask';
import { TaskItem } from './TaskItem';

type Props = {
    taskList: ITask[],
    completeTask(taskCompleted: string): void
}

export const TaskList = ({taskList, completeTask}: Props) => {
    
    return (
        <div className='task-list-wrapper'>
          {taskList.map((task: ITask) => {
            return <TaskItem taskID={task.taskID} taskName={task.taskName} completed={task.isCompleted} endDate={task.endDate} />
          })}
        </div>
    );
}
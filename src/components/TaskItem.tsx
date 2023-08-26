import React, { FC, useState } from 'react';
import { ITask } from '../interfaces/ITask';
import '../styles/TaskItem.scss';

type TaskItemProps = {
    task: ITask,
    removeTask(removedTaskID: string): void
}

export const TaskItem: FC<TaskItemProps> = ({task, removeTask}) => {

    const [isCompleted, setIsCompleted] = useState<boolean>(task.isCompleted);

    const getDaysLeft = (date: Date):string => {
        const currDate = new Date();
        let difference = Math.ceil((date.getTime() - currDate.getTime()) / (1000 * 3600 * 24));
        if (difference < 0) {
            return `Past due by ${Math.abs(difference)} days!`;
        } else {
            return `${difference} days remaining.`
        }
    }

    return (
        <div className='task-item'>
          <div className={`task-item-wrapper${isCompleted? '-completed' : ''}`}>
            <span>{task.taskName}</span>
            <span>{getDaysLeft(task.endDate)}</span>
            <input type='checkbox' onChange={() => setIsCompleted(!isCompleted)} />
            <button onClick={() => removeTask(task.taskID)}>X</button>
          </div>
        </div>
    )
}
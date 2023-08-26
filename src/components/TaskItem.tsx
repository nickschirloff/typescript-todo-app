import React, { FC, useState } from 'react';
import { ITask } from '../interfaces/ITask';

type TaskItemProps = {
    task: ITask,
    removeTask(removedTaskID: string): void
}

export const TaskItem: FC<TaskItemProps> = ({task, removeTask}) => {

    const [isCompleted, setIsCompleted] = useState<boolean>(task.isCompleted);

    const getDaysLeft = (date: Date):string => {
        const currDate = new Date();
        let difference = currDate.getTime() - task.endDate.getTime();
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
            <input type='checkbox' onChange={() => setIsCompleted(true)} />
            <button onClick={() => removeTask(task.taskID)}>X</button>
          </div>
        </div>
    )
} 
    // return (
    //   <div className={`task-item${isComplete ? '-completed' : ''}`}>
    //     <span>{taskName}</span>        
    //     <input type='checkbox' onChange={handleCompletion} />
    //     <span className={`deadline-span${(getDaysLeft() <= 1 && !isComplete) ? '-near' : ''}`}>{getDaysLeft()} day(s) remaining</span>
    //     <button>X</button>
    //   </div>
    // );
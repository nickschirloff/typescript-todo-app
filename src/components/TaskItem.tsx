import { FC, useState } from 'react';
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
        // The 'date' parameter does not convert to a Date class properly when loading saved tasks
        // Therefore, we have to do some conversions when getting the days left for a task
        const tempDate = new Date(date);
        let difference = Math.ceil((tempDate.getTime() - currDate.getTime()) / (1000 * 3600 * 24));
        if (difference < 0) {
            return `Past due by ${Math.abs(difference)} day(s)!`;
        } else {
            return `${difference} days remaining.`
        }
    }

    return (
        <div className='task-item'>
          <div className={`task-item-wrapper${isCompleted? '-completed' : ''}`}>
            <span className='task-span'>{task.taskName}</span>
            <span className='date-span'>{getDaysLeft(task.endDate)}</span>
            <input type='checkbox' onChange={() => setIsCompleted(!isCompleted)} />
            <button onClick={() => removeTask(task.taskID)}>X</button>
          </div>
        </div>
    )
}
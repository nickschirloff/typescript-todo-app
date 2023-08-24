import React, { FC, useState } from 'react';

type TaskItemProps = {
    taskID: string,
    taskName: string,
    completed: boolean,
    endDate: Date
}

export const TaskItem: FC<TaskItemProps> = ({ taskID, taskName, completed, endDate }) => {
    const [isComplete, setIsComplete] = useState<boolean>(completed);
    const handleCompletion = () => {
        setIsComplete(!isComplete);
    };

    const getDaysLeft = (): number => {
      const currDate = new Date();
      let difference = Math.abs(currDate.getTime() - endDate.getTime());
      difference = Math.ceil((difference / (1000 * 3600 * 24)));
      if(difference < 0) {
        return 0;
      } else {
        return difference;
      }
    };

    return (
      <div className={`task-item${isComplete ? '-completed' : ''}`}>
        <span>{taskName}</span>        
        <input type='checkbox' onChange={handleCompletion} />
        <span className={`deadline-span${(getDaysLeft() <= 1 && !isComplete) ? '-near' : ''}`}>{getDaysLeft()} day(s) remaining</span>
        <button>X</button>
      </div>
    );
} 
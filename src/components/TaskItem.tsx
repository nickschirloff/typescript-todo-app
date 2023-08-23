import React, { FC, useState } from 'react';

type TaskItemProps = {
    taskName: string,
    completed: boolean,
    daysLeft: number
}

export const TaskItem: FC<TaskItemProps> = ({ taskName, completed, daysLeft }) => {
    const [isComplete, setIsComplete] = useState<boolean>(completed);
    const handleCompletion = () => {
        setIsComplete(!isComplete);
    };

    return (
      <div className='task-item'>
        <span>{taskName}</span>        
        <input type='checkbox' onChange={handleCompletion} />
        <span>{daysLeft} day(s) remaining</span>
      </div>
    );
    

} 
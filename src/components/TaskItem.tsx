import React, { FC, useState } from 'react';

type TaskItemProps = {
    taskName: string,
    taskDesc: string,
    completed: boolean,
    daysLeft: number
}

export const TaskItem: FC<TaskItemProps> = ({ taskName, taskDesc, completed, daysLeft }) => {
    const [isComplete, setIsComplete] = useState<boolean>(completed);
    
    const handleCompletion = () => {
        setIsComplete(!isComplete);
        console.log(isComplete);
    };
    return (
        <div className='task-item'>
        <span>{taskName}</span>        
        <span>{taskDesc}</span>
        <input type='checkbox' onChange={handleCompletion} />
        <span>{daysLeft} days remaining</span>
      </div>
    );
    

} 
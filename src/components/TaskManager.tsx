import React, { ChangeEvent, FC, useState } from 'react';
import { genTaskID } from '../models/TILib';
export const TaskManager: FC = () => {

    const [taskID, setTaskID] = useState<string>("");
    const [taskName, setTaskName] = useState<string>("");
    const [isComplete, setIsComplete] = useState<boolean>(false);
    const [deadline, setDeadline] = useState<number>(0);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if(event.target.name === "task") {
            setTaskName(event.target.value);
        } else {
            setDeadline(Number(event.target.value));
        }
    }

    const addTask = (): void => {
        setTaskID(genTaskID());
        let endDate = new Date();
        endDate.setDate(endDate.getDate() + deadline);
        const newTask = { taskID: taskID, taskName: taskName, isComplete: isComplete, startDate: new Date(), endDate: endDate};
        console.log("Deadline: " + deadline);
        console.log("Ends on " + endDate);
    }

    return (
      <div>
        <input type='text' placeholder='Task Name' />
        <input type='number' placeholder='Days to complete' min={0} name='deadline' value={deadline} onChange={handleChange} />
        <input type='checkbox' />
        <button onClick={addTask}>Add</button>
      </div>
    );
};
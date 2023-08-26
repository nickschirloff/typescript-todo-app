import React, { ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { genTaskID, isIDUnique } from '../models/TILib';
import { ITask } from '../interfaces/ITask';


interface TMProps {
    taskList: ITask[],
    setTaskList: Dispatch<SetStateAction<ITask[]>>
}

export const TaskManager: FC<TMProps> = ({taskList, setTaskList}) => {
    const [taskName, setTaskName] = useState<string>("");
    const [deadline, setDeadline] = useState<number>(0);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if(event.target.name === "task") {
            setTaskName(event.target.value);
        } else {
            setDeadline(Number(event.target.value));
        }
    }

    const addTask = (): void => {
        // Generate unique id for task
        let id = genTaskID();
        console.log('Name: ' + taskName);
        while(!isIDUnique(id,taskList)) {
            id = genTaskID();
        }

        let endDate = new Date();
        endDate.setDate(endDate.getDate() + deadline);
        const taskToAdd = {taskID: id, taskName: taskName, isCompleted: false, endDate: endDate};
        setTaskList([...taskList, taskToAdd]);
        // Reseting values
        setTaskName("");
        setDeadline(0);
    }

    return(
        <div className='task-manager'>
            <input placeholder='Task Name' type='text' name='task' value={taskName} onChange={handleChange} />
            <input placeholder='Deadline (in days)' type='number' min={0} name='deadline' onChange={handleChange} />
            <button onClick={addTask}>Add</button>
        </div>
    );
};
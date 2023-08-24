import React, { ChangeEvent, FC, useState } from 'react';
import { genTaskID } from '../models/TILib';
import { ITask } from '../interfaces/ITask';


export const TaskManager: FC = () => {

    const [taskID, setTaskID] = useState<string>("");
    const [taskName, setTaskName] = useState<string>("");
    const [deadline, setDeadline] = useState<number>(0);
    const [todoList, setTodoList] = useState<ITask[]>([]);

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
        const newTask = { taskID: taskID, taskName: taskName, isCompleted: false, endDate: endDate};
        setTodoList([...todoList, newTask]);
        
        // Clearing values
        setTaskName("");
        setDeadline(0);
    }

    const removeTask = (taskToBeRemovedKey: string): void => {
        setTodoList(todoList.filter((task) => {
            return task.taskID !== taskToBeRemovedKey;
        }))
    };


    return (
      <div>
        <input type='text' placeholder='Task Name' />
        <input type='number' placeholder='Days to complete' min={0} name='deadline' value={deadline} onChange={handleChange} />
        <button onClick={addTask}>Add</button>
      </div>
    );
};
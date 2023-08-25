import React, { ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { genTaskID } from '../models/TILib';
import { ITask } from '../interfaces/ITask';

interface TMProps {
    taskList: ITask[];
    setTaskList: Dispatch<SetStateAction<ITask[]>>;
};

export const TaskManager: FC<TMProps> = ({taskList, setTaskList}) => {

    const [taskID, setTaskID] = useState<string>("");
    const [taskName, setTaskName] = useState<string>("");
    const [deadline, setDeadline] = useState<number>(0);
    const [todoList, setTodoList] = useState<ITask[]>([]);

    // const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    //     useEffect(() => {
    //         if(event.target.name === "task") {
    //             setTaskName(event.target.value);
    //         } else {
    //             setDeadline(Number(event.target.value));
    //         }
    //     })   
    // }

    const addTask = (): void => {
        setTaskID(genTaskID());
        let endDate = new Date();
        endDate.setDate(endDate.getDate() + deadline);
        const newTask = { taskID: taskID, taskName: taskName, isCompleted: false, endDate: endDate};
        setTaskList([...taskList, newTask]);
        
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
        <input type='number' placeholder='Days to complete' min={0} name='deadline' value={deadline}  />
        <button onClick={addTask}>Add</button>
      </div>
    );
};
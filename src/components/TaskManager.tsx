import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react';
import { genTaskID, isIDUnique } from '../models/TILib';
import { ITask } from '../interfaces/ITask';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import '../styles/TaskManager.scss';

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
        if(taskName.trim().length === 0) {
            
        }
        // Generate unique id for task
        let id = genTaskID();
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
            <input placeholder='Deadline (in days)' type='number'  name='deadline' min={0} onChange={handleChange} value={deadline} />
            <button onClick={addTask}>Add Task</button>
        </div>
    );
};
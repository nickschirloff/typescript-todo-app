import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react';
import { genTaskID, isIDUnique } from '../models/TILib';
import { ITask } from '../interfaces/ITask';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import '../styles/TaskManager.scss';

interface TMProps {
    /* The list of tasks to add to */
    taskList: ITask[],
    /* Function to re-render when tasks are added */
    setTaskList: Dispatch<SetStateAction<ITask[]>>
}

/*
*   The component that manages the creation of new tasks. Contains two hooks that keep track of the
*   name of new tasks, and their respective deadlines
*/
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

    /*
    *   addTask: Adding a task to taskList. Returns true if successful in addition, or false otherwise
    */
    const addTask = (): boolean => {
       if(taskName.trim().length === 0 ){
         toast.error("Task needs a name!");
         return false;
       }
        
        // Generate unique id for task
        let id = genTaskID();
        while(!isIDUnique(id,taskList)) {
            id = genTaskID();
        }

        // Get the amount of days left before the deadline
        let endDate = new Date();
        endDate.setDate(endDate.getDate() + deadline);
        const taskToAdd = {taskID: id, taskName: taskName, isCompleted: false, endDate: endDate};
        localStorage.setItem('TASK_ITEM_LIST', JSON.stringify([...taskList, taskToAdd]));
        setTaskList([...taskList, taskToAdd]);
        // Resetting values
        setTaskName("");
        setDeadline(0);
        return true;
    }

    return(
        <div className='task-manager'>
            <input placeholder='Task Name' type='text' name='task' value={taskName} onChange={handleChange} />
            <input placeholder='Deadline (in days)' type='number'  name='deadline' min={0} onChange={handleChange} />
            <button onClick={addTask}>Add Task</button>
            <ToastContainer 
              position='bottom-right'
              hideProgressBar={true}
              theme='dark'
              closeOnClick={true}
            />
        </div>
    );
};
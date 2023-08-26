import { ITask } from "../interfaces/ITask";

export function calcDate(date1: Date, date2: Date): number {
    return Math.ceil(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24);
}

export function isIDUnique(id: string, arr: ITask[]): boolean {
    return !arr.some(tk => tk.taskID == id);
}

export function genTaskID(): string {
    let key: string = "";
    let characters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let length: number = 12;
    for(let i = 0; i < length; i++) 
    {
        key += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    console.log("KEY: " + key);
    return key;
}


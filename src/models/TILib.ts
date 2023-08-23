
function calcDate(date1: Date, date2: Date): number {
    return Math.ceil(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24);
}

export function genTaskID(): string {
    let key: string = "";
    let characters: string = "";
    let length: number = 12;
    for(let i = 0; i < length; i++) 
    {
        key += characters.charAt(Math.floor(Math.random() * length));
    }
    return key;
}


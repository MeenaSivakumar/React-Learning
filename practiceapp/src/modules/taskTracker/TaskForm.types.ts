export type TaskType={
    id:number;
    title:string;
    status:string;
}

export interface TaskListProps{
    taskList:TaskType[];
}
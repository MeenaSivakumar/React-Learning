
export type CardType={
id?:number;
title:string;
status:string;
onClick:()=>void;
}

export interface CardProps{
    taskData:CardType[];
}


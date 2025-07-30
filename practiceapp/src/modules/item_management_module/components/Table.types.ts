export interface TableProps{
   users:User[];
}

export interface User{ 
    email:string;
    name:string;
    phone: string,
    city: string,
    company: string,
    Salary: number,
    id: string,
}
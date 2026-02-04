export interface ButtonProps{
    onClick : (e:React.MouseEvent<HTMLButtonElement>)=>void;
    label:string;
    bgColor:string;
    name:string;
}
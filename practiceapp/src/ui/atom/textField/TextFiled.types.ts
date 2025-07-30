import { HTMLInputTypeAttribute } from "react";

export interface TextFieldProps{
    label:string;
    value:string;
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    type:HTMLInputTypeAttribute;
}
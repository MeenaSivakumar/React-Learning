import { HtmlHTMLAttributes, ReactElement, ReactHTMLElement } from "react";

type InputFieldProps={
   value:string;
   type:React.HTMLInputTypeAttribute;
   placeHolder:string;
   name:string;
   onChange:(e:any)=>void;
}
export const InputField = ({value,onChange,type,placeHolder,name}:InputFieldProps)=>{
    
    return(
        <input placeholder={placeHolder} className="border-2 "  value={value} onChange={onChange} type={type} name={name}/>
    )
}
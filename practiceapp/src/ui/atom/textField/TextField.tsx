import { TextFieldProps } from "./TextFiled.types";

export const TextField = ({ ...props }: TextFieldProps) => {
  return (
    <div
      style={{  padding: 12, gap: 12 }}
    >
      <label >{props.label}</label>
      <div>
            <input style={{height: 28, width: 200, borderRadius: 8,borderColor:'lightgray'}} value={props.value} onChange={props.onChange} type={props.type} />
      </div>
     
    </div>
  );
};

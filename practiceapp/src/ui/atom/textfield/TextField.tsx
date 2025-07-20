import { TextFiledProps } from "./TextField.types";

export const TextField = ({...props }: TextFiledProps) => {
  return (
    <div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

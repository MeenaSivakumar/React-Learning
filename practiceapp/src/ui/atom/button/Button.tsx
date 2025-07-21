import { ButtonProps } from "./Button.types";

export const Button = ({ ...props}: ButtonProps) => {
  return (
    <div>
      <button onClick={props.onClick} style={{ backgroundColor: props.bgColor }}>
        {props.label}
      </button>
    </div>
  );
};

import { ButtonProps } from "./Button.types";

export const Button = ({ ...props }: ButtonProps) => {
  return (
    <div>
      <button
        style={{
          backgroundColor: props.bgColor,
          borderRadius: 12,
          height: 32,
          width: 80,
          borderColor:'white',
          borderBottomColor:'white'
        }}
        onClick={props.onClick}
      >
        {props.label}
      </button>
    </div>
  );
};

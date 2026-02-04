import { ButtonProps } from "./Button.types";

export const Button = ({ ...props }: ButtonProps) => {
  return (
    <button
      className={`${props.bgColor}  text-${
        props.bgColor === "bg-white" ? "black" : "white"
      } border-2 rounded-full h-6 w-24 border-pink-400 text-xs font-medium `}
      onClick={props.onClick}
      id="button"
      name={props.name}
    >
      {props.label}
    </button>
  );
};

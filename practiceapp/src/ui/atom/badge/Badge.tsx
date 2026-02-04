import { BadgeProps, colorVariants } from "./Badge.types";

export const Badge = ({ ...props }: BadgeProps) => {
  const { bg, text, border } = colorVariants[props.varient];
  return (
    <div>
      <span
        className={` rounded-full  w-20  border-2 ${bg} ${border} ${text} text-xs font-medium text-center ml-2 mb-1 `}
      >
        {props.label}
      </span>
    </div>
  );
};

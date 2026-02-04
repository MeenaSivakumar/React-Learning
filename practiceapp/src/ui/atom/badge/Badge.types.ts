export interface BadgeProps{
    label:string;
    varient:keyof typeof colorVariants;
}


export const colorVariants = {
  pending: {
    bg: "bg-yellow-100",
    text: "text-yellow-700",
    border: "border-yellow-400",
  },
  completed: {
    bg: "bg-green-100",
    text: "text-green-700",
    border: "border-green-400",
  },
};
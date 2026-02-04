import { useState } from "react";
import { Badge } from "../../ui/atom/badge/Badge";
import { CardProps, CardType } from "./CardProps.types";

export const TaskCard = ({ onClick,...props }: CardType) => {
  const isCompleted = props.status === "completed";
  const handleClick = ()=>{
   onClick()
  }
  return (
    <div className="flex flex-row justify-between items-center w-60 h-12 border-2  border-yellow-300 px-2  ">
      <div>
        <div className="rounded-full h-2 w-2 border-2 border-black bg-transparent " typeof="button" onClick={handleClick} />
      </div>

      <h2 className={`text-sm font-normal text-center break-words ${isCompleted?'line-through':'none'}`}>{props.title}</h2>
      <div  className="mb-5">
        {props.status &&
          <Badge
            label={isCompleted? "completed" : "pending"}
            varient={isCompleted? "completed" : "pending"}
          />
         }
      </div>
    </div>
  );
};

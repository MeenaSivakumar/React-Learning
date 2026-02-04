import { useState } from "react";

type task = {
  taskName: string[];
};
export const TaskCard = ({ taskName }: task) => {
  const [textColor, setTextColor] = useState("");
  const[isCompleted,setIsCompleted] = useState(false);

  const handleClick = (e: any,index:any) => {
    const { name } = e.target;
    const color = name === "complete" ? "green" : "red";
    console.log(taskName)
      taskName.filter((t,)=>  t !== taskName[index] ?'':( setIsCompleted(true),setTextColor(color) ,console.log(t,taskName[index])));
    // console.log(isComplete);
    
    // setIsCompleted(true);

  };
  return (
    <div>
      <div>
        {taskName?.map((task, index) => (
          <div key={index} >
            <ul>
              {task && (
                <>
                  <li style={{color:isCompleted ? textColor:'grey',textDecoration:textColor === "green"?'line-through':''}}>{task}</li>
                  <button name="complete" onClick={(e) => handleClick(e,index)}>
                    Complete
                  </button>
                  <button name="delete" onClick={(e) => handleClick(e,index)}>
                    Delete
                  </button>
                </>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

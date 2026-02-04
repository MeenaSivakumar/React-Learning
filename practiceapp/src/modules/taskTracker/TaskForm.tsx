import { useState } from "react";
import { TaskListProps, TaskType } from "./TaskForm.types";
import { TaskCard } from "./TaskCard";
import { time } from "console";
interface FormProps{
  onFormOpen:(isOpen:boolean)=>void;
  onSubmit:(data:TaskType[])=>void;
}


export const TaskForm = ({onFormOpen,onSubmit}:FormProps) => {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("");
  //    const[taskObj,setTaskObj] = useState<FormProps | null>({task:'',status:''});
  const [taskList, setTaskList] = useState<TaskType[]>([
   
  ]);
//   const [count, setCount] = useState(1);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (task.trim() === "" || task.length <= 3) {
    alert("enter valid task name");
    return;
  }
 
// setCount((prev) => prev + 1);
  const newTask: TaskType = {
    id: Date.now(),
    title: task,
    status,
  };

  


  const updatedList = [newTask, ...taskList];
  setTaskList(updatedList);


  onSubmit(updatedList);
 
 

  onFormOpen(false);
   
};


  return (
    <div >
      <form className="flex flex-col gap-10 border-4 border-purple-300 rounded-md px-4 py-4 justify-center items-center " onSubmit={(e) => handleSubmit(e)}>
        <input
          value={task}
          type="text"
          id="task"
          name="task"
          onChange={(e) => handleInput(e)}
          maxLength={50}
          placeholder="Enter your Task"
          className="border-2 border-yellow-400 rounded-lg"
        />
        <select  className="border-2 border-yellow-400 rounded-lg" value={status} onChange={(e) => handleStatus(e)}>
          <option value="select">select</option>
          <option value="pending">pending</option>
          <option value="completed">completed</option>
        </select>
        <button  className="border-2 border-yellow-400 rounded-lg h-8 w-16 bg-yellow-100" type="submit">add</button>
      </form>
    </div>
  );
};

import { useEffect, useState } from "react";
import { Tab } from "./Tab";
import { TaskForm } from "./TaskForm";
import { TaskType } from "./TaskForm.types";
import { TaskCard } from "./TaskCard";

export const TaskScreen = ({}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [taskList, setTaskList] = useState<TaskType[]>([]);
  const [isActive, setIsActive] = useState(false);
  const [tabName, setIsTabName] = useState("All");

  const handleAddTask = () => {
    setIsFormOpen(true);
  };
  const handleOnSubmit = (updatedList: TaskType[]) => {
    setTaskList((prev) => [...prev, ...updatedList]);
    setIsFormOpen(false);
  };

  const displayData = taskList.filter((t) =>
    t.status === "completed" ? t : null
  );
  const pendingData = taskList.filter((t) =>
    t.status === "pending" ? t : null
  );
  const handleTabSwitch = (isActive: boolean, name: string) => {
    setIsActive(isActive);
    setIsTabName(name);
  };

  const handleClick =(index:number)=>{
      setTaskList(taskList.map((t)=>t.id === index ? {...t,status:"completed"}:t));
  }
  return (
    <div>
      {isFormOpen ? (
        <TaskForm onSubmit={handleOnSubmit} onFormOpen={setIsFormOpen} />
      ) : (
        <>
          <div className="flex gap-10">
            <div>
              <button
                onClick={handleAddTask}
                className="text-xs text-white font-normal h-6 w-20 border-2 border-purple-600 rounded-full bg-purple-500"
              >
                add Task
              </button>
            </div>
            <div className="flex flex-col w-full gap-10 justify-center items-center  ">
              <Tab onTabClick={handleTabSwitch} />

              { tabName === "All"
                ? taskList.length !== 0 ?
                  taskList?.map((task) => (
                    <div key={task.id}>
                      <TaskCard onClick={()=>handleClick(task.id)} title={task.title} status={task.status} />
                    </div>
                  )):<div>No tasks to show</div>
                : tabName === "completed" 
                ? displayData.length !==0 ? displayData.map((t) => (
                    <div key={t.id}>
                      <TaskCard onClick={()=>handleClick(t.id)} title={t.title} status={t.status} />
                    </div>
                  )):<div>No Completed tasks </div>
                : pendingData.length !==0 ? pendingData.map((t) => (
                    <div key={t.id}>
                      <TaskCard onClick={()=>handleClick(t.id)} title={t.title} status={t.status} />
                    </div>
                  )):<div>No Pending tasks </div>}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

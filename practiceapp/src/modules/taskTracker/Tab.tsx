import { useState } from "react";
import { Button } from "../../ui/atom/button";
import { TaskType } from "./TaskForm.types";

export interface TabProps {
  onTabClick: (isActive: boolean, name: string) => void;
}
export const Tab = ({ onTabClick }: TabProps) => {
  const [isAllActive, setIsAllActive] = useState(true);
  const [isCompletedActive, setIsCompletedActive] = useState(false);
  const [isPendingActive, setIsPendingActive] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsAllActive(true);
    onTabClick(isAllActive, "All");
      console.log("All clicked")
      setIsCompletedActive(false);
      setIsPendingActive(false);
  };
  const handleCompleted = () => {
    setIsAllActive(false);
    setIsCompletedActive(true);
    setIsPendingActive(false);
    onTabClick(isCompletedActive, "completed");
    console.log("completed clicked")
  };

  const handlePending = () => {
    setIsAllActive(false);
    setIsCompletedActive(false);
    setIsPendingActive(true);
    onTabClick(isPendingActive, "pending");
    console.log("pending clicked")
  };

  return (
    <>
      <div className="rounded-lg border-2 border-yellow-200 flex bg-yellow-200 gap-2 px-2 py-2  w-64  ">
        <Button
          onClick={handleClick}
          bgColor={`${isAllActive ?'bg-white':'bg-gray-500'}`}
          label="All"
          name="All"
        />
        <Button
          onClick={handleCompleted}
          bgColor={`${isCompletedActive ?'bg-white':'bg-gray-500'}`}
          label="completed"
          name="completed"
        />
        <Button
          onClick={handlePending}
          bgColor={`${isPendingActive ?'bg-white':'bg-gray-500'}`}
          label="Pending"
          name="Pending"
        />
      </div>
    </>
  );
};

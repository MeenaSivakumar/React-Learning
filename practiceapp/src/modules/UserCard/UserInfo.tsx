import { useState } from "react";
import { UserForm, UserProps } from "./UserForm";

export const UserInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const[userInfo,setUserInfo] = useState<UserProps | null>();
  const handleClick = () => {
    setIsFormOpen(true);
  };

  const handleEdit = ()=>{
    setIsEditing(true);
    setIsFormOpen(true)
  }
  return (
    <div>
      <button onClick={handleClick}>Add User</button>
      {isFormOpen &&  <UserForm setIsFormOpen ={setIsFormOpen} setUser={setUserInfo}  isEditing={isEditing}/>}
       {!isFormOpen && userInfo && 
       <div>
        <span>Name: {userInfo?.name}</span>
         <span>Email: {userInfo?.email}</span>
          <span>Role: {userInfo?.role}</span>
          <button onClick={handleEdit}>Edit</button>
        </div>
       }
    </div>
  );
};

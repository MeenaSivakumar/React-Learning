import React, { useState } from "react";
import { Content } from "./Content";

export const DashBoard = () => {

  const[isOpen,setIsOpen] = useState<Boolean>(false);

  const handleAll = ()=>{
    setIsOpen(false)
  }
 const handleFav =()=>{
    setIsOpen(true)
 }  
 return(
    <div>
        <div >
          <button onClick={handleAll}>All</button>
      <button onClick={handleFav}>Favorites</button>
        </div>
    <Content isActive={isOpen}/>
    </div>
  );

}

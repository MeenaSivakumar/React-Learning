import React, { useState } from "react";
import logo from "./logo.svg";
// import './App.css';
import { ItemMangement } from "./pages/item_management";
import { Table } from "./modules/item_management_module/components";
import { EditForm } from "./modules/item_management_module";
import { ProductCard } from "./modules/productCard/ProductCard";
import { TaskCard } from "./modules/taskCard/TaskCard";
import { HobbiesCard } from "./modules/taskCard/DeleteItem";
import { ToggleCard } from "./modules/taskCard/ToggleCard";
// import { TaskForm } from "./modules/taskForm/TaskForm";
import { DashBoard } from "./modules/dashBoard/DashBoard";
import { Badge } from "./ui/atom/badge/Badge";
import { TaskScreen } from "./modules/taskTracker/TaskScreen";
import { TaskForm } from "./modules/taskTracker/TaskForm";
import { AnimalsData } from "./modules/filterCard/AnimalsData";
import { UserCard } from "./modules/UserCard/UserForm";
import { UserInfo } from "./modules/UserCard/UserInfo";
import { UserDetails } from "./modules/InfoCard/UserDetails";
import { InfoPage } from "./modules/InfoCard/InfoPage";
import { DisplayPage } from "./customHooks/DisplayData";
import { SearchUsersPage } from "./pages/SearchUsersPage";
import { DigitalClock } from "./useffectPractice/DigitalClock";

function App() {
  const[task,setTask] = useState('');
  const[tasks,setTasks] = useState(['']);
  const[showTasks,setShowTasks] = useState(false);
  const handleAdd = ()=>{
    setTasks([...tasks,task]);
    setShowTasks(true);
    setTask('')
  }

  const[hobbiesList,setHobbiesList] = useState<string[]>(['waliking','reading','writting']);
  const handleDelete = (id:number)=>{
       const hobbies = hobbiesList.filter((_,i)=> i !== id);
       setHobbiesList(hobbies);
  }
  const[hobbies,setHobbies] = useState([{
    hobbie:'walking',
    isFavorite:false,
  },{
    hobbie:'reading',
    isFavorite:false,
  },{
    hobbie:'drawing',
    isFavorite:false,
  },{
    hobbie:'playing',
    isFavorite:true,
  },
  
])

  const productList = [
    {
      name: "iPhone",
      price: 70000,
      category: "electronics",
      features:
        "advanced fetaures with best camera. more storage space. light weight.",
    },
    {
      name: '',
      price: 800000,
      category: "electronics",
      features:
        "advanced fetaures with best camera. more storage space. light weight.",
    },
    {
      name: "samsung",
      price: 50000,
      category: "electronics",
      features:
        "advanced fetaures with best camera. more storage space. light weight.",
    },
    {
      name: "bag",
      price: 1000,
      category: "accesseries",
      features:
        "best quality manufactered with lather.",
    },
  ];
const addNewHobby=(value:string)=>{
   setHobbies([...hobbies,{hobbie:value,isFavorite:false}])
}

const handleChange=(id:number)=>{
  setHobbies(hobbies?.map((h,index)=>index === id ? {...h,isFavorite:!h.isFavorite}:h))

  }
   const handleEdit =(id:number,value:string)=>{
    setHobbies(hobbies?.map((h,index)=>index === id ? {...h,hobbie:value}:h))
   }
   const updateValue = ()=>{
    setHobbies(hobbies?.map((h,i)=>i === 1 ? {...h,hobbie:"travelling"}:h))
   }
  return (
    <div style={{display:"flex",justifyContent
    :"center", marginTop: 58 }}>
      {/* <ItemMangement/> */}
      {/* <EditForm/> */}
      {/* <ProductCard productList={productList} /> */}
      {/* <input placeholder="enter the task.." value={task} onChange={(e)=>setTask(e.target.value)} />
      <button onClick={handleAdd}>add</button>
      {showTasks &&  <TaskCard taskName={tasks}/> } */}
      {/* <HobbiesCard onUpdate={handleDelete} hobbiesList={hobbiesList}/>
      <ToggleCard onAddNewHobby={addNewHobby} onToggleFavorite={handleChange} hobbiesList={hobbies} onEdit={handleEdit} onChangeSecond={updateValue}/> */}
     {/* <TaskForm/> */}
     {/* <DashBoard/> */}
{/* <Badge
  label="pending"
  bgcolor="bg-red-100"
  color="text-red-500"
  borderColor="border-red-500"
/> */}

{/* <TaskScreen/> */}
{/* <AnimalsData/> */}
{/* <UserInfo/> */}
{/* <UserDetails/> */}
{/* <InfoPage/> */}
{/* <DisplayPage/> */}
{/* <SearchUsersPage/> */}
<DigitalClock/>
    </div>
  );
}

export default App;

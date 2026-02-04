import { useState } from "react";
type TaskList={
    taskName:string;
    priority:string;
    date:string;
}
export const TaskForm = () => {
  const [task, setTask] = useState("");
  const [prority,setPriority] = useState("");
  const[selectedDate,setSelectedDate] = useState('');
  const[taskData,setTaskData] = useState<TaskList[]>([]);
 const[isSubmitted,setIssubmitted] = useState(false);
 const[editIndex,setEditIndex] = useState<number | null>(null);
 const[isEditing,setIsEditing] = useState(false);
const[editTaskList,setEditTaskList] = useState<TaskList>({taskName:task,priority:prority,date:selectedDate});

  const handleSubmit = (e:React.FormEvent)=>{
    e.preventDefault();
    if(task.trim() !== '' && prority.trim() !== "" && selectedDate !== '' ){
         setTaskData([...taskData,{taskName:task,priority:prority,date:selectedDate}]);
         console.log([...taskData,{taskName:task,priority:prority,date:selectedDate}])
         setIssubmitted(true);
         setTask('');
         setPriority('');
         setSelectedDate('');
          
         return
   
    }
    alert("enter valid data");
    return
  }
  const handleEdit = (index:number)=>{
       setEditIndex(index);
       setIsEditing(true);
  }
  const handleChange = (e:any)=>{
    const{name,value} = e.target;
    if(task.trim() === '' && prority.trim() === '' && selectedDate === '') return
    setEditTaskList({...editTaskList,[name]:value});
   
  }
  const handleUpdate = (e:React.FormEvent,index:number)=>{
    e.preventDefault();
    const updatedList = editTaskList;
    setTaskData(taskData.map((t,i)=>i === index ? {...t,updatedList}:t));
    setIsEditing(false);
  }
  return (
    <div>
        
        {isEditing ? 
        taskData?.map((task,index)=>(
           editIndex === index &&
           <div key={index}>
        <form  onSubmit={(e)=>handleUpdate(e,index)}>
        <label>Task Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your task.."
          value={task.taskName}
          onChange={(e) => handleChange(e)}
        />
        <label>Prority</label>
        <select  name="name" value={task.priority} onChange={(e)=>handleChange(e)}>
         <option value="select">select</option>
          <option value="High">High</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
        </select>
        <label>Due Date</label>
        <input  name="name" type="date" value={task.date} onChange={(e)=>handleChange(e)} />
        <button type="submit">update</button>
      </form>
      </div>))
        : 
      <form onSubmit={(e)=>handleSubmit(e)}>
        <label>Task Name:</label>
        <input
          type="text"
          placeholder="Enter your task.."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <label>Prority</label>
        <select value={prority} onChange={(e)=>setPriority(e.target.value)}>
            <option value="select">select</option>
          <option value="High">High</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
        </select>
        <label>Due Date</label>
        <input type="date" value={selectedDate} onChange={(e)=>setSelectedDate(e.target.value)} />
        <button type="submit">submit</button>
      </form>}
      {isSubmitted && 
      <div>

      <h1>Task Data:</h1>
        {taskData?.map((task,index)=>(
            <ul key={index}>
                <li>Task:{task.taskName}</li>
                 <li>Prority:{task.priority}</li>
                  <li>Duedate:{task.date}</li>
                  <button type="submit" onClick={()=>handleEdit(index)}>edit</button>
            </ul>
        ))}
      </div>}
    </div>
  );
};

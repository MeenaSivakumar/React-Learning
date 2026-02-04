import { useState } from "react";
type HobbiesObj = {
  hobbie: string;
  isFavorite: Boolean;
};

interface HobbiesList {
  hobbiesList: HobbiesObj[];
  onChange: (id: number) => void;
 
  onUpdate:(id:number,value:string)=>void;

}

export const ToggleCard = ({ hobbiesList, onChange,onUpdate}: HobbiesList) => {
  // const[isEditing,setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [newHobbie, setNewHobbie] = useState("");
  const handleChange = (index: number) => {
    onChange(index);
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    
  };

  const handleUpdate = (index:number,value:string)=>{
   onUpdate(index,value);
  }
  return (
    <div>
      {hobbiesList?.map((hobbie, index) => (
        <ul key={index}>
          {editIndex === index ? (
            <>
              <input
                value={hobbie?.hobbie || newHobbie}
                onChange={(e) => setNewHobbie(e.target.value)}
              />
              <button type="submit" onClick={()=>handleUpdate(index,newHobbie)}>update</button>

            </>
          ) : (
            <>
              <li style={{ fontWeight: hobbie.isFavorite ? "bold" : "normal" }}>
                {hobbie.hobbie}
              </li>
              <input
                type="checkbox"
                onChange={() => handleChange(index)}
                checked={hobbie.isFavorite ? true : false}
              />
              <button
                type="submit"
                onClick={() => handleEdit(index)}
              >
                edit
              </button>
            </>
          )}
        </ul>
      ))}
    </div>
  );
};

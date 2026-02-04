
interface HobbiesList{
    hobbiesList:string[];
    onUpdate:(id:number)=>void;
}
export const HobbiesCard = ({hobbiesList,onUpdate}:HobbiesList)=>{
    const handleDelete =(index:number)=>{
          console.log('delete is clicked',index);
           onUpdate(index);
    }
    return(
        <div>
            {hobbiesList?.map((hobbie,index)=>(
                <ul key={index}>
                  <li>{hobbie}</li>
                  <button onClick={()=>handleDelete(index)}>❌</button>
                </ul>
            ))}
        </div>
    )
}
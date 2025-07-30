import { ItemMangementModule } from "../../modules/item_management_module";
import { useEffect, useState } from "react";
import axios from "axios";
import { User } from "../../modules/item_management_module/components";
export const ItemMangement = ({}) => {
  const [users, setUsers] = useState<User[]>([]);
  
  useEffect(() => {
  const fetchUsers = async () => {
   try {
     const response = await axios
       .get("https://687fa162efe65e52008a7446.mockapi.io/users")
       .then((response) => response.data);
       setUsers(response);
   } catch (e) {
     alert("invalid api call");
   }
 };

 fetchUsers()
 },[]);

  return (
    <div>
       
       <ItemMangementModule users={users} />
   
    </div>
  );
};

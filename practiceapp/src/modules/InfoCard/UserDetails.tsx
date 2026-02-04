import { useEffect, useState } from "react";
import { SearchField } from "./SearchField";
import { UserCard } from "./UserCard";
import { mockUsers } from "./MockData";

export interface UserData {
  id: number;
  name: string;
  email: string;
}

export const UserDetails = () => {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    padding: "20px",
    border: "1px solid #ccc",
  };
  const [userData, setUserData] = useState<UserData[]>();
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setUserData(mockUsers);
  }, []);

  const handleSearch = (e: any) => {
    setSearchInput(e.target.value);
    const filteredData = userData?.filter((user) =>
      user.name.toLowerCase().includes(searchInput) ? user.name : ""
    );
    setUserData(filteredData);
    console.log(searchInput);
    console.log(filteredData);
  };
  const handleSort =()=>{
     userData?.sort();
  }
  return (
    <div>
        <div style={{display:'flex', justifyContent:'space-between'}}>
             <SearchField value={searchInput} onChange={(e) => handleSearch(e)} />
             <button onClick={handleSort}>Sort A-Z</button>
        </div>
     
      <div style={containerStyle}>
        {userData?.length !== 0 ? (
          userData?.map((user) => <UserCard key={user.id} data={user} />)
        ) : (
          <span>No users found</span>
        )}
      </div>
    </div>
  );
};

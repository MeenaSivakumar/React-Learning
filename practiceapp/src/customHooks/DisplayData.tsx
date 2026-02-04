import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import { UserCard } from "../modules/InfoCard/UserCard";


export const DisplayPage = () => {
const fetchData = useFetch();

const handleRefetch =()=>{
    
}

  return (
    <div>
      {fetchData.loading && !fetchData.data && <div>Loading data.....</div>}
      {fetchData.error && (
        <div>
          {fetchData.error}
          <button onClick={() => handleRefetch}>Retry</button>
        </div>
      )}
      <div>
           {!fetchData.loading&& !fetchData.error&& fetchData.data?.map((user) => (
        <UserCard key={user.id} data={user} />
      ))}
     
      </div>
     
    </div>
  );
};

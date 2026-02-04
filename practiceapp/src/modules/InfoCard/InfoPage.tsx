import { useEffect, useState } from "react";
import mockData from "../dashBoard/MockData";
import { UserData } from "./UserDetails";
import { mockUsers } from "./MockData";
import { UserCard } from "./UserCard";

export const InfoPage = () => {
  const [userData, setUserData] = useState<UserData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDisplayError, setIsDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchData = new Promise<UserData[]>((resolve, reject) => {
    const value = Math.random() ;
    console.log(value)
    setTimeout(() => {
      if ( value<0.5) {
        resolve(mockUsers);
      } else {
    
        reject("Error fetching data");
      }
    }, 2000);
  });

  useEffect(() => {
    fetchData
      .then((data) => {
        setUserData(data), setIsLoading(false);
      })
      .catch((e) => {
        setErrorMessage(e);
        setIsDisplayError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading && !isDisplayError && <div>Loading data.....</div>}
      {isDisplayError && (
        <div>
          {errorMessage}
          <button onClick={() => fetchData}>Retry</button>
        </div>
      )}
      <div>
           {!isLoading&& !isDisplayError&& userData?.map((user) => (
        <UserCard key={user.id} data={user} />
      ))}
      {/* <span>Last Successful Fetch</span> */}
      </div>
     
    </div>
  );
};

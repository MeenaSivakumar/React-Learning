import { mockUsers, UserData } from "../data/mockUsers";
import { useState, useEffect, useCallback } from "react";

export const useFetchUsers = () => {
  const [data, setData] = useState<UserData[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUsers = useCallback((): Promise<UserData[]> => {
    return new Promise((resolve, reject) => {
     
       let val = Math.random()
      setTimeout(() => {
        if (val > 0.5) {
          console.log(val)
          resolve(mockUsers);
        } else {
          console.log(val)
          reject("Error Fetching data");
        }
      }, 2000);
    
    });
  },[]);

  useEffect(() => {
    setLoading(true);
    fetchUsers()
      .then((data) => {
        setError("");
        setData(data);
      })
      .catch((e) => {
        setError(e);
      }).finally(
        ()=>{
          setLoading(false)
        }
      );
    
  }, []);

  return { data, error,loading,fetchUsers };
};

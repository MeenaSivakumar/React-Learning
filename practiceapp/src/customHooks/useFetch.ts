import { useEffect, useState } from "react";
import { UserData } from "../modules/InfoCard/UserDetails";
import { mockUsers } from "../modules/InfoCard/MockData";

export const useFetch = () => {
  const [data, setData] = useState<UserData[]>([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>("");

  const fetchUser = (): Promise<UserData[]> => {
    return new Promise((resolve, reject) => {
      const value = Math.random();
      setTimeout(() => {
        if (value < 0.5) {
          resolve(mockUsers);
        } else {
          reject("Error fetching data");
        }
      }, 2000);
    });
  };
  useEffect(() => {
    fetchUser()
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e);
        setIsLoading(false);
      });
  }, );
  return {data,loading,error};
};

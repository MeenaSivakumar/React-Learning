import { useContext } from "react";
import { UserContext } from "../../useContext/AppContextProvider";

export const SummaryDetails = () => {
  const userInfo = useContext(UserContext);
  return (
    <div>
      <h1>User Details</h1>
      <h6>{userInfo?.email}</h6>
      <h6>{userInfo?.firstName}</h6>
      <h6>{userInfo?.lastName}</h6>
    </div>
  );
};



import { useContext } from "react";
import { UserContext } from "../../useContext/AppContextProvider";

export const SummaryDetails = () => {
  const userInfo = useContext(UserContext);
  return (
    <div>
      <h1>User Details</h1>
      <h6>email id:{userInfo?.email}</h6>
      <h6>First Name:{userInfo?.firstName}</h6>
      <h6>Last Name:{userInfo?.lastName}</h6>
    </div>
  );
};



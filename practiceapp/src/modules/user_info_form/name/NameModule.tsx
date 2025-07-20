import { useContext, useState } from "react";
import { Button } from "../../../ui/atom/button";
import { TextField } from "../../../ui/atom/textfield";
import { UserContext } from "../../../useContext/AppContextProvider";
import { useNavigate } from "react-router-dom";

export const NameModule = ({}) => {
  const navigate = useNavigate();
  const userInfo = useContext(UserContext);
  const [isDisabled, setIsDisabled] = useState(true);

  const { firstName, lastName, setFirstName, setLastName } = userInfo;
  const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
    setIsDisabled(false);
  };

  const handleSubmit = () => {
    if (userInfo?.firstName.length !== 0 && userInfo?.lastName.length !== 0) {
      navigate("/summary");
    } else {
      alert("Enter valid Name Details");
      setIsDisabled(true);
    }
  };

  return (
    <div>
      <h4>Enter Your First Name</h4>
      <TextField
        value={firstName}
        onChange={() => handleFirstName}
        placeholder="Enter First Name"
        type="text"
      />
      <h4>Enter Your second Name</h4>
      <TextField
        value={lastName}
        onChange={() => handleLastName}
        placeholder="Enter Last Name"
        type="text"
      />
      <Button
        label="submit"
        onClick={() => !isDisabled && handleSubmit}
        bgColor="lightgreen"
      />
    </div>
  );
};

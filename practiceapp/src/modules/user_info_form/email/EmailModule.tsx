import { useContext, useState } from "react";
import { Button } from "../../../ui/atom/button";
import { TextField } from "../../../ui/atom/textfield";
import { UserContext } from "../../../useContext/AppContextProvider";
import { useNavigate } from "react-router-dom";

export const EmailModule = ({}) => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  if(!userContext){
    return<div>null</div>
  }
  const [isDisabled, setIsDisabled] = useState(true);
 
  const { email, setEmail } = userContext;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsDisabled(email.length === 0);
  };

  const handleNext = () => {
    if (userContext?.email.length !== 0) {
      userContext?.email === "/^[^s@]+@[^s@]+.[^s@]+$/"
        ? navigate("/nameInfo")
        : alert("Enter Valid Email");
    } else {
      alert("Enter Valid Email");
      setIsDisabled(true);
    }
  };

  return (
    <div>
      <h4>Enter Your Email</h4>
      <TextField
        value={email}
        onChange={() => handleChange}
        placeholder="Enter email"
        type="email"
      />
      <Button
        label="Next"
        onClick={isDisabled ? ()=>{}:handleNext}
        bgColor="grey"
      />
    </div>
  );
};

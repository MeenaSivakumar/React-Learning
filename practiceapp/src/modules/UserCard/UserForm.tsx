import { FormEvent, useState } from "react";
import { InputField } from "./InputField";

export interface UserProps {
  name: string;
  email: string;
  role: string;
}
type UserFormProps = {
  setIsFormOpen: (value: boolean) => void;
  setUser: (value: UserProps) => void;
  isEditing: boolean;
};
export const UserForm = ({
  setIsFormOpen,
  setUser,
  isEditing,
}: UserFormProps) => {
  const [userInfo, setUseInfo] = useState<UserProps>({
    name: "",
    email: "",
    role: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUseInfo({ ...userInfo, [name]: value });
    console.log(userInfo);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsFormOpen(false);
    setUser(userInfo);
    console.log(userInfo);
  };

  return (
    <div>
      {isEditing ? (
        <form className="flex gap-2 flex-col" onSubmit={(e) => handleSubmit(e)}>
          <InputField
            value={userInfo?.name}
            onChange={(e) => handleChange(e)}
            type="text"
            placeHolder="Enter your Name"
            name="name"
          />
          <InputField
            value={userInfo?.email}
            onChange={(e) => handleChange(e)}
            type="email"
            placeHolder="Enter your Email"
            name="email"
          />
          <InputField
            value={userInfo?.role}
            onChange={(e) => handleChange(e)}
            type="text"
            placeHolder="Enter your Role"
            name="role"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <form className="flex gap-2 flex-col" onSubmit={(e) => handleSubmit(e)}>
          <InputField
            value={userInfo?.name}
            onChange={(e) => handleChange(e)}
            type="text"
            placeHolder="Enter your Name"
            name="name"
          />
          <InputField
            value={userInfo?.email}
            onChange={(e) => handleChange(e)} 
            type="email"
            placeHolder="Enter your Email"
            name="email"
          />
          <InputField
            value={userInfo?.role}
            onChange={(e) => handleChange(e)}
            type="text"
            placeHolder="Enter your Role"
            name="role"
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

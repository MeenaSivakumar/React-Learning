import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

// type User = {
//   email: string;
//   firstName: string;
//   lastName: string;
// };

export interface UserContextProps {
  email: string;
  setEmail:Dispatch<React.SetStateAction<string>>;
  firstName: string;
  setFirstName: Dispatch<SetStateAction<string>>;
  lastName: string;
  setLastName: Dispatch<SetStateAction<string>>;
  // userInfo: User;
  // setUserInfo: React.Dispatch<React.SetStateAction<User>>;
}
interface AppContextProviderProps {
  children: ReactNode;
}
export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [userInfo, setUserInfo] = useState<User>({
  //   email: '',
  //   firstName: '',
  //   lastName: '',
  // });

  return (
    <UserContext.Provider
      value={{
        email,
        setEmail,
        firstName,
        setFirstName,
        lastName,
        setLastName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

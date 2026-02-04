import { UserData } from "../data/mockUsers";

export const UserCard = ({ id,name, email, age, role }: UserData) => {
  return (
    <div
    key={id}
      style={{
        display: "flex",
        border: "yellow",
        borderRadius: 4,
        backgroundColor: "black",
        fontSize: 14,
        color: "white",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span> Name:{name}</span>
      <span>Email:{email}</span>
      <span> Age:{age}</span>
      <span>Role:{role}</span>
    </div>
  );
};

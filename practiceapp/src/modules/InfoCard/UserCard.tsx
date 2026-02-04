type Card={
    id?:number
    name:string;
    email:string
}
interface CardProps{
    data:Card;
}
export const UserCard = ({data}:CardProps) => {
  return (
    <div
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
       flexDirection:'column',
      }}
    >
    <span> Name:{data.name}</span>
    <span>Email:{data.email}</span>
    </div>
  );
};

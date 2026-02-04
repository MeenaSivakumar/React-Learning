interface CardProps {
  name: string;
  class?: string;
}

export const Card = ({ name }: CardProps) => {
  return (
    <div
      style={{
        display: "flex",
        border: "yellow",
        borderRadius: 4,
        backgroundColor: "black",
        fontSize: 14,
        color: "white",
        height: 56,
        width: 98,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {name}
    </div>
  );
};

import { useEffect, useState } from "react";
import { animalData } from "./Data";
import { Card } from "./Card";
import { FilterButton } from "./FilterButton";

interface AnimalDataProps {
  name: string;
  class: string;
}

const labels = ["All", "Birds", "Mammals", "Reptiles", "Fish"];
export const AnimalsData = () => {
  const [isAllActive, setIsAllActive] = useState(true);
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    padding: "20px",
    border: "1px solid #ccc",
  };
  const [animalsData, setAnimalsData] = useState<AnimalDataProps[] | null>([]);

  const handleClick = (l: string) => {
    if (l !== "All") {
      setAnimalsData(animalData?.filter((d) => (d?.class === l ? d : null)));
      setIsAllActive(false);
      return;
    }
    setAnimalsData(animalData);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 10,
          margin: 12,
        }}
      >
        {labels.map((l, index) => (
          <FilterButton key={index} label={l} onClick={() => handleClick(l)} />
        ))}
      </div>
      <div style={containerStyle}>
        {isAllActive
          ? animalData?.map((d, index) => <Card key={index} name={d.name} />)
          : animalsData?.map((a, index) => <Card key={index} name={a.name} />)}
      </div>
    </div>
  );
};

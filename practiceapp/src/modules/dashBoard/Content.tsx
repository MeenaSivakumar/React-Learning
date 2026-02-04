import { Icon } from "@mui/material";
import mockData from "./MockData";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

type ContentProps = {
  isActive: Boolean;
};

interface ContentDataProps {
  id: number;
  title: string;
  description: string;
}
export const Content = ({ isActive }: ContentProps) => {
  const [contentData, setContentData] = useState(mockData);
  const [favData, setFavData] = useState<ContentDataProps[] | null>([]);
  useEffect(() => {
    const filteredData = contentData?.filter((d) => d.liked === true);
    setFavData(filteredData);
    console.log(filteredData);
  }, [contentData]);

  const handleFavorite = (index: number) => {
    console.log(contentData);
    setContentData(
      contentData.map((d) => (d.id === index ? { ...d, liked: !d.liked } : d))
    );
    console.log(contentData);
  };
  return (
    <div>
      {!isActive
        ? contentData?.length !==0 ? contentData?.map((data) => (
            <div key={data.id}>
              <h1>Title:{data.title}</h1>
              <p>Descritpion:{data.description}</p>
              <button onClick={() => handleFavorite(data.id)}>
                {data.liked ? (
                  <FaHeart color="red" />
                ) : (
                  <FaHeart color="grey" />
                )}
              </button>
            </div>
          )):<p>nothing to display</p>
        : favData?.length !== 0 ? favData?.map((data) => (
            <div key={data.id}>
              <h1>Title:{data.title}</h1>
              <p>Descritpion:{data.description}</p>
              <button onClick={()=>handleFavorite(data.id)}> <FaHeart color="red" /></button>
             
            </div>
          )):<p>No Fav item added</p>}
    </div>
  );
};

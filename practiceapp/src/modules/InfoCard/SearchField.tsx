import { InputHTMLAttributes } from "react";

type SearchFieldType = {
  onChange: (e:any) => void;
  value: string;
};

export const SearchField = ({ onChange, value }: SearchFieldType) => {
  return (
    <input
      type="search"
      placeholder="Search by Name..."
      onChange={onChange}
      value={value}
      style={{
        border: "1px solid blue",
        borderRadius: 8,
        margin: 12,
        padding: 4,
      }}
    />
  );
};

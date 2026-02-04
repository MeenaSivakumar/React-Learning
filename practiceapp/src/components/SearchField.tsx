export interface SearchProps{
    onChange:()=>void;
    value:string;
}
export const SearchField = ({onChange,value}:SearchProps) => {
  return (
    <input
      placeholder="Search by name/email"
      onChange={onChange}
      value={value}
      type="search"
      id="Search-input"
    />
  );
};

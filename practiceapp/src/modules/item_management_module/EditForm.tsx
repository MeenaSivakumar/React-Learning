import { Button } from "../../ui/atom/button";
import { TextField } from "../../ui/atom/textField";
import { User } from "./components";

export const EditForm = ({ ...props }: any) => {
  console.log(props);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        height: "100vh",
      }}
    >
      <form>
        <TextField
          label="Email"
          value={props.email}
          onChange={() => {}}
          type="email"
        />
        <TextField
          label="Name"
          value={props.name}
          onChange={() => {}}
          type="text"
        />
        <TextField
          label="Phone"
          value={props.phone}
          onChange={() => {}}
          type="tel"
        />
        <TextField
          label="city"
          value={props.city}
          onChange={() => {}}
          type="text"
        />
        <TextField
          label="Salary"
          value={props.Salary}
          onChange={() => {}}
          type="number"
        />
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',backgroundColor:'white'}}>
            <Button label="cancel" onClick={() => {}} bgColor="#D3D3D3" />
          <Button label="Update" onClick={() => {}} bgColor="#90EE90" />
          
        </div>
      </form>
    </div>
  );
};

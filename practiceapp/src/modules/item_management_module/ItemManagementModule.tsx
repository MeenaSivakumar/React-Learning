import { error } from "console";
import { Table, TableProps, User } from "./components";
import { useEffect, useState } from "react";
import axios from "axios";

export const ItemMangementModule = ({users}:TableProps) => {
  return (
    <div  >
      <Table users={users} />
    </div>
  );
};

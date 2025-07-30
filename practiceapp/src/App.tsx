import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ItemMangement } from './pages/item_management';
import { Table } from './modules/item_management_module/components';
import { EditForm } from './modules/item_management_module';

function App() {
  return (
    <div style={{ display:'flex' ,justifyContent:'center',marginTop:58}}>
      <ItemMangement/>
      {/* <EditForm/> */}
      
    </div>
  );
}

export default App;

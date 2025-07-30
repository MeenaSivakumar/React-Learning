import { useEffect, useState } from "react";
import { TableProps } from "./Table.types";
import { EditForm } from "../index"

export const Table = ({ users }: TableProps) => {
  const user = users.length > 0 ? Object.keys(users[0]) : [];
  const [isShowForm, setShowForm] = useState(false);
  const[formData,setFormData] = useState<object>();

  const handleEdit = (id: number)=>{
        setShowForm(true);
        setFormData(users[id])
         console.log(users[id])
  }

  return (
   

    <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
      <table style={{ 
        borderCollapse: 'separate', 
        borderSpacing: '0 8px',
        width: '100%',
        maxWidth: '1200px'
      }}>
        <thead>
          <tr style={{textAlign:'center'}}>
            {user.map((key, index) => {
              return key !== "id" && <th key={index} style={{ 
                padding: '12px 16px',
                textAlign: 'center',
                fontWeight: 'bold',
                backgroundColor: '#f8f9fa',
                borderBottom: '2px solid #dee2e6'
              }}>{key}</th>;
            })}
            {users.length > 0 && <th style={{ 
              padding: '12px 16px',
              textAlign: 'center',
              fontWeight: 'bold',
              backgroundColor: '#f8f9fa',
              borderBottom: '2px solid #dee2e6'
            }}>Actions</th>}
          </tr>
        </thead>
        <tbody style={{rowGap:34}}>
          {users.map((user, id) => (
            <tr key={id} style={{ backgroundColor: '#ffffff' }}>
              <td style={{ padding: '12px 16px', textAlign: 'center' }}>{user.email}</td>
              <td style={{ padding: '12px 16px', textAlign: 'center' }}>{user.name}</td>
              <td style={{ padding: '12px 16px', textAlign: 'center' }}>{user.phone}</td>
              <td style={{ padding: '12px 16px', textAlign: 'center' }}>{user.company}</td>
              <td style={{ padding: '12px 16px', textAlign: 'center' }}>{user.city}</td>
              <td style={{ padding: '12px 16px', textAlign: 'center' }}>{user.Salary}</td>
              <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                <button onClick={()=>handleEdit(id)}>Edit</button>
                <button onClick={() => {}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
};

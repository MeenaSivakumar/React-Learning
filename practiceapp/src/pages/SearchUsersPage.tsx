import React from "react";

import { useEffect } from "react";
import { useFetchUsers } from "../hooks/useFetchUsers";
import { UserCard } from "../components/UserCard";
import { SearchField } from "../components/SearchField";
export function SearchUsersPage() {
  const { data, error, loading, fetchUsers } = useFetchUsers();

  return (
    <div>
      <h2>User Info Page</h2>

      {/* <SearchField onChange={() => {}} value="" /> */}

    
      {loading && <span>Loading data...</span>}

      
      {!loading && error && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>{error}</span>
          <button disabled={loading} onClick={fetchUsers}>Retry</button>
        </div>
      )}

      
      {!loading && !error && data.length === 0 && (
        <div>No users found</div>
      )}

     
      {!loading && !error && data.length > 0 && (
        <div>
          {data.map((d) => (
            <div
              key={d.id}
              style={{ display: "flex", flexDirection: "column", gap: 10 }}
            >
              <UserCard
                id={d.id}
                name={d.name}
                email={d.email}
                age={d.age}
                role={d.role}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect } from "react";

import './data.css'
function Details() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleImageClick = (user) => {
    if (selectedUser && selectedUser.id === user.id) {
      setSelectedUser(null);
    } else {
      setSelectedUser(user);
    }
  };

  return (
    <div id='full'>
      <h2>User List</h2>
      <div id='row' style={{ display: "flex", flexWrap: "wrap" }}>
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => handleImageClick(user)}
            style={{ marginRight: "10px" }}
          >
            <img
              src={user.imageUrl}
              height={200}
              width={200}
              alt={user.name}
            />
            {selectedUser && selectedUser.id === user.id && (
              <div id='col'>
                <h3>{user.name}</h3>
                <p>City: {user.city}</p>
                <p>Age: {user.age}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;

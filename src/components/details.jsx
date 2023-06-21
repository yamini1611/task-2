import React, { useState, useEffect } from "react";

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
    <div>
      <h2>User List</h2>
      <div className="row">
        {users.map((user) => (
          <div key={user.id} className="col-sm-3" onClick={() => handleImageClick(user)}>
            <div className="card">
              <img src={user.imageUrl} height={200} width={200} alt={user.name} />
              {selectedUser && selectedUser.id === user.id && (
                <div>
                  <h3>{user.name}</h3>
                  <p>City: {user.city}</p>
                  <p>Age: {user.age}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;

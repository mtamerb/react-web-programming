import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  console.log(...users);

  return (
    <div>
      <header>
        <h1>Users</h1>
      </header>

      <table>
        {/* crete table here columns : id, name, username, email, address, phone,website, company */}
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>E-mail</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <React.Fragment key={index}>
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  {user.address.street} {user.address.suite},{" "}
                  {user.address.city} {user.address.zipcode}
                  <br />
                  Latitude: {user.address.geo.lat}, Longitude:{" "}
                  {user.address.geo.lng}
                </td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>
                  Name: {user.company.name}
                  CatchPhrase: {user.company.catchPhrase}
                  bs: {user.company.bs}
                </td>
              </tr>
              {index !== users.length - 1 && (
                <tr>
                  <td colSpan="8">
                    <hr />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;

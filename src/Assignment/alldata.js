
import { useEffect, useState } from "react";

export default function AllData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("accounts")) || [];
    setUsers(data);
  }, []);

  return (
    <div>
      <h2>All Users</h2>
      <table border="1">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td>{u.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
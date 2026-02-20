import { useState } from "react";

export default function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleCreate = () => {
    const users = JSON.parse(localStorage.getItem("accounts")) || [];

    users.push({
      name,
      email,
      password,
      phone,
      balance: 0,
    });

    localStorage.setItem("accounts", JSON.stringify(users));
    alert("User created successfully");

    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <h2>Create User</h2>

        <div className="form-group">
          <label>Name</label>
          <input value={name} onChange={e => setName(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input value={phone} onChange={e => setPhone(e.target.value)} />
        </div>

        <button onClick={handleCreate}>Create user</button>
      </div>
    </div>
  );
}

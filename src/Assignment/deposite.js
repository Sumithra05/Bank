
import { useState } from "react";

export default function Deposit() {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  const handleDeposit = () => {
    const users = JSON.parse(localStorage.getItem("accounts")) || [];
    const user = users.find(u => u.email === email);

    if (!user || amount <= 0) {
      alert("enter valid details");
      return;
    }

    user.balance += Number(amount);
    localStorage.setItem("accounts", JSON.stringify(users));
    alert("successful");
    setAmount("");
  };

  return (
    <div>
      <h2>Deposit</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
      <input placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} /><br />
      <button onClick={handleDeposit}>Deposit</button>
    </div>
  );
}
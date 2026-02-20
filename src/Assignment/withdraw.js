
import { useState } from "react";

export default function Withdraw() {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  const handleWithdraw = () => {
    const users = JSON.parse(localStorage.getItem("accounts")) || [];
    const user = users.find(u => u.email === email);

    if (!user || amount <= 0) {
      alert("enter the valid amount");
      return;
    }

    if (user.balance < amount) {
      alert("Insufficient balance");
      return;
    }

    user.balance -= Number(amount);
    localStorage.setItem("accounts", JSON.stringify(users));
    alert("withdraw successful");
    setAmount("");
  };

  return (
    <div>
      <h2>Withdraw</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
      <input placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} /><br />
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
}
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/create">Create user</Link>
      <Link to="/deposit">Deposit</Link>
      <Link to="/withdraw">Withdraw</Link>
      <Link to="/data">All users</Link>
    </nav>
  );
}

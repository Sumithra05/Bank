// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Assignment/nav";
import Create from "./Assignment/create";
import Deposit from "./Assignment/deposite";
import Withdraw from "./Assignment/withdraw";
import AllData from "./Assignment/alldata";
import './Assignment/Style.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/create" element={<Create />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/data" element={<AllData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

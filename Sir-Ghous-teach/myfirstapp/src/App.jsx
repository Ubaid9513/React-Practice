// import logo from "./logo.svg";
// import "./App.css";
// import Button from "react-bootstrap/Button";
// import Dashboard from "./pages/Dashboard";

import { useState } from "react";

// function App() {
//   return (
//     <>
//       {/* <Button variant="primary">Ubaid</Button> */}
//       <Dashboard/>
//     </>
//   );
// }

// export default App;

function App(){
  const [value,setValue] = useState("Ubaid");
  return (
    <>
    <input type="text" onChange={(e)=> setValue(e.target.value)}/>
    <h1>{value}</h1>
    </>
  )
}
export default App;
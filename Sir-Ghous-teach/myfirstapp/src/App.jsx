// import logo from "./logo.svg";
// import "./App.css";
// import Button from "react-bootstrap/Button";
// import Dashboard from "./pages/Dashboard";


// function App() {
  //   return (
//     <>
//       {/* <Button variant="primary">Ubaid</Button> */}
//       <Dashboard/>
//     </>
//   );
// }

// export default App;
import { useState } from "react";

function App(){
  const [value,setValue] = useState("");
  return (
    <>
    <input value={value} type="text" onChange={(e)=> setValue(e.target.value)}/>
    <h1>{value}</h1>
    <button onClick={()=>setValue("")}>Reset</button>
    </>
  )
}
export default App;
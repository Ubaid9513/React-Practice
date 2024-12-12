import { useState } from "react";
import "./App.css";
import Dashboard from "./Pages/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button> */}
      <Dashboard/>
    </>
  );
}

export default App;

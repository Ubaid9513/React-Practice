import { useEffect, useState } from "react";
import Count from "./components/Count.jsx";
function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const [name, setName] = useState("Ubaid");
  useEffect(() => {
    console.log("testing...");
  }, []);
  useEffect(() => {
    console.log("testing 2...");
  });
  useEffect(() => {
    console.log("testing 3...");
  }, [count, name]);
  return (
    <>
      <h1>{name}</h1>

      { count < 10 && <Count counter={count} />}

      <button onClick={() => setName("Ubaid Aslam")}>Update Name</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default App;

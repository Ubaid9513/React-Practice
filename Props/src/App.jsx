import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        <Button textColor = "text-blue-500" bgColor = "bg-red-400" lable = {"Home"}/>
        <Button textColor = "text-red-500" bgColor = "bg-purple-400" lable = {"About"}/>
        <Button bgColor = "bg-pink-400" lable = {"Contact"}/>
        </div>
    </>
  );
}

export default App;

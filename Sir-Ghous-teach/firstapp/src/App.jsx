import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import { dividerClasses } from "@mui/material";
import Card from "./components/Card.jsx";
import Input from "./components/Input.jsx";

function App() {
  const arr = ["One", "Two", "Three"];
  const getData = (a) => {
    console.log(a);
  };

  return (
    <div className="App">
      <Input change={(e)=>{console.log(e.target.value);
      }}/>
      {arr.map((v, i) => {
        return <Card key={i} v={v} i={i} getData={getData} />;
      })}
    </div>
  );
}

export default App;

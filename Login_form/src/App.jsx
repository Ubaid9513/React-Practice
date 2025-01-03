import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BasicForm from "./components/Form";
import { Button } from "react-bootstrap";
function App() {
  const [type, setType] = useState("login");

  return (
    <>
      {type === "login" ?
        <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 p-5">
            <h1>Login</h1>
            <BasicForm />
            <Button onClick={()=> setType("register")} variant="link">register now?</Button>
          </div>
        </div>
      </div>:
      <div className="container">
      <div className="row justify-content-center">
        <div className="col-6 p-5">
          <h1>Register</h1>
          <BasicForm />
          <Button onClick={()=> setType("login")} variant="link">login now?</Button>
        </div>
      </div>
    </div>
      }
    </>
  );
}

export default App;

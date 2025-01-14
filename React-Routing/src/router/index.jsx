import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Login from "../Pages/Login";
import AppLayout from "../components/Layout";

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<AppLayout><Login/></AppLayout>} />
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default AppRouter;

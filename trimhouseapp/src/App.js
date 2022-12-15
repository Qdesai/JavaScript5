import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Routes} from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import ContactUs from "./Components/ContactUs";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState(false);

  const authenticate = ()=>{
    setStatus(true)
  }

  const logout = ()=>{
    setStatus(false)
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login auth={authenticate}/>} />
        <Route path="/home" element={<Home logout={logout} status={status}/>} />
        <Route path="/profile" element={<Profile logout={logout} status={status}/>} />
        <Route path="/contactus" element={<ContactUs logout={logout} status={status}/>} />
      </Routes>
    </div>
  );
}

export default App;
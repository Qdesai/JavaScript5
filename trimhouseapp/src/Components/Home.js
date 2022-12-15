import { Row, Col, Button } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Home(props) {
   const navigate = useNavigate();

  const handleClick = () => {
    console.log("SOmething Happened");
    props.logout();
    navigate("/");
  };

  useEffect(() => {
    if(props.status){
        console.log("Authentication successfull")
    }
    else{
        navigate("/")
    }
  }, []);
 
  return (
    <>
    <Navbar/>
    
    </>
  );
}
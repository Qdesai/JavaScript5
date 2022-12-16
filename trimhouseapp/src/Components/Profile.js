import { Row, Col, Button } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Profile(props){
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

    return(
      
<div>
<Navbar/>

      <Row>
        <Col>
          <Button type="primary" onClick={handleClick}>
            Logout
          </Button>
        </Col>
      </Row>

</div>

    );
}

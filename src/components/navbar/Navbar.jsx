import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import LoginUser from "../loginUser/LoginUser";
import "./navbar.css";

const Navbar = () => {
  const [box, setBox] = useState(false);

  return (
    <>
      <Container className="navbar-container d-flex align-items-center" fluid>
        <div
          className="d-flex align-items-center justify-content-around"
          style={{ width: "100%" }}
        >
          <h3 className="navbar-title">game suite</h3>
          <div className="navbar-user">
            <span onClick={() => setBox(!box)}>Jokowi</span>
            {box && <LoginUser />}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Navbar;

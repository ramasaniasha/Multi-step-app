import { Navbar,Container } from "react-bootstrap";
import React from "react";

const Navbar1 = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand >Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            SignUp
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;

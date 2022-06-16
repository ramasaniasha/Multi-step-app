import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const StepOne = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <div style={{display: "flex",}}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </Form.Group>
        {/* <Button variant="primary" type="submit">
          Submit
        </Button> */}
      </Form>
    </div>
  );
};

export default StepOne;

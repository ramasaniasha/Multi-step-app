import React, { useState } from 'react';
import {Form} from 'react-bootstrap';

const StepTwo = () => {
  const [email, setEmail] = useState('')
  const [emailConfirm, setEmailConfirm] = useState('')

  return (
    <div style={{display: "flex",}}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter EMail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email Confirm</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Email Confirm"
            onChange={(e) => setEmailConfirm(e.target.value)}
            value={emailConfirm}
          />
        </Form.Group>
        {/* <Button variant="primary" type="submit">
          Submit
        </Button> */}
      </Form>
    </div>
  )
}
export default StepTwo;
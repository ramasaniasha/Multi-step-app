import React, { useState } from 'react';
import {Form} from 'react-bootstrap'

const StepThree = () => {
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  return (
    <div style={{display: "flex",}}>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email Confirm</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter password Confirm"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm}
        />
      </Form.Group>
      {/* <Button variant="primary" type="submit">
        Submit
      </Button> */}
    </Form>
  </div>
  )
}
export default StepThree;
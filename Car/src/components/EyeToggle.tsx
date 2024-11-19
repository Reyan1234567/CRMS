import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FaEye } from "react-icons/fa";

const EyeToggle = () => {
  const [isVisible, setVisible] = useState(true);
  const handleClick=()=>setVisible(!isVisible)
  return (
    <>
      <InputGroup>
        <Form.Control type={isVisible ? "text" : "password"} />
        <Button onClick={handleClick} variant="secondary">
          {isVisible ? <FaEye /> : <FaEyeSlash />}
        </Button>
      </InputGroup>
    </>
  );
};

export default EyeToggle;

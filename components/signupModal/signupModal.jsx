import {React , useState} from "react";
import { Modal, Input, Row, Checkbox, Button, Text, Link } from "@nextui-org/react";
import { Mail } from "../loginModal/Mail";
import { Password } from "../loginModal/Password";
import {BiUser} from 'react-icons/bi'

export default function SignupModal() {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
      <Button auto color="default" shadow onPress={handler}>
        Sign Up
      </Button>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to
            <Text b size={18}>
              <span> </span>ABCourses
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
        <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="First Name"
            contentLeft={<BiUser/>}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Last Name"
            contentLeft={<BiUser/>}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            contentLeft={<Password fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Confirm password"
            contentLeft={<Password fill="currentColor" />}
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={closeHandler}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

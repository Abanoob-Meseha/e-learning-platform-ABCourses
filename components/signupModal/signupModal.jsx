import {React , useState} from "react";
import { Modal, Input, Row, Checkbox, Button, Text, Link } from "@nextui-org/react";
import { Mail } from "../loginModal/Mail";
import { Password } from "../loginModal/Password";
import {BiUser} from 'react-icons/bi'
import {signup_Email_password , createUserDocumentFromAuth} from '../../firebase/firebaseConfig'
import { useRouter } from 'next/router';


const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default function SignupModal() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSignUp = async () => {
    // event.preventDefault();
    if(password != confirmPassword){
      alert("passwords doesn't match")
      return;
    }

    try {
      const {user} = await signup_Email_password(email , password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
      closeHandler();
      router.push('/');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };
  // form change handler
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div>
      <Button auto color="default" shadow onPress={handler}>
        Sign Up
      </Button>
      <form onSubmit={handleSignUp}>
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
            placeholder="User Name"
            contentLeft={<BiUser/>}
            name="displayName"
            value={displayName}
            onChange={handleChange}
            required
            />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            contentLeft={<Mail fill="currentColor" />}
            value={email}
            name='email'
            onChange={handleChange}
            required
            />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            contentLeft={<Password fill="currentColor" />}
            value={password}
            name="password"
            onChange={handleChange}
            required
            />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Confirm password"
            contentLeft={<Password fill="currentColor" />}
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            required
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
          <Button auto onPress={handleSignUp}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
      </form>
    </div>
  );
}

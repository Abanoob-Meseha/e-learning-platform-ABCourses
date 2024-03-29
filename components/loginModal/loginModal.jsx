import {React , useState , useContext} from "react";
import { Modal, Input, Row, Checkbox, Button, Text, Link ,Loading} from "@nextui-org/react";
import { Mail } from "./Mail";
import { Password } from "./Password";
import {
  signin_Email_Password,
} from '../../firebase/firebaseConfig';
import {UserContext} from '../../contexts/user.context'
import { useRouter } from 'next/router';
import { useGlobalState } from '../../pages/_app';


const defaultFormFields = {
  email: '',
  password: '',
};

export default function LoginModal() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [loading , setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useGlobalState('loggedIn')

  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSignin = async () => {
    setLoading(true)
    // event.preventDefault();

    try {
      const { user } = await signin_Email_Password(
        email,
        password
      );
      resetFormFields();
      setCurrentUser(user);
      await router.push('/dashboard').then(closeHandler()).then(setLoggedIn(true))
      
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <Button auto color="default" shadow onPress={handler}>
        Login
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
            placeholder="Email"
            contentLeft={<Mail fill="currentColor" />}
            value={email}
            name='email'
            onChange={handleChange}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            type="password"
            size="lg"
            placeholder="Password"
            contentLeft={<Password fill="currentColor" />}
            value={password}
            name='password'
            onChange={handleChange}
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}><Link href="/">Forgot password?</Link></Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={handleSignin}  >
            {
              loading?
              <Loading color="currentColor" size="sm" />:
              "Sign IN"
            }
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

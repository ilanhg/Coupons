import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  FormGroup,
  Input,
  Label,
  Navbar,
  NavbarBrand,
  Button,
  Form,
  FormFeedback,
  Nav,
} from "reactstrap";
import { BsPersonCircle } from "react-icons/bs";
import {BiLockAlt, BiSolidLock} from "react-icons/bi"
import UserLoginModel from "./../../models/UserLoginModels";
import couponsItemService from "../../services/serviceCoupon";
import { userSignUp } from "../../context/userContext";
import registerLoginAndLogoutService from "../../services/serveUser";

export default function Login() {
  const navigate = useNavigate();

  async function sendToServer(userLogin) {
    console.log("send to server");
    await registerLoginAndLogoutService.login(userLogin);
  }

  async function submit(arg) {
    arg.preventDefault();
    const userLogin = new UserLoginModel(
      arg.target.email.value,
      arg.target.password.value
    );

    sendToServer(userLogin);
    navigate("/home-page");
  }

  function toSignUp() {
    navigate("/registration");
  }

  useEffect(() => {
    console.log("in login");

    couponsItemService.getAllCoupons();
    registerLoginAndLogoutService.getAllUsers();
  }, []);

  return (
    <div className="Login ">
      <Navbar color="dark" dark>
        <Container className="d-flex justify-content-center align-items-center">
          <NavbarBrand href="/home-page">MYCOUPON</NavbarBrand>
        </Container>
      </Navbar>
      <Container>
        <Form onSubmit={submit} className="my-5 d-flex flex-column align-items-center">
          <div className="width:20px">
            <h5 className="text-center">LogIn</h5>
       <div className="text-center fs-1"> <BsPersonCircle/></div>
           

            <FormGroup>
              <BiLockAlt/>
              <Input
                className="rounded-0"
                type="email"
                placeholder="Email ID"
                name="email"
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                className="rounded-0"
                type="Password"
                placeholder="password"
                name="password"
                minLength={8}
                required
              />
            </FormGroup>

         
<div className="d-flex justify-content-center align-items-center ">
            <Button color="link" className="text-decoration-none" onClick={() => navigate("/...")}>
              Create new Account
            </Button>
            <Button color="link" className="text-decoration-none" onClick={() => navigate("/...")}>
            Forgot password?
            </Button>
            </div>
            <Button block color="dark" size="sm">
              LogIn
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

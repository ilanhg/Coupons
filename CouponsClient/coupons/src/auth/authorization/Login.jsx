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
} from "reactstrap";
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
      <Navbar style={{ backgroundColor: "wheat" }}>
        <NavbarBrand href="/">
          <h1>Coupon</h1>
        </NavbarBrand>
      </Navbar>

      <Container className="text-center">
        <h1 className="pt-3">Log In</h1>
        <p className="pt-3">
          <h3>Welcome to project Coupon...</h3>
        </p>
        <Form onSubmit={submit}>
          <FormGroup className="pt-2 ">
            <Label htmlFor=""> Enter Email</Label>
            <Input
              className="w-25 mx-auto "
              type="email"
              placeholder="Email@email.com"
              name="email"
            required/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor=""> Enter password</Label>
            <Input
              className="w-25  mx-auto"
              type="password"
              placeholder="password"
              name="password"
              minLength={8}
           required />
          </FormGroup>
          <Button>Log in </Button>
        </Form>
        <p className="pt-2 text-center ">Forgot your password?</p>
        <Button className="text-center" onClick={toSignUp}>
          Create new Account
        </Button>
        {/* <Button className="text-center" onClick={()=>navigate("/...")}>Create new Account</Button> */}
        <p></p>
        <p className="border border-warning w-50 mx-auto "></p>
        <Button name="g-sign-up " onClick={toSignUp}>
          Sign-Up with Google
        </Button>
      </Container>
    </div>
  );
}

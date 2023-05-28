import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, FormGroup, Input, Label, Navbar,NavbarBrand,Button,Form} from 'reactstrap';
import UserLoginModel from './../../models/UserLoginModels';
import couponsItemService from "../../services/serviceCoupon";
import { userSignUp } from "../../context/userContext";
import registerLoginAndLogoutService from "../../services/serveUser";
export default function Login() {
  const NavigateToHomePage= useNavigate();
  const navigateToSignUp = useNavigate();
  async function sendToServer(userLogin){
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
      NavigateToHomePage('/home-page');
  }

  function toSignUp(){
   navigateToSignUp('/sign-up')
  }
  useEffect(()=>{
    console.log("in login")

    couponsItemService.getAllCoupons();
    registerLoginAndLogoutService.getAllUsers();
  },[])
  return (
    <div className="Login ">
        <Navbar  style={{backgroundColor:"wheat"}}>
          <NavbarBrand href="/"><h1>Coupon</h1></NavbarBrand>
          </Navbar>

      <Container className="text-center" >
      <h1 className="pt-5">Log In</h1>
      <p className="pt-4"><h3>Welcome to project Coupon...</h3></p>
      <Form onSubmit={submit}>
        <FormGroup className="pt-4 ">
          <Label  htmlFor=""> Enter Email</Label>
          <Input  className="w-25 mx-auto " type="email" placeholder="Email " name="email" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor=""> Enter password</Label>
          <Input className="w-25  mx-auto" type="password" placeholder="password" name="password" />
        </FormGroup>
        <Button >Log in  </Button>
        </Form>
        <p className="pt-4 text-center ">Forgot your password?</p>
        <Button className="text-center "onClick={toSignUp}>Create new Account</Button>
       <p></p>
        <p className="border border-danger w-25 mx-auto"></p>
        <Button name="g-sign-up" onClick={toSignUp}>Sign-Up with Google</Button>
 </Container>
    </div>
  );
}
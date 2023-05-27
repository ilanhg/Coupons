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
  async function submit(arg) {
    arg.preventDefault();
    const userLogin = new UserLoginModel(
      arg.target.userName.value,
      arg.target.password.value
    );
    console.log("UserLoginModel")
    console.log(UserLoginModel)
    await registerLoginAndLogoutService.login(userLogin);
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
        <Navbar color="secondary" light expand="md">
          <NavbarBrand href="/"><h1>Coupon</h1></NavbarBrand>
          </Navbar>
     
      <Container >
      <h1 className="pt-5">Log In</h1>
      <p className="pt-4"><h3>Welcome to project Coupon...</h3></p>
      <Form onSubmit={submit}>
        <FormGroup className="pt-4">
          <Label htmlFor=""> Enter User Name</Label>
          <Input  className="w-25 mx-auto " type="text" placeholder="User Name " name="userName" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor=""> Enter password</Label>
          <Input className="w-25  mx-auto" type="password" placeholder="password" name="password" />
        </FormGroup>
        <Button   >Log in  </Button>
        </Form>
        </Container>
        <p className="pt-4 ">Forgot your password?</p>
        <Button onClick={toSignUp}>Create new Account</Button>
       <p></p>
        <p className="border border-danger w-25 mx-auto"></p>
        <Button onClick={toSignUp}>Sign-Up with Google</Button>
    
    </div>
  );
}
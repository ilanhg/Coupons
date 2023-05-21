import React, { useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

import UserLoginModel from './../../models/UserLoginModels';
import couponsItemService from "../../services/serviceCoupon";
import { userSignUp } from "../../context/userContext";
import registerLoginAndLogoutService from "../../services/serveUser";
export default function Login() {
  const NavigateToHomePage= useNavigate();
  const navigateToSignUp = useNavigate();
  async function submit(arg) {
    const userLogin = new UserLoginModel(
      arg.target.userName.value,
      arg.target.password.value
    );
    arg.preventDefault();
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
    <div className="Login">
      <h3>Login</h3>
      <form onSubmit={submit}>
        <label htmlFor=""> Enter userName</label>
        <input type="text" placeholder="userName" name="userName" />
        <label htmlFor=""> Enter password</label>
        <input type="password" placeholder="password" name="password" />
        <button  >Log in</button>
        <p>Forgot password?</p>
        <button onClick={toSignUp}>Create new Account</button>
      </form>
    </div>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";

// import { GoogleLogin } from 'react-google-login';
export default function SignUp() {
  const navigateToRegistration = useNavigate();
  function googleSignUp(){
    navigateToRegistration('/')
  }
  function facebookSignUp(){
    navigateToRegistration('/')
  }
  function submit(){
    navigateToRegistration('/registration')
  }
  return (
<div>
      <h1>Sign Up</h1>
      <p>
        Join Coupon.com for free. No credit card needed.
      </p>
      <form onSubmit={submit}>
      <button onClick={googleSignUp}>Sign Up with Google</button>
      <button onClick={facebookSignUp}>Sign Up with Facebook</button>
        <button>Sign Up</button>
      </form>
      </div>
   
  );
}

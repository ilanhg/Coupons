import React from "react";
import { Link } from "react-router-dom";
import { FormContainer } from "./SignUpStyled";
export default function SignUp() {
  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <p>
        Join Coupon.com for free. No credit card needed. Already have an
        account?
        {/* <Link to ='/' >Log in</Link> */}
      </p>
      <form action="">
        <label htmlFor="">
          <h4>Full Name</h4>
        </label>
        <input type="text" name="" id="" required />
        <label htmlFor="">
          <h4>Password</h4>
        </label>
        <input type="password" name="" id="" required />
        <label htmlFor="">
          <h4>Email</h4>
        </label>
        <input
          type="email"
          name=""
          id=""
          placeholder="example@example.com"
          required
        />
        <label htmlFor="">
          <h4>Gender</h4>
        </label>
        <select name="" id="">
          <option value="">Choose Your Gender</option>
          <option value="">Male</option>
          <option value="">Female</option>
        </select>
        <label htmlFor="">
          <h4>Birth Date</h4>
        </label>
        <input type="date" name="" id="" />
        {/* <button>Sign Up</button> */}
      </form>
    </FormContainer>
  );
}

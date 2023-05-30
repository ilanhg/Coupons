import React, { useEffect, useContext, useState } from "react";
import { userContext, userSignUp } from "../../context/userContext";
import UserModel from "../../models/user-model";
import { useNavigate } from "react-router-dom";
import registerLoginAndLogoutService from "../../services/serveUser";
import { FormGroup, Input, Label,Form, Navbar, NavbarBrand,Button } from "reactstrap";
export default function Registration() {
  const navigate = useNavigate();

   async function submit(arg) {
     arg.preventDefault(); 
    const user = new UserModel(
      undefined,
      arg.target.firstName.value,
      arg.target.lastName.value,
      arg.target.country.value,
      arg.target.email.value,
      arg.target.password.value
    );
   await registerLoginAndLogoutService.register(user);
    navigate("/");
  }

  
  return (
    <div className="Registration">
      {/* {userAndStringCodeProvider()} */}
      <Navbar  style={{backgroundColor:"wheat"}}>
          <NavbarBrand href="/"><h1 >Coupon</h1></NavbarBrand>
          </Navbar>
      <h3>Registration</h3>
      <Form onSubmit={submit}>
        <FormGroup className="pt-2 ">
          <Label  htmlFor=""> Enter First Name</Label>
          <Input className="ps-2 mx-auto " type="text" placeholder="First Name" name="firstName" />
        </FormGroup>
        <FormGroup className="pt-2 ">
          <Label className="ps-2 " htmlFor=""> Enter Last Name</Label>
          <Input  className=" mx-auto " type="text" placeholder="Last Name" name="lastName" />
        </FormGroup>
        <FormGroup className="pt-2 ">
          <Label className="ps-2 " htmlFor=""> Enter Country</Label>
          <Input  className=" mx-auto " type="text" placeholder="Country" name="country" />
        </FormGroup>
        <FormGroup className="pt-2 ">
          <Label className="ps-2 " htmlFor=""> Enter Email</Label>
          <Input  className=" mx-auto " type="email" placeholder="zivi@hotmail.com" name="email" />
        </FormGroup>
        <FormGroup className="pt-2  ">
          <Label className="ps-2 " htmlFor=""> Enter Password</Label>
          <Input  className=" mx-auto " type="password" placeholder="Password" name="password" />
        </FormGroup>
          <Button>Register</Button>
        </Form>
      
    </div>
  );
}

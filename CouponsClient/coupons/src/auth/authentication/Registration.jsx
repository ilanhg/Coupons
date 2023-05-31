import React, { useEffect, useContext, useState } from "react";
import { userContext, userSignUp } from "../../context/userContext";
import UserModel from "../../models/user-model";
import { useNavigate } from "react-router-dom";
import registerLoginAndLogoutService from "../../services/serveUser";
import { FormGroup, Input, Label,Form, Navbar, NavbarBrand,Button,Row ,Col} from "reactstrap";
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
      <Row>
          <Col md={6}>
      <h3 className="text-center">Registration</h3>
      <Form onSubmit={submit}>
        <FormGroup >
          <Label  htmlFor=""> Enter First Name</Label>
          <Input className="ps-2 mx-auto " type="text" placeholder="First Name" name="firstName" required/>
        </FormGroup>
        <FormGroup >
          <Label className="ps-2 " htmlFor=""> Enter Last Name</Label>
          <Input  className="ps-2 mx-auto " type="text" placeholder="Last Name" name="lastName" required/>
        </FormGroup>
        <FormGroup>
          <Label className="ps-2 " htmlFor=""> Enter Country</Label>
          <Input  className=" mx-auto " type="text" placeholder="Country" name="country" required/>
        </FormGroup>
        <FormGroup >
          <Label className="ps-2 " htmlFor=""> Enter Email</Label>
          <Input  className=" mx-auto " type="email" placeholder="zivi@hotmail.com" name="email" required/>
        </FormGroup>
        <FormGroup>
          <Label className="ps-2 " htmlFor=""> Enter Password</Label>
          <Input  className=" mx-auto " type="password" placeholder="Password" name="password" minLength={8} required/>
        </FormGroup>
          <Button className="">Register</Button>
        </Form>
        </Col>
        <Col md={6} className="border-top-0">
        <img src="https://play-lh.googleusercontent.com/sOia17sLqmU01FwdNMOAfIpeEgByAdbkX_2gKXecj1pAwWEHLKy7bI1z8SFuyJJ90N34" width={200} ></img>
        </Col>
        </Row>
      
    </div>
  );
}

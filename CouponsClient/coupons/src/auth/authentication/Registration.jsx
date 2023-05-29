import React, { useEffect, useContext } from "react";
import { userContext, userSignUp } from "../../context/userContext";
import UserModel from "../../models/user-model";
import { useNavigate } from "react-router-dom";
import registerLoginAndLogoutService from "../../services/serveUser";
import { FormGroup, Input, Label,Form, Navbar, NavbarBrand } from "reactstrap";
export default function Registration() {
  const NavigateToLogIn = useNavigate();

   async function submit(arg) {
    const user = new UserModel(
      undefined,
      arg.target.firstName.value,
      arg.target.lastName.value,
      arg.target.country.value,
      arg.target.email.value,
      arg.target.password.value
    );
    await registerLoginAndLogoutService.register(user);
    NavigateToLogIn("/");
    arg.preventDefault();
    
  }
  const userAfterServer = useContext(userContext);
  console.log("first in registration");
  console.log(userAfterServer);
  // submit({age:"800"',birthDate:"00/00/00",city:"ganeden",country:"paras",firstName:"adam",id: 1,imageName:"image",lastName: "hava",password:"start000",userName: "000"})
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
          <Input className="ps-2 " className=" mx-auto " type="text" placeholder="FirstName" name="firstName" />
        </FormGroup>
        <FormGroup className="pt-2 ">
          <Label className="ps-2 " htmlFor=""> Enter Last Name</Label>
          <Input  className=" mx-auto " type="text" placeholder="lastName" name="lastName" />
        </FormGroup>
        <FormGroup className="pt-2 ">
          <Label className="ps-2 " htmlFor=""> Enter Country</Label>
          <Input  className=" mx-auto " type="text" placeholder="country" name="country" />
        </FormGroup>
        <FormGroup className="pt-2 ">
          <Label className="ps-2 " htmlFor=""> Enter email</Label>
          <Input  className=" mx-auto " type="email" placeholder="zivi@hotmail.com" name="email" />
        </FormGroup>
        <FormGroup className="pt-2  ">
          <Label className="ps-2 " htmlFor=""> Enter Password</Label>
          <Input  className=" mx-auto " type="password" placeholder="password" name="password" />
        </FormGroup>
        </Form>
      
    </div>
  );
}

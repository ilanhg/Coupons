import React, { useEffect, useContext } from "react";
import registerLoginAndLogoutService from "../../services/connector";
import { userContext, userSignUp } from "../../context/userContext";
import "./Registration.css";
// import authService from "./../../servics/AuthServics";
// import { useUserAndStringCode } from "../../contexts/AuthenticationProcessContext";
import axios from "axios";
import UserModel from "../../models/user-model";
import { useNavigate } from "react-router-dom";


export default function Registration() {
  const NavigateToCoupons = useNavigate();

   async function submit(arg) {
    const user = new UserModel(
      undefined,
      arg.target.firstName.value,
      arg.target.lastName.value,
      arg.target.age.value,
      arg.target.country.value,
      arg.target.city.value,
      arg.target.birthDate.value,
      arg.target.userName.value,
      arg.target.password.value
    );
    console.log("before");
    // await registerLoginAndLogoutService.register(user);
    console.log("after");
    arg.preventDefault();
    NavigateToCoupons("/");
    
  }
  const userAfterServer = useContext(userContext);
  console.log("first in registration");
  console.log(userAfterServer);
  // submit({age:"800"',birthDate:"00/00/00",city:"ganeden",country:"paras",firstName:"adam",id: 1,imageName:"image",lastName: "hava",password:"start000",userName: "000"})
  return (
      
    <div className="Registration">
      {/* {userAndStringCodeProvider()} */}
      <h3>Registration</h3>
      <form onSubmit={submit}>
        <label htmlFor="">Enter FirstName</label>
        <input type="text" placeholder="FirstName" name="firstName" />
        <label htmlFor=""> Enter lastName</label>
        <input type="text" placeholder="lastName" name="lastName" />
        <label htmlFor=""> Enter age</label>
        <input type="number" placeholder="age" name="age" />
        <label htmlFor=""> Enter country</label>
        <input type="text" placeholder="country" name="country" />
        <label htmlFor="">Enter city</label>
        <input type="text" placeholder="city" name="city" />
        <label htmlFor=""> Enter birthDate</label>
        <input type="text" placeholder="birthDate" name="birthDate" />
        <label htmlFor=""> Enter userName</label>
        <input type="text" placeholder="userName" name="userName" />
        <label htmlFor=""> Enter password</label>
        <input type="password" placeholder="password" name="password" />
        <button >Register</button>
      </form>
    </div>
  );
}

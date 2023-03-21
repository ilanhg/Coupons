import React, { useEffect } from "react";
import registerLoginAndLogoutService from "../../services/connector";
import { userContext, userSignUp } from "../../context/userContext";
import "./Registration.css";
// import authService from "./../../servics/AuthServics";
// import { useUserAndStringCode } from "../../contexts/AuthenticationProcessContext";
import axios from "axios";
import UserModel from "../../models/user-model";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
export default function Registration() {
  const NavigateToCoupons= useNavigate()
  const getAllUsers = async () => {
    const response = await axios.get(
      "http://localhost:4000/api/register/users"
    );
    const data = response.data;
    console.log(data);
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  // let{user,stringCode,register,login,logout} = useUserAndStringCode();
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
      arg.target.imageName.value,
      arg.target.password.value
    );
    registerLoginAndLogoutService.register(user)
    
    // userSignUp.userRegister();
    // console.log(user);
    //const getUserAfterRegistering = await authService.register(user);
    //................>>>
    //console.log("The user is"+`${getUserAfterRegistering}`);
    // console.log(arg);
    // console.log(arg.target);
    // console.log(arg.target.firstName);
    // console.log("onSubmit!!!!!!!!!!!!!!");
    arg.preventDefault();
    NavigateToCoupons('/insert-coupons');
  }
  const userAfterServer = useContext(userContext);
  console.log("first")
    console.log(userAfterServer)
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
        <input type="password" placeholder="userName" name="password" />
        <label htmlFor=""> Enter imageName</label>
        <input type="text" placeholder="userName" name="imageName" />
        <button>Register</button>
      </form>
    </div>
  );
}

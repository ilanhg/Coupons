import React, { createContext } from "react";
import { useState, useContext } from "react";

 export let userSignUp = {
  signUpUser : {age:"800",birthDate:"00/00/00",city:"ganeden",country:"paras",firstName:"adam",id: 1,imageName:"image",lastName: "hava",password:"start000",userName: "000"},
  string: "",
  userRegister: function (getUser) {
    console.log(getUser)
    console.log("first")
    this.signUpUser = getUser;
    console.log("second")
    console.log(this.signUpUser);
  },
  userLogin: () => null,
  userLogout: () => null,
};
export const userContext = createContext(userSignUp);
// export const useUser = () => useContext(userContext);
// const useProvider = ({ children }) => {
//   let userRegister = (users)=>{
//     let userEmail= SignUpUser.userEmail
//   }
// };

// export default userSignUp
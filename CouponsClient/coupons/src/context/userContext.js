import React, { createContext } from "react";
import { useState, useContext } from "react";

 export let userSignUp = {
  signUpUser : {},
  string: "",
  userRegister: function (getUser) {
    console.log(getUser)
    this.signUpUser = getUser;
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
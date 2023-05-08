import React, { createContext } from "react";
import { useState, useContext } from "react";

 export let userSignUp = {
  signUpUser : { id : 1,
    firstName : 'Ilan',
    lastName : 'Goldstein',
    country : 'Israel',
    email : 'ilanhgold@gmail.com',
    password : '123321'},
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

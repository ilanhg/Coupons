import React, { createContext } from "react";
import { useState, useContext } from "react";

 export let userSignUp = {
  signUpUser : {}, 
  userRegister: function (getUser) {
    this.signUpUser = getUser;
  },
  getAllUsers:[],
  getUsers: function (usersArray) {
    console.log("in userContext")
    console.log(usersArray)
    this.getAllUsers = usersArray;
  },
  userLogin: () => null,
  userLogout: () => null,
};
export const userContext = createContext(userSignUp);

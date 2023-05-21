import axios from "axios";
import { userSignUp } from "../context/userContext";

const registerLoginAndLogoutService = {
  register: async (user) => {
    const response = await axios.post("http://localhost:4000/api/register/users",user);
    const stringCode = response.data;
    console.log(stringCode)
    console.log("sjsjw")
    userSignUp.userRegister(stringCode)
    return stringCode;
  },
  getAllUsers: async () => {
    const response = await axios.get("http://localhost:4000/api/register/users");
    const userData = response.data;
    console.log("get all users from service")
    console.log(userData)
    userSignUp.getUsers(userData)
    return userData;
  },
  login: async (userLoginModel) => {
    console.log("this is the "+userLoginModel.userName);
    const response = await axios.post("http://localhost:4000/api/login",userLoginModel);
    console.log("this is the "+userLoginModel.password);
    const stringCode = response.data;
    return stringCode;
    
  },
  logout: async () => {},
};
export default registerLoginAndLogoutService;
import axios from "axios";
import { userSignUp } from "../context/userContext";

const registerLoginAndLogoutService = {
  register: async (user) => {
    const response = await axios.post("http://localhost:4000/api/register/users",user);
    const regData = response.data;
    userSignUp.userRegister(regData)
    return regData;
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
    console.log("user login username");
    console.log(userLoginModel)
    const response = await axios.post("http://localhost:4000/api/register/login",userLoginModel);
    userSignUp.userRegister(response.data)
    console.log("login user");
    console.log(response.data);
    
  },
  logout: async () => {},
};
export default registerLoginAndLogoutService;
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
  login: async (userLoginModel) => {
    const response = await axios.post("",userLoginModel);
    const stringCode = response.data;
    return stringCode;
    
  },
  logout: async () => {},
};
export default registerLoginAndLogoutService;
import React from 'react'
import './Login.css'
// import authService from './../../servics/AuthServics';
import registerLoginAndLogoutService from './../../services/connector'
export default function Login() {
  async function submit(arg) {
    const userLoginModel = {
      userName: arg.target.userName.value,
      password: arg.target.password.value
    };
    console.log(userLoginModel);
    const getUserLoginModelAfterLogin = await registerLoginAndLogoutService.Login(userLoginModel);
    console.log("The user is"+`${getUserLoginModelAfterLogin}`);
    console.log(arg);
    console.log(arg.target);
    console.log(arg.target.userName);
    console.log(arg.target.password);
    console.log("onSubmit!!!!!!!!!!!!!!");
    arg.preventDefault();
  }
  return (
    <div className='Login'>
       <h3>Login</h3>
      <form onSubmit={submit}>
        <label htmlFor=""> Enter userName</label>
        <input type="text" placeholder="userName" name='userName' />
        <label htmlFor=""> Enter password</label>
        <input type="password" placeholder="password" name='password' />
      
      </form>
    </div>
  )
}
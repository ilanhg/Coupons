import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Registration from '../../auth/authentication/Registration'
import HomePage from '../Pages/HomePage';
import InsertCoupons from '../InsertCoupons';
import Login from '../../auth/authorization/Login';
import SignUp from '../../auth/authentication/SignUp';
import PartOfChat from '../PartOfChat/PartOfChat';
export default function Routting(){
  return (
   <Routes>
    <Route path='/registration'  element={<Registration/>}/>
    <Route path='/sign-up'  element={<SignUp/>}/>
    <Route path='/'  element={<Login/>}/>
    <Route path='/insert-coupons'  element={<InsertCoupons/>}/>
    <Route path='/home-page'  element={<HomePage/>}/>
    <Route path='/part-of-chat'  element={<PartOfChat/>}/>
   </Routes>
  )
}
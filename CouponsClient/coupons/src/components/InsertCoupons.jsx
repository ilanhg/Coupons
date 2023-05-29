import React, { useContext } from "react";
import "./InsertCoupons.css";
import {  useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { userContext } from "../context/userContext";
import ItemModel from "../models/items-models";
import CouponsModel from "../models/coupon-modle";
import couponsItemService from "../services/serviceCoupon";
import {Form, Button, Col, Container, FormGroup, Input, Label, Row } from "reactstrap";
export default function InsertCoupons() {
  const [user,setUser] = useState();
  const getUserFromContext = useContext(userContext);
  const navigatingToHomePage = useNavigate(); 
  useEffect(() => {
    setUser(getUserFromContext.signUpUser);
  }, []);
  async function sendCouponToServer(coupon){
    await couponsItemService.sendOneCoupon(coupon);

  }
  async function submit(arg){
    const coupon = new CouponsModel(
      undefined,
      user.id,
      arg.target.couponCode.value,
      arg.target.couponName.value,
      arg.target.expirationDate.value,
      arg.target.couponWebsite.value,
      arg.target.couponAmount.value,
      arg.target.couponPrice.value
      )
    arg.preventDefault();
    console.log(" coupon before to send ......1111");
    sendCouponToServer(coupon);
   navigatingToHomePage('/home-page');
  }

  return (
    <div className="AddEmployee Box">
      <h5>Add Coupon</h5>
      <form onSubmit={submit}>
        <label>couponName</label>
      <input
          type="text"
          autoFocus placeholder="couponName" name="couponName"/>
        <br/>
         <label>couponCode</label>
        <input
          type="text"
          placeholder="couponCode" name="couponCode"/>
        <br />
       <label>expirationDate</label>
        <input
          type="text" name="expirationDate"
          placeholder="expirationDate"
        />
        <br />
       <label>couponWebsite</label>
        <input
          type="text"
        name="couponWebsite"
          placeholder="couponWebsite"
        />
        <br />
        <label>couponAmount </label>
        <input
          type="number"
        
          name="couponAmount"
          placeholder="couponAmount"
        />
        <br />
        <label>couponPrice</label>
        <input
          type="number"
        
          name="couponPrice"
          placeholder="couponPrice"
        />
        <br />
        <button type="submit">Add coupon</button>
        <br />
      </form>
    </div>
  );
  //   return (
     
  //     <Container
  //     className="bg-Light"
  //     fluid= "sm"
  //   >
  //     <h4 className="d-grid gap-2 col-2 mx-auto text-primary" > Insert Coupons</h4>
  // <Form onSubmit={submit}  >
  //   <Row>
  //     <Col md={6}>
  //       <FormGroup>
  //         <Label >
  //         Enter Coupon Code
  //         </Label>
  //         <Input
  //           name="couponCode"
  //           type="text"
  //         />
  //       </FormGroup>
  //     </Col>
  //     <Col md={6}>
  //       <FormGroup>
  //         <Label >
  //         Enter Coupon Name
  //         </Label>
  //         <Input
  //           name=" couponName"
  //           type="text"
  //         />
  //       </FormGroup>
  //     </Col>
  //   </Row>
  //   <Row>
  //     <Col md={6}>
  //       <FormGroup>
  //         <Label >
  //         Enter Expiration Date
  //         </Label>
  //         <Input
  //           name="expirationDate"
  //           type="date"
  //         />
  //       </FormGroup>
  //     </Col>
  //   </Row>
  //   <Row>
  //     <Col md={4}>
  //       <FormGroup>
  //         <Label >
  //         Enter Coupon Website
  //         </Label>
  //         <Input
  //           name="couponWebsite"
  //           type="text"
  //         />
  //       </FormGroup>
  //     </Col>
  //     <Col md={4}>
  //       <FormGroup>
  //         <Label >
  //         Enter Coupon Amount
  //         </Label>
  //         <Input
  //           name="couponAmount"
  //           type="text"
  //         />
  //       </FormGroup>
  //     </Col>
  //     <Col md={4}>
  //       <FormGroup>
  //         <Label >
  //         Enter Coupon Price
  //         </Label>
  //         <Input
  //           name="couponPrice"
  //           type="text"
  //         />
  //       </FormGroup>
  //     </Col>
  //   </Row>
  //   <Button className="bg-primary d-grid gap-2 col-2 mx-auto">
  //   save coupons
  //   </Button>
  // </Form>
  // </Container> 

  //   )
}
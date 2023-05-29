import React, { useContext } from "react";
import "./InsertCoupons.css";
import { Form, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { userContext } from "../context/userContext";
import ItemModel from "../models/items-models";
import CouponsModel from "../models/coupon-modle";
import couponsItemService from "../services/serviceCoupon";
import { Button, Col, Container, FormGroup, Input, Label, Row } from "reactstrap";
export default function InsertCoupons() {
  const [user,setUser] = useState('ziv');
  const getUserFromContext = useContext(userContext);
  const navigatingToHomePage = useNavigate();
  console.log(getUserFromContext.signUpUser.firstName+ 'this is line 11')

  const getAllUsers = async () => {
    const response = await axios.get(
      "http://localhost:4000/api/register/users"
    );
    const data = response.data;
    console.log(data);
  };
  useEffect(() => {
    getAllUsers();
    setUser(getUserFromContext.signUpUser);
    console.log(user+"user line23")
    console.log(getUserFromContext.signUpUser.firstName+ 'this is line 21')
  }, [getUserFromContext]);
async function submit(arg) {
    // const item = new ItemModel(undefined, user, coupon)
    const coupon = new CouponsModel(
      undefined,
      undefined,
      arg.target.couponCode.value,
      arg.target.couponName.value,
      arg.target.expirationDate.value,
      arg.target.couponWebsite.value,
      arg.target.couponAmount.value,
      arg.target.couponPrice.value)
   await couponsItemService.sendOneCoupon(coupon);
   navigatingToHomePage('/home-page');
   arg.preventDefault();
  }
    return (
      <Container
      className="bg-Light"
      fluid= "sm"
    >
      <h4 className="d-grid gap-2 col-2 mx-auto text-primary" > Insert Coupons</h4>
  <Form onSubmit={submit}  >
    <Row>
      <Col md={6}>
        <FormGroup>
          <Label for="CouponCode">
          Enter Coupon Code
          </Label>
          <Input
            name="CouponCode"
            type="text"
          />
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for=" CouponName">
          Enter Coupon Name
          </Label>
          <Input
            name=" CouponName"
            type="text"
          />
        </FormGroup>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <FormGroup>
          <Label for="quantityOfCoupons">
          Enter quantity Of Coupons
          </Label>
          <Input
            name="quantityOfCoupons"
            type="text"
          />
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="ExpirationDate">
          Enter Expiration Date
          </Label>
          <Input
            name="ExpirationDate"
            type="date"
          />
        </FormGroup>
      </Col>
    </Row>
    <Row>
      <Col md={4}>
        <FormGroup>
          <Label for="CouponWebsite">
          Enter Coupon Website
          </Label>
          <Input
            name="CouponWebsite"
            type="text"
          />
        </FormGroup>
      </Col>
      <Col md={4}>
        <FormGroup>
          <Label for="CouponAmount">
          Enter Coupon Amount
          </Label>
          <Input
            name="CouponAmount"
            type="text"
          />
        </FormGroup>
      </Col>
      <Col md={4}>
        <FormGroup>
          <Label for=" CouponPrice">
          Enter Coupon Price
          </Label>
          <Input
            name="CouponPrice"
            type="text"
          />
        </FormGroup>
      </Col>
    </Row>
    <Button className="bg-primary d-grid gap-2 col-2 mx-auto">
    save coupons
    </Button>
  </Form>
  </Container>

    )}
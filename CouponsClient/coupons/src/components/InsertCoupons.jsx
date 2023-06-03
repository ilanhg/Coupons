import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { userContext } from "../context/userContext";
import ItemModel from "../models/items-models";
import CouponsModel from "../models/coupon-modle";
import couponsItemService from "../services/serviceCoupon";
import {
  Form,
  Button,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
export default function InsertCoupons() {
  const [user, setUser] = useState();
  const getUserFromContext = useContext(userContext);
  const navigate = useNavigate();
  useEffect(() => {
    setUser(getUserFromContext.signUpUser);
  }, []);
  async function sendCouponToServer(coupon) {
    await couponsItemService.sendOneCoupon(coupon);
  }
  async function submit(arg) {
    arg.preventDefault();
    console.log(arg.target.couponCode.value)
    // console.log(arg.target.couponCode.value)
    const coupon = new CouponsModel(
      undefined,
      user.id,
      arg.target.couponCode.value,
      arg.target.couponName.value,
      arg.target.expirationDate.value,
      arg.target.couponWebsite.value,
      arg.target.couponPrice.value
    );
    // //
    console.log(coupon);
    // //   console.log(" coupon before to send ......1111");
    sendCouponToServer(coupon);
    navigate("/home-page");
  }
  const initialUrl = "http://";

  return (
    <Container className="bg-Light" fluid="sm">
      <h4 className="d-grid gap-2 col-2 mx-auto text-primary">
        {" "}
        Insert Coupons
      </h4>
      <Form onSubmit={submit}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label>Enter Coupon Code</Label>
              <Input name="couponCode" type="text" required/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Enter Coupon Name</Label>
              <Input name="couponName" type="text" required/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label>Enter Expiration Date</Label>
              <Input name="expirationDate" type="date" required/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="website">Enter Coupon Website</Label>
              <Input type="url" id="website" name="couponWebsite"   placeholder="https://www.website.com" defaultValue={initialUrl} required/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Enter Coupon Price</Label>
              <Input name="couponPrice" type="text" required/>
            </FormGroup>
          </Col>
        </Row>
        <Button  className="bg-primary d-grid gap-2 col-2 mx-auto">
          save coupons
        </Button>
      </Form>
    </Container>
  );
}

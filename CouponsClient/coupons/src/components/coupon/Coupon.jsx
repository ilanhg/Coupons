import React from 'react'
import { Link } from 'react-router-dom';
import {Card, CardBody,  CardTitle,  CardSubtitle,  CardText, Button,CardLink, CardGroup} from "reactstrap";

export default function Coupon({coupon}) {
  console.log('coupon component')
  console.log(coupon)
  return (
    <div>
      
            <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">{coupon.couponName}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
          {coupon.expirationDate} 
          <CardLink href={coupon.couponWebsite}>
          {coupon.couponWebsite}</CardLink>
      {coupon.couponPrice}
          </CardSubtitle>
          <CardText>
            this is my coupon. 
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom';
import {Card, CardBody,  CardTitle,  CardSubtitle,  CardText, Button,CardLink} from "reactstrap";

export default function Coupon({coupon}) {
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
      {/* "couponName": "גיפט קארד כללי",
        "expirationDate": "2020-04-28T21:00:00.000Z",
        "couponWebsite": "https://buyme.co.il",
        "couponAmount": 1,
        "couponPrice": 500 */}
    </div>
  )
}

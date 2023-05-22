import React from "react";
import {Card, CardBody,  CardTitle,  CardSubtitle,  CardText, Button,} from "reactstrap";
export default function User({ user }) {
  return (
    <div>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">{user.firstName}{user.lastName}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
          {user.age} {user.country}
      {user.city}
          </CardSubtitle>
          <CardText>
            this is me, hello. 
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    
    </div>
  );
}

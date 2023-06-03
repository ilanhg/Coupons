import React from "react";
import { useState, useContext, useEffect } from "react";
import { Link, unstable_useBlocker, useNavigate } from "react-router-dom";
import { itemsContext } from "../../context/itemContext";
import { couponContext } from "../../context/couponsContext";
import { userContext, userSignUp } from "../../context/userContext";
import User from "../user/User";
import Coupon from "../coupon/Coupon";
import { BsFacebook, BsInstagram, BsSearch } from "react-icons/bs";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Col,
  FormGroup,
  InputGroupText,
  InputGroup,
  NavbarText,
  Row,
  UncontrolledCarousel,
  CardGroup,
} from "reactstrap"


export default function HomePage() {
  const [items, setItems] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [collapsed, setCollapsed] = useState(true);
  const [modal, setModal] = useState(false);
  const [userProfile, setUserProfile] = useState();


  const toggle = () => setModal(!modal);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const getItemsFromContext = useContext(itemsContext);
  const users = useContext(userContext);
  const couponsItem = useContext(couponContext);
  const navigatingToHomePage = useNavigate();
  console.log(getItemsFromContext);

  useEffect(() => {
    setItems(getItemsFromContext.items);
    setAllUsers(users.getAllUsers);
    setCoupons(couponsItem.couponList);
    setUserProfile(users.signUpUser);
    console.log(allUsers);
    console.log(coupons);

  
    console.log(couponsItem.couponList);
  }, [getItemsFromContext, users, couponsItem]);

  useEffect(() => {
    console.log("getAllUsers-couponsIteamList num 2");
    console.log(couponsItem.couponList);
  }, []);

      return (
    
        <>
     <Container fluid Row>
        <Navbar color="dark" dark fixed="top">
          <Col sm={0.5}></Col>
          <Col sm={6} className="d-flex justify-content-end ">
            <NavbarBrand href="/home-page">MYCOUPON</NavbarBrand>
          </Col>
          <Col sm={2}></Col>
          <NavItem>
          <NavbarBrand className="me-auto">
            <img
              alt="Sample"
              src="https://picsum.photos/300/200"
              height={"50px"}
              onClick={toggle}
            />
          </NavbarBrand>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
              <User user={userProfile} />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
            </ModalFooter>
          </Modal>
        </NavItem>
          <Col sm={2}>
            <Nav>
              <InputGroup>
                <Input bsSize="sm" placeholder="Search..." type="search" />
                <Button color="light">
                  <BsSearch />
                </Button>
              </InputGroup>
            </Nav>
          </Col>
          <NavbarToggler onClick={toggleNavbar} className="me-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <Row className="text-center d-flex justify-content-center ">
                <Col sm={2} className="text-center">
                  <NavLink href="/home-page/">Home Page</NavLink>
                </Col>
                <Col sm={2} className="text-center">
                  <NavLink href="/components/">Components</NavLink>
                </Col>
                <Col sm={2} className="text-center">
                  <NavLink href="/insert-coupons/">Add Coupons</NavLink>
                </Col>
                <Col sm={2} className="text-center">
                  <NavLink href="/">Log Out</NavLink>
                </Col>
              </Row>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
      <UncontrolledCarousel
        items={[
          {
            altText: "Tour coupons",
            caption: "Tour coupons",
            key: 1,
            src: "https://cdn.pixabay.com/photo/2016/12/29/16/59/wine-1938924_640.jpg",
          },
          {
            altText: "Shopping coupons",
            caption: "Shopping coupons",
            key: 2,
            src: "https://cdn.pixabay.com/photo/2015/08/25/11/50/shopping-mall-906721_1280.jpg",
          },
          {
            altText: "Hotel Coupons",
            caption: "Hotel Coupons",
            key: 3,
            src: "https://cdn.pixabay.com/photo/2021/06/01/12/39/beach-6301597_640.jpg",
          },
        ]}
      />
      <CardGroup>
         {coupons.map((coupon) => {
          return (
            <>
              <Coupon key={coupon.id} coupon={coupon} />
            </>
          );
        })}
        </CardGroup>
      <Navbar
        className="bg-dark d-flex justify-content-center align-items-center "
        fixed="bottom"
      >
        <Nav className="d-flex justify-content-center align-items-center">
          <NavbarText className="text-light">Follow us</NavbarText>
          <NavItem>
            {" "}
            <BsInstagram className="text-light" />
          </NavItem>
          <NavItem>
            {" "}
            <BsFacebook className="text-light" />
          </NavItem>
        </Nav>
      </Navbar>
   

     
      </>
        
      
  );
}

import React from "react";
import { useState, useContext, useEffect } from "react";
import { Link, unstable_useBlocker, useNavigate } from "react-router-dom";
import { itemsContext } from "../../context/itemContext";
import { couponsItem, itemContext } from "../../context/couponsContext";
import { userContext, userSignUp } from "../../context/userContext";
import User from "../user/User";
import Coupon from "../coupon/Coupon";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

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
  const couponsItem = useContext(itemContext);
  const navigatingToHomePage = useNavigate();
  console.log(getItemsFromContext);

  useEffect(() => {
    setItems(getItemsFromContext.items);
    setAllUsers(users.getAllUsers);
    setCoupons(couponsItem.couponItemList);
    setUserProfile(users.signUpUser);
    console.log(allUsers);
    console.log(coupons);

    console.log(items);
    console.log(users.getAllUsers);
    console.log("getAllUsers-couponsIteamList");
    console.log(couponsItem.couponItemList);
  }, [getItemsFromContext, users, couponsItem]);

  useEffect(() => {
    console.log("getAllUsers-couponsIteamList num 2");
    console.log(couponsItem.couponItemList);
  }, []);

      return (
        <div className="container bg-white h-100">
      <Navbar color="success" light top style={{height:'30%',
      width:"100%"}}>
        <NavbarBrand className="me-auto">
        <img alt="Sample" src="https://picsum.photos/300/200" height={'50px'} onClick={toggle} />
        </NavbarBrand>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <User user= {userProfile}/>
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
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/home-page/">Home Page</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/insert-coupons/">Insert Coupons</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/log-out/">Log Out</NavLink>
            </NavItem>
            <NavItem>
              
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
      // <div className="items">
      //   {items.map((item) => {
      //     return (
      //       <>
      //         <div key={item.userId}>{item.userId}</div>
      //         <div key={item.couponId}>{item.couponId} </div>
      //       </>
      //     );
      //   })}

      //   {allUsers.map((user) => {
      //     return (
      //       <>
      //         <User key={user.id} user={user} />
      //       </>
      //     );
      //   })}

      //   {coupons.map((coupon) => {
      //     return (
      //       <>
      //         <Coupon key={coupon.id} coupon={coupon} />
      //       </>
      //     );
      //   })}
      // </div>
  );
}

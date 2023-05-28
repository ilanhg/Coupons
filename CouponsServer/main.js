const express = require("express");
const server = express();
//require('dotenv').config()
server.use(express.json());
const cors = require("cors");
const userControler = require("./controlers/user-controler");
const loginUsersController = require("./controlers/user-login-controler")
const couponsController = require('./controlers/coupons-controler')
// const PORT = process.env.PORT || 4000;
 const PORT= 4000;
const SERVER_DISPLAY = 3000;
const connectToRealMysql = require('./conactting_to_real_data_database_mysql/conactting-to-real-data-database-mysql')

server.use(cors());



// "http://localhost:4000/api/register/users/"
server.use("/api/register/users", userControler);
// //http://localhost:4000/api/register/login
server.use("/api/register/login", loginUsersController);
// /api/atuh/login
// /api/atuh/register
//http://localhost:4000/api/coupons
server.use("/api/coupons",couponsController);
server.use("*", (request, response) => {
  response.json("not found!!")
})

server.listen(PORT, () => {
  // setInterval(() => {
  console.log("main.js is up and running");
  console.log(`http://localhost:${PORT}`);
  // }, SERVER_DISPLAY);
});



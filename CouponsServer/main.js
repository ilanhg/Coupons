const express = require("express");
const server = express();
const cors = require("cors");
server.use(express.json());
const userControler = require("./controlers/user-controler");
const couponsController = require('./controlers/coupons-controler')
const PORT = 4000;
const SERVER_DISPLAY= 3000;
// const connectToRealMysql = require('./conactting_to_real_data_database_mysql/conactting-to-real-data-database-mysql')
// const cors = server.use(cors({
//    origin: ['http://localhost:3000/','ziv','bar','emanuel'...]
// }));
server.use(cors());

// "http://localhost:4000/api/register/users/"
server.use("/api/register/users",userControler);
//http://localhost:6750/api/register/users
// server.use("/api/register/users",registerUsersController);
// //http://localhost:6750/api/login/users
// server.use("/api/register/login/users",loginUsersController);
 //http://localhost:4000/api/coupons
server.use("/api/coupons",couponsController);
server.use("*",(request,response)=>{
  response.json("not found!!")
})

server.listen(PORT, () => {
  setInterval(() => {
      console.log("main.js is up and running");
  }, SERVER_DISPLAY);
});



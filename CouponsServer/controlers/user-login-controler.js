const express = require("express");
const bcrypt = require('bcryptjs');
const UserLoginModel = require("../models/UserLoginModels")
const router = express.Router();
// const loginUsersDal = require("../data-access-layers/user-login-access-layer");
const conactting = require("./../conactting_to_real_data_database_mysql/conactting-to-real-data-database-mysql");


router.post("/", async (request, response) => {
  console.log("userLogin" + request.body.userName);
  console.log("PasswordLogin" + request.body.password);
  const sql = `SELECT * FROM user WHERE userName = ${request.body.userName} AND password = ${request.body.password}`;



  const allUsers = await conactting.savingCouponsIntoRealMysqlOrGettingCouponsFromRealMysql(sql);


  const user = allUsers[0];

  /*
    if(!user) {
     res.send({message: "user not found"})/res.json()
      return console.log("user not found")
    }
  
   const areSame = await bcrypt.compare(request.body.password, user.password)

    if(!areSame) {
      res.send({message:"password are not the same"})/res.json()
      return console.log("password are not the same")
    }
  */

  // if (user) {
  //   console.log("user exist" + user);
  // } else {
  //   console.log("we dont have a user");
  // }
  // console.log("first user" + user)
  // return res.send({user, ok: true})
  return user;
});


module.exports = router;
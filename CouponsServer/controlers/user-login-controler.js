const express = require("express");
const bcrypt = require("bcryptjs");
const UserLoginModel = require("../models/UserLoginModels");
const router = express.Router();
// const loginUsersDal = require("../data-access-layers/user-login-access-layer");
const conactting = require("./../conactting_to_real_data_database_mysql/conactting-to-real-data-database-mysql");

router.post("/", async (request, response) => {
  console.log("userLogin" + request.body.email);
  console.log("PasswordLogin" + request.body.password);
  const sql = `SELECT * FROM users WHERE  email = "${request.body.email}" and password = "${request.body.password}"`;
  const allUsers = await conactting.savingCouponsIntoRealMysqlOrGettingCouponsFromRealMysql(sql);
  const user = allUsers[0];
      console.log(user)
  // if (!user) {
  //   response.json({
  //     message: "user not found"
  //   })
  // }
  if (user) {
    response.json(user)
  }

});

module.exports = router;
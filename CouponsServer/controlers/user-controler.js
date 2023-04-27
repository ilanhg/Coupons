const express = require("express");
const UserModel = require("../models/user-model");
const router = express.Router();
const registeredUsersDal = require("./../data-access-layers/user-access-layer");
router.get("/", async (request, response) => {
  const AllUsers = await registeredUsersDal.allRegisterUsersFromMysqlDatabase();
  console.log("user controller-allusers");
  console.log(AllUsers)
  response.json(AllUsers);
});

router.get("/:id", async (request, response) => {
  const idAfterParseToNumber = Number(request.params.id);
  const user = await registeredUsersDal.oneRegisterUserFromMysqlDatabase(idAfterParseToNumber);
  console.log("user controller-user");
  console.log(user)
  response.json(user);
});

router.post("/", async (request, response) => {
  const {
    id,
    firstName,
    lastName,
    age,
    country,
    city,
    birthDate,
    userName,
    password,
  } = request.body;
  const user = new UserModel(
    id,
    firstName,
    lastName,
    age,
    country,
    city,
    birthDate,
    userName,
    password
  );
  console.log("user from client" + user);
  const userAfterAdded = await registeredUsersDal.addUserToMysqlDatabase(user);
  response.json(userAfterAdded);
});

module.exports = router;
const express = require("express");
// const { Router } = require("express");
const UserModel = require("../models/user-model");
const router = express.Router();
const registeredUsersDal = require("./../data-access-layers/user-access-layer");

router.get("/", (request, response) => {
  console.log("we are win");
  const users = registeredUsersDal.registerUsers();
  response.json(users);
});

router.get("/:id", (request, response) => {
  const idAfterParseToNumber = Number(request.params.id);
  const user = registeredUsersDal.oneRegisterUser(idAfterParseToNumber);
  response.json(user);
});

router.post("/", (request, response) => {
  console.log(request.body)
  // const {id, firstName} = request.body
  const addNewId = new UserModel(
    request.body.id,
    request.body.firstName,
    request.body.lastName,
    request.body.age,
    request.body.country,
    request.body.city,
    request.body.birthDate,
    request.body.imageName,
    request.body.userName,
    request.body.password
  );
  console.log(addNewId)
  const user = registeredUsersDal.addUserToMockDatabase(addNewId);
  response.json(user);
});

module.exports = router;

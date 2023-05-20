const express = require("express");
const UserModel = require("../models/user-model");
const router = express.Router();
const registeredUsersDal = require("./../data-access-layers/user-access-layer");
router.get("/", async (request, response) => {
  const AllUsers = await registeredUsersDal.allRegisterUsersFromMysqlDatabase();
  console.log("user controller-allusers");
  console.log(AllUsers);
  response.json(AllUsers);
});

router.get("/:id", async (request, response) => {
  const idAfterParseToNumber = Number(request.params.id);
  const user = await registeredUsersDal.oneRegisterUserFromMysqlDatabase(
    idAfterParseToNumber
  );
  console.log("user controller-user");
  console.log(user);
  response.json(user);
});

router.post("/", async (request, response) => {

  const user = new UserModel(
    request.body.id,
      request.body.firstName,
      request.body.lastName,
      request.body.age,
      request.body.country,
      request.body.city,
      request.body.birthDate,
      request.body.userName,
      request.body.password
    );
 try {console.log(user);
  const userAfterAdded = await registeredUsersDal.addUserToMysqlDatabase(user);
  if(userAfterAdded)
{response.json(userAfterAdded);}}
catch(error){
  response.json(error.message)
}
});

module.exports = router;

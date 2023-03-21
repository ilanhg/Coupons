const allRegistered = require("../mock_database/users-database");

function registerUsers(){
    const allUsers = allRegistered.allRegisteredUsers;
   return allUsers;
}
function oneRegisterUser(id){
   const allUsers = allRegistered.allRegisteredUsers;
   const user = allUsers.find(user=>user.id ===id)
  return user;
}

function addUserToMockDatabase(user){
   // user.id =addNewId;
   // user.id = createNewIdToUser();
   const afterUser = allRegistered.addUserToMockDatabase(user);
   return afterUser;

}
 module.exports = {registerUsers, oneRegisterUser, addUserToMockDatabase}




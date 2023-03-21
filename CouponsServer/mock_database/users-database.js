const UserModel= require("../models/user-model");
const allRegisteredUsers = [];

allRegisteredUsers.push(new UserModel(1,"adam","hava","800","paras","ganeden","00/00/00","image","000","start000"));
allRegisteredUsers.push(new UserModel(2,"avereham","sata","900","Kenenan","beshava","11/11/11","image","111","start111"));

function  addUserToMockDatabase(user){
  console.log(user);
    allRegisteredUsers.push(user);
    return user;
  }

module.exports = {allRegisteredUsers,addUserToMockDatabase};



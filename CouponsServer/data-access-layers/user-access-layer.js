const bcrypt = require("bcryptjs");

const connectingToRealDataDatabaseMysql = require("./../conactting_to_real_data_database_mysql/conactting-to-real-data-database-mysql");
const { response } = require("express");
async function allRegisterUsersFromMysqlDatabase() {
  const sql = `SELECT * FROM users`;
  const allUsers =
    await connectingToRealDataDatabaseMysql.savingCouponsIntoRealMysqlOrGettingCouponsFromRealMysql(
      sql
    );
  return allUsers;
}
async function oneRegisterUserFromMysqlDatabase(id) {
  const sql = `SELECT * FROM users WHERE  id=${id}`;
  const allUsers =
    await connectingToRealDataDatabaseMysql.savingCouponsIntoRealMysqlOrGettingCouponsFromRealMysql(
      sql
    );
  const user = allUsers[0];
  return user;
}

async function addUserToMysqlDatabase(user) {
  console.log("this is user in user access layer");

  console.log(user);

  const hashpassword = await bcrypt.hash(user.password, 10);

  const sql = `INSERT INTO users (firstName ,lastName ,country ,email ,password) VALUES ("${user.firstName}","${user.lastName}","${user.country}","${user.email}","${hashpassword}" )`;
  // console.log("this is sql");

  const info =
    await connectingToRealDataDatabaseMysql.savingCouponsIntoRealMysqlOrGettingCouponsFromRealMysql(
      sql
    );
  return info.insertId ? user : null;
}
module.exports = {
  allRegisterUsersFromMysqlDatabase,
  oneRegisterUserFromMysqlDatabase,
  addUserToMysqlDatabase,
};

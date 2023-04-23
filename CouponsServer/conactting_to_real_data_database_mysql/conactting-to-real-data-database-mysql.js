const mysql = require("mysql");
const connectToRealMysql = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  // database: "UsersCouponMysqlDatabase",
   database: "UsersDatabase",
});
connectToRealMysql.connect((err) => {
  if (err) {
    console.log(err);
  }});
  function savingCouponsIntoRealMysqlOrGettingCouponsFromRealMysql(sql) {
    return new Promise((resolve, reject) => {
      connectToRealMysql.query(sql, (err, result) => {
        if (err) {
          reject(err);
          return;
        } else {
          resolve(result);
        }
      });
    });
   }
  module.exports = {
    savingCouponsIntoRealMysqlOrGettingCouponsFromRealMysql,
  };
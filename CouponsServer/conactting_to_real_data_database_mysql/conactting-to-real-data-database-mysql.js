const mysql = require("mysql");
const connectToRealMysql = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "UsersCouponMysqlDatabase",
});
connectToRealMysql.connect((err) => {
  if (err) {
    console.log(err);
  }
  const promise =  new Promise((resolve, reject) => {})
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
  //   const sql = `CREATE TABLE couponsTable (nameOfCoupon  VARCHAR(255),quantityOfCoupons int,expirationDateOfCoupon  VARCHAR(255),nameOfCompanyCoupon  VARCHAR(255),nameOfBusinessCoupon  VARCHAR(255),nameWebsiteOfCouponCode VARCHAR(255),numberOfCouponCode int)`;
  // connectToRealMysql.query(sql,(err, result) =>{
  //     if (err) throw err;
  //     console.log("coupons created");
  //   });
  //::
  //   connectToRealMysql.query(
  //     "CREATE DATABASE UsersCouponMysqlDatabase",
  //     function (err, result) {
  //       if (err) throw err;
  //       console.log("Database created");
  //     }
  //   );
});
//   module.exports = {connectToRealMysql}

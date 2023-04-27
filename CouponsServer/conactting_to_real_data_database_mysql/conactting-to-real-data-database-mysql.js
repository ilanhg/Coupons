const mysql = require("mysql");
const connectToRealMysql = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  // database: "UsersCouponMysqlDatabase",
  database: process.env.DATABASE,
});
connectToRealMysql.connect((err) => {
  if (err) {
    console.log(err);
  }
});
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
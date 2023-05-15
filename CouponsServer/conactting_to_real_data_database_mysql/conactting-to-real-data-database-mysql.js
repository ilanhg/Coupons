const mysql = require("mysql");
const connectToRealMysql = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  // port: 3306,
  database: "usersdatabase",
  // host: process.env.HOST,
  // user: process.env.USER,
  // password: process.env.PASSWORD,
  // database: process.env.DATABASE,
});
connectToRealMysql.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("connected");
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

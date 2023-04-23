const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "UserModelDB",
});
db.connect((err) => {
  if (err) {
    console.log(err);
  }
  app.get("/createdb", (req, res) => {
    let sql = "CREATE DATABASE UserModelDB";
    db.query(sql, (err) => {
      if (err) {
        throw err;
      }

      console.log("Database created");
    });
  });
//   connectToRealMysql.query(
//     "CREATE DATABASE UserModelDB",
//     function (err, result) {
//       if (err) throw err;
//       console.log("usermodel Database created");
//     }
//   );

  function savingCouponsIntoRealMysqlOrGettingCouponsFromRealMysql(sql) {
    return new Promise((resolve, reject) => {
      db.query(sql, (err, result) => {
        if (err) {
          reject(err);
          return;
        } else {
          resolve(result);
        }
      });
    });
  }
});
module.exports = {
  savingCouponsIntoRealMysqlOrGettingCouponsFromRealMysql,
};

const conactting_to_real_data_database_mysql = require("../conactting_to_real_data_database_mysql/conactting-to-real-data-database-mysql");
async function allCoupons() {
  
  const sql = `SELECT * FROM usersCoupons`;
  const coupons =
    await conactting_to_real_data_database_mysql.savingCouponsIntoRealMysqlOrGettingCouponsFromRealMysql(sql);
  return coupons;
}
async function oneCoupons(id) {
  const sql = `SELECT * FROM userscoupons WHERE  id=${id}`;
  const coupons =
    await conactting_to_real_data_database_mysql.savingCouponsIntoRealMysqlOrGettingCouponsFromRealMysql(sql);
  const coupon = coupons[0];
  return coupon;
}
//  couponCode varchar(50),couponName varchar(50),expirationDate date,couponWebsite varchar(50),couponAmount int ,couponPrice decimal)`; 
async function addCouponToUsersCouponMysqlDatabase(coupon) {
  console.log("in addCouponToUsersCouponMysqlDatabase" )
  console.log(coupon)
  const sql = `INSERT INTO usersCoupons (FK_userId, couponCode,couponName,expirationDate,couponWebsite,couponAmount,couponPrice) VALUES (${coupon.FK_userId},"${coupon.couponCode}","${coupon.couponName}","${coupon.expirationDate}","${coupon.couponWebsite}","${coupon.couponAmount}","${coupon.couponPrice}")`;
  // const info = await conactting_to_real_data_database_mysql.savingCouponsIntoRealMysqlOrGettingCouponsFromRealMysql(sql);
  // console.log(info)
  // coupon.id = info.insetId;
  //  return info.insertId? coupon:null
 };


module.exports = {allCoupons,oneCoupons,
  addCouponToUsersCouponMysqlDatabase,
};

const conactting_to_real_data_database_mysql = require("../conactting_to_real_data_database_mysql/conactting-to-real-data-database-mysql");
async function allCoupons() {
  const sql_example = `SELECT * FROM table_name`;
  const sql = `SELECT * FROM couponsTable`;
  const coupons =
    await connectOrCreatingToMySQLDb.savingCouponsIntoRealMysqlOrGettingCouponsFromRealMysql(sql);
  return coupons;
}
async function oneCoupons(id) {
  const sql = `SELECT * FROM coupons WHERE  id=&{id}`;
  const coupons =
    await connectOrCreatingToMySQLDb.savingCouponsIntoRealMysqlOrGettingCouponsFromRealMysql(sql);
  const coupon = coupons[0];
  return coupon;
}
async function addCouponToUsersCouponMysqlDatabase(coupon) {
  const sql = `INSERT INTO usersCoupons (numberOfCouponCode,nameOfCoupon,quantityOfCoupons,expirationDateOfCoupon,nameOfCompanyCoupon,nameOfBusinessCoupon,nameWebsiteOfCouponCode,numberOfCouponCode)
    VALUES (${coupon.numberOfCouponCode},${coupon.quantityOfCoupons},
       "${coupon.nameOfCoupon}",
       "${coupon.nameOfCompanyCoupon}",
       "${coupon.nameOfBusinessCoupon}",
       "${coupon.nameWebsiteOfCouponCode}",
       ${coupon.numberOfCouponCode},
       ${coupon.expirationDateOfCoupon}
       )`;
  const info = await connectOrCreatingToMySQLDb.savingCouponsIntoRealMysqlOrGettingCouponsFromRealMysql(sql);
  coupon.id = info.insetId;
  return coupon;
}

module.exports = {allCoupons,oneCoupons,
  addCouponToUsersCouponMysqlDatabase,
};

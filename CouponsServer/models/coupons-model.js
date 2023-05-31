class CouponsModel {
  constructor(
    id,
    FK_userId,
    couponCode,
    couponName,
    expirationDate,
    couponWebsite,
    couponPrice
  ) {
    this.id = id;
    this.FK_userId = FK_userId;
    this.couponCode = couponCode;
    this.couponName = couponName;
    this.expirationDate = expirationDate;
    this.couponWebsite = couponWebsite;
    this.couponPrice = couponPrice;
  }
}
// const sql =`CREATE TABLE usersCoupons(id integer Primary Key auto_increment,  CONSTRAINT FK_userId FOREIGN KEY (id) REFERENCES users(id),couponCode varchar(50),couponName varchar(50),expirationDate date,couponWebsite varchar(50),couponAmount int ,couponPrice decimal)`; 
module.exports = CouponsModel;

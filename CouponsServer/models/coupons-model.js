class CouponsModel {
  constructor(
    id,
    numberOfCouponCode,
    nameOfCoupon,
    quantityOfCoupons,
    expirationDateOfCoupon,
    nameOfCompanyCoupon,
    nameOfBusinessCoupon,
    nameWebsiteOfCouponCode
  ) {
    this.id = id;
    this.numberOfCouponCode = numberOfCouponCode;
    this.nameOfCoupon = nameOfCoupon;
    this.quantityOfCoupons = quantityOfCoupons;
    this.expirationDateOfCoupon = expirationDateOfCoupon;
    this.nameOfCompanyCoupon = nameOfCompanyCoupon;
    this.nameOfBusinessCoupon = nameOfBusinessCoupon;
    this.nameWebsiteOfCouponCode = nameWebsiteOfCouponCode;
  }
}
module.exports = CouponsModel;

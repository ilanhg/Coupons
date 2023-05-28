class CouponsModel {
    constructor(
      id,
      FK_userId,
      couponCode,
      couponName,
      expirationDate,
      couponWebsite,
      couponAmount,
      couponPrice
    ) {
      this.id = id;
      this.FK_userId = FK_userId;
      this.couponCode = couponCode;
      this.couponName = couponName;
      this.expirationDate = expirationDate;
      this.couponWebsite = couponWebsite;
      this.couponAmount = couponAmount;
      this.couponPrice = couponPrice;
    }
  }
  export default CouponsModel;
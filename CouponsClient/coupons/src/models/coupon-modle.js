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
  export default CouponsModel;
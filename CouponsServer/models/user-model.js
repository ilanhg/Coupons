class UserModel {
    constructor(
      id,
      firstName,
      lastName,
      age,
      country,
      city,
      birthDate,
      imageName,
      userName,
      password,
      email,
      phoneNumber
    ) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.country = country;
      this.city = city;
      this.birthDate = birthDate;
      this.imageName = imageName;
      this.userName = userName;
      this.password = password;
      this.email = email;
      this.phoneNumber = phoneNumber;
    }
  }
  module.exports = UserModel;
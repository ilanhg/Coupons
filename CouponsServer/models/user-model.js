class UserModel {
  constructor(
    id,
    firstName,
    lastName,
    age,
    country,
    city,
    birthDate,
    userName,
    password,    
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.birthDate = birthDate;
    this.userName = userName;
    this.password = password;
  }
}
module.exports = UserModel;
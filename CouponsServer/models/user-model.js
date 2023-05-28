class UserModel {
  constructor(
    id,
    firstName,
    lastName,
    country,
    email,
    password,    
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.email = email;
    this.password = password;
  }
}
module.exports = UserModel;
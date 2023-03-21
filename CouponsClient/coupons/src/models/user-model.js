class UserModel {
    constructor(id,firstName,lastName,age,country,city,birthDate,imageName, userName, password) {
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
    }
}
export default UserModel;

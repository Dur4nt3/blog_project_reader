export default class SignupError {
    constructor(formLevel, username, name, password, cpassword) {
        this.formLevel = formLevel;
        this.username = username;
        this.name = name;
        this.password = password;
        this.cpassword = cpassword;
    }
}
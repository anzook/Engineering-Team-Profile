class Employee {
constructor (name, id, email) {
    this.name = name,
    this.id = id,
    this.email = email
}
getRole() {
    return "Employee";
}
getName() {
    return this.name;
}
getId() {
    return this.id;
}
getEmail() {
    return this.email;
}
}

module.exports = Employee;
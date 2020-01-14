const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, school);
        this.school = school;
    }
    getSchool() {
        return this.getGithub;
    }
    getRole() {
        return "Intern";
    }
    buildCard() {
        return `
        <div class="col-sm-4">
                        <div class="card">
                            <div class="card-header">
                            <i class="fas fa-user-graduate"></i>  ${this.name}, Intern
                              </div>
                              <ul class="list-group list-group-flush">
                              <li class="list-group-item"><i class="fas fa-id-card-alt"></i>  ${this.id}</li>
                              <li class="list-group-item"><i class="fas fa-inbox"></i>  ${this.email}</li>
                                <li class="list-group-item"><i class="fas fa-university"></i>  ${this.school}</li>
                              </ul>
                        </div>
                      </div>
        `
    }
}



module.exports = Intern;
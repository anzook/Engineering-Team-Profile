const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, officeNumber);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
    buildCard() {
        return `
        <div class="col-sm-4">
                        <div class="card">
                            <div class="card-header">
                            <i class="fas fa-user-tie"></i>  ${this.name}, Manager
                              </div>
                              <ul class="list-group list-group-flush">
                                <li class="list-group-item"><i class="fas fa-id-card-alt"></i>  ${this.id}</li>
                                <li class="list-group-item"><i class="fas fa-inbox"></i>  ${this.email}</li>
                                <li class="list-group-item"><i class="fas fa-door-open"></i>  ${this.officeNumber}</li>
                              </ul>
                        </div>
                      </div>
        `
    }
}



module.exports = Manager;
const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, github);
        this.github = github;
    }
    getGithub() {
        return this.getGithub;
    }
    getRole() {
        return "Engineer";
    }
    buildCard() {
        let link = "https://github.com/" + this.github;
        return `
        <div class="col-sm-4">
                        <div class="card">
                            <div class="card-header">
                            <i class="fas fa-user-cog"></i>  ${this.name}, Engineer
                              </div>
                              <ul class="list-group list-group-flush">
                              <li class="list-group-item"><i class="fas fa-id-card-alt"></i>  ${this.id}</li>
                              <li class="list-group-item"><i class="fas fa-inbox"></i>  ${this.email}</li>
                                <li class="list-group-item"><i class="fab fa-github"></i>  <a href="${link}" class="card-link">GitHub Profile</a></li>
                              </ul>
                        </div>
                      </div>
        `
    }
}



module.exports = Engineer;
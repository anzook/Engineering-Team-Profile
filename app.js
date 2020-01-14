const inquirer = require('inquirer');
const fs = require("fs");
const util = require("util");

const Eng = require("./lib/engineer");
const Mgr = require("./lib/manager");
const Stu = require("./lib/intern");
const pageGen = require("./lib/pageGen");

let team = [];
let empIdnum = 100;

function promptUser() {
    console.log("Welcome - Please begin building your team below...");

    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Manager Name?"
        }, {
            name: "email",
            type: "input",
            message: "Manager Email?"
        }, {
            name: "office",
            type: "input",
            message: "Manager's Office?"
        }
    ])
        .then(function (answer) {
            empID = "M" + empIdnum;
            let emp = new Mgr(answer.name, empID, answer.email, answer.office)
            empIdnum++;
            team.push(emp);
            addEmp();
        });
}

function addEmp() {
    inquirer.prompt(
        {
            name: "action",
            message: "Would you like to add an employee?",
            type: "list",
            choices: ["Engineer", "Intern", "Done"]
        }
    ).then(function (answer) {
        if (answer.action === "Engineer") {
            inquirer.prompt([
                {
                    name: "name",
                    type: "input",
                    message: answer.action + " Name?"
                }, {
                    name: "email",
                    type: "input",
                    message: answer.action + " Email?"
                }, {
                    name: "github",
                    type: "input",
                    message: "Engineer's Github profile?",
                }
            ])
                .then(function (answer) {
                        empID = "E" + empIdnum;
                        let emp = new Eng(answer.name, empID, answer.email, answer.github);
                    empIdnum++;
                    team.push(emp);
                    addEmp();
                });

        } else if (answer.action === "Intern") {
            inquirer.prompt([
                {
                    name: "name",
                    type: "input",
                    message: answer.action + " Name?"
                }, {
                    name: "email",
                    type: "input",
                    message: answer.action + " Email?"
                }, {
                    name: "school",
                    type: "input",
                    message: "Student's school?",
                }
            ])
                .then(function (answer) {
                        empID = "I" + empIdnum;
                        let emp = new Stu(answer.name, empID, answer.email, answer.school);    
                    empIdnum++;
                    team.push(emp);
                    addEmp();
                });


        }
        if (answer.action === "Done") {
            let html = pageGen.pageGen(team);

            // await writeFileAsync("./output/team.html", html);
            fs.writeFile("./output/team.html", html, function(err) {

                if (err) {
                  return console.log(err);
                }
              
                console.log("Your team was created successfully!");
              });
            
        } else {
        
        }

    });
}

promptUser();
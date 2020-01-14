const inquirer = require('inquirer');
const fs = require("fs");
// const util = require("util");

//local requirements in the form of constructors
const Eng = require("./lib/engineer");
const Mgr = require("./lib/manager");
const Stu = require("./lib/intern");
const pageGen = require("./lib/pageGen");

//initialize team array and counter for IDs
let team = [];
let empIdnum = 100;

function promptUser() {
    console.log("Welcome - Please begin building your team below...");
//build starts with team manager
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
            //makes an ID in the form of 'M100' or 'E102' depending on role and team size
            empID = "M" + empIdnum;
            //build new manager with constructor
            let emp = new Mgr(answer.name, empID, answer.email, answer.office)
            //add to the employee id counter
            empIdnum++;
            //add employee to array
            team.push(emp);
            //continue to next function
            addEmp();
        });
}

function addEmp() {
    //allows user to add additional team members or quit and build report
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
                    message: "Engineer's Github profile ID?",
                }
            ])
                .then(function (answer) {
                    //see manager for employee creation notes
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
            //calls function to build report passing the built array of employees
            let html = pageGen.pageGen(team);

            //writes report to output
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
//initializes program run
promptUser();
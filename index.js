const fs = require('fs'); 
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const template = require('./src/template');
const team = [];

const addManager = () => {
    inquirer.prompt([
       {
           type: 'input',
           name: 'name',
           message: 'Please enter the name of the manager of this team',
           validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter the manager's name!");
                return false; 
            }
        }
       },
       {
           type: 'input',
           name: 'id',
           message: "Please enter the manager's ID",
           validate: nameInput => {
            if  (isNaN(nameInput)) {
                console.log ("Please enter the manager's ID!")
                return false; 
            } else {
                return true;
            }
        }
        },
        {
           type: 'input',
           name: 'email',
           message: "Please enter the manager's email address",
           validate: email => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            } else {
                console.log ('Please enter an email!')
                return false; 
            }
        }
        },
        {
           type: 'input',
           name: 'officeNumber',
           message: "Please enter the manager's office number",
           validate: nameInput => {
            if  (isNaN(nameInput)) {
                console.log ('Please enter an office number!')
                return false; 
            } else {
                return true;
            }
        }
        }
    ])
    .then(managerInput  =>{
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber)
        team.push(manager);
        console.log(manager);
        addEmployee()
    })
}

const addEmployee = () => {
    console.log(`Adding employees to the team`);
    inquirer.prompt([
        {
           type: "list",
           name: "addemployee",
           message: "Would you like to add team members?",
           choices: ["Engineer", "Intern", "team is complete"],
        }
    ])
    .then(function (data) {
        switch (data.addemployee) {
            case "Yes, add an engineer":
                addEngineer();
                break;

            case "Yes, add an intern":
                addIntern();
                break;
            case "No, my team is complete":
                compileTeam();
                break;
        }
    })
}

const addEngineer = () => {
     inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the engineer?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter an engineer's name!");
                    return false; 
                }
            }
         },
         {
            type: 'input',
            name: 'id',
            message: "Please enter the engineers ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the engineer's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
         },
         {
            type: 'input',
            name: 'email',
            message: "Please enter the engineers email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
         },
         {
            type: 'input',
            name: 'github',
            message: "Please enter the engineers github username.",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the employee's github username!")
                }
            }
         }
    ])
    .then(engineerInput  =>{
        const  { name, id, email, github } = engineerInput; 
        const engineer = new Engineer (name, id, email, github)
        team.push(Engineer);
        console.log(Engineer);
        addEmployee()
    })
}

const addIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the intern?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter an intern's name!");
                    return false; 
                }
            }
         },
         {
            type: 'input',
            name: 'id',
            message: "Please enter the intern's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the intern's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
         },
         {
            type: 'input',
            name: 'email',
            message: "Please enter the intern's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
         },
         {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!")
                }
            }
         }
    ])
    .then(internInput  =>{
        const  { name, id, email, school } = internInput; 
        const intern = new Intern (name, id, email, school)
        team.push(Intern);
        console.log(Intern);
        addEmployee()
    })
}

// function  {
//     fs.writeFile('',  , (err) =>
//     err ? console.error(err) : console.log('html completed'))
// }

// // initializing the application
// function init() {
// 
// }
// // Function call to initialize app
// init();
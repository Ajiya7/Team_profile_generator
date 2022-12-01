const fs = require('fs'); 
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const template = require('./src/template');
const { default: CheckboxPrompt } = require('inquirer/lib/prompts/checkbox');

const addManager = () => {
    inquirer.prompt([
       {
           type: 'input',
           name: 'name',
           message: 'Please enter the name of the manager of this team',
       },
       {
           type: 'input',
           name: 'id',
           message: "Please enter the manager's ID",
        },
        {
           type: 'input',
           name: 'email',
           message: "Please enter the manager's email address",
        },
        {
           type: 'input',
           name: 'officeNumber',
           message: "Please enter the manager's office number",
        }
    ])
    .then(managerInput  =>{
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber)
        console.log(manager); 
    })
}

const addEmployee = () => {
    console.log(`Adding employees to the team`);
    return inquirer.prompt([
        {
           type: "checkbox",
           name: "role",
           message: "Please choose your employee's role",
           choices: ["Engineer", "Intern"],
        },
        {
           type: 'input',
           name: 'name',
           message: "What's the name of the employee?", 
        },
        {
           type: 'input',
           name: 'id',
           message: "Please enter the employee's ID.",
        },
        {
           type: 'input',
           name: 'email',
           message: "Please enter the employee's email.",
        },
        {
           type: 'input',
           name: 'github',
           message: "Please enter the employee's github username.",
           when: (input) => { input.role === "Engineer";},
        },
        {
           type: 'input',
           name: 'school',
           message: "Please enter the intern's school",
           when: (input) => input.role === "Intern",
        },
    ])
    .then(employeeData => {
        let { name, id, email, role, github, school} = employeeData; 
        let employee; 
        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }
    })
}

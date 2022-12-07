const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/template");
const team = [];

const addManager = async () => {
  await inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the name of the manager of this team",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the manager's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the manager's ID",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter the manager's ID!");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the manager's email address",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("Please enter an email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office number",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter an office number!");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "list",
        name: "addemployee",
        message: "Would you like to add team members?",
        choices: ["Engineer", "Intern", "team is complete"],
      },
    ])
    .then(async (managerInput) => {
      const { name, id, email, officeNumber, addemployee } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);
      team.push(manager);
      console.log(manager);
      if (addemployee === "Engineer") {
        await addEngineer()
      } else if (addemployee === "Intern") {
        await addIntern()
      } else{
        completeteam()
      }
    });
};

const addEngineer = async () => {
  await inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What's the name of the engineer?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter an engineer's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the engineers ID.",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter the engineer's ID!");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the engineers email.",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("Please enter an email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Please enter the engineers github username.",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the employee's github username!");
          }
        },
      },
      {
        type: "list",
        name: "addemployee",
        message: "Would you like to add team members?",
        choices: ["Engineer", "Intern", "team is complete"],
      },
    ])
    .then(async (engineerInput) => {
      const { name, id, email, github, addemployee } = engineerInput;
      const engineer = new Engineer(name, id, email, github);
      team.push(engineer);
      console.log(engineer);
      if (addemployee === "Engineer") {
        await addEngineer()
      } else if (addemployee === "Intern") {
        await addIntern()
      } else{
        completeteam()
      }
    });
};

const addIntern = async () => {
  await inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What's the name of the intern?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter an intern's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the intern's ID.",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter the intern's ID!");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the intern's email.",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("Please enter an email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Please enter the intern's school",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the intern's school!");
          }
        },
      },
      {
        type: "list",
        name: "addemployee",
        message: "Would you like to add team members?",
        choices: ["Engineer", "Intern", "team is complete"],
      },
    ])
    .then(async (internInput) => {
      const { name, id, email, school, addemployee } = internInput;
      const intern = new Intern(name, id, email, school);
      team.push(intern);
      console.log(intern);
      if (addemployee === "Engineer") {
        await addEngineer()
      } else if (addemployee === "Intern") {
        await addIntern()
      } else{
        completeteam()
      }
      //}
    });
};

const completeteam = () => {
  const html = generateHTML(team);
  fs.writeFile("./dist/index.html", html, (err) =>
    err ? console.error(err) : console.log("html completed")
  );
};

addManager()
  .then((res) => {
    return generateHTML(team);
  })
  .then((pageHTML) => {})
  .catch((err) => {
    console.log(err);
  });

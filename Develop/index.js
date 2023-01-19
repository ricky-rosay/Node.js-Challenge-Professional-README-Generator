// TODO: Include packages needed for this application
//Requiring packages needed
const fs = require("fs");
const inquirer = require("inquirer");
const { resolve } = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a title for your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project.",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter a description of your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps needed to install your project?",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("Please enter the steps for installing your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "What is the use of your project?",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter the use for your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contributors",
    message: "Who are the contributors of this project?",
    validate: (contributorsInput) => {
      if (contributorsInput) {
        return true;
      } else {
        console.log("Please list the contributors for this project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "tests",
    message: "What are some tests you can run for this project?",
    validate: (testingInput) => {
      if (testingInput) {
        return true;
      } else {
        console.log("Please provide instructions on how to test your project!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "What license would you like to use for your project?",
    choices: ["None", "MIT", "Apache 2.0", "GNU GPL v3.0"],
    validate: (licenseInput) => {
      if (licenseInput) {
        return true;
      } else {
        console.log("Please select a license for you project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log(
          "Please enter your GitHub username so others may contact you!"
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email so others may contact you!");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
const writeToFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./generatedREADME.md", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
      });
    });
  });
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    console.log(data);
    let fileContent = generateMarkdown(data);
    writeToFile(fileContent);
  });
}

// Function call to initialize app
init();

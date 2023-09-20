// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateREADME = require("./utils/generateMarkdown.js"); // need to require generateMarkdown js 

 // Create an array of questions for user input
const questions = () => { 
  return inquirer
    .prompt([
     
      {
        type: "input",
        message: "What is the name of your application?",
        name: "title",
      },
      {
        type: "input",
        message: "What is the description of your application?",
        name: "description",
      },
      {
        type: "input",
        message: "What are the installation instructions for your app?",
        name: "installation",
      },
      {
        type: "input",
        message: "What is the usage information for your application?",
        name: "usage",
      },
      {
        type: "input",
        message: "What are the contribution guidelines for your application?",
        name: "contribution",
      },
      {
        type: "input",
        message: "What are the test instructions for your application?",
        name: "test",
      },
      {
        type: "rawlist",
        message: "Which license option do you want?",
        name: "license",
        choices: ["Apache", "Boost" , "GNUGLP" , "MIT", "Mozilla"],
      },
      {
        type: "input",
        message: "What is your Github user name?",
        name: "github",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
    ])

    .then((data) => {
      console.log(data);
   

      fs.writeFile("SAMPLEREADME.md", generateREADME(data), (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Readme was created");
        }
      });
    });
};


module.exports = questions;
questions()




// // // TODO: Create a function to initialize app
// function init() {}

// // // Function call to initialize app
// init();

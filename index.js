const inquirer = require("inquirer");
const fs = require("fs");

// const { userQuestions } = require("./questions.js");
// const { renderMarkdown } = require ("./render.js");



const { generateMarkdown } = require ("./generateMarkdown.js");

function renderQuestions(data){
    
const questions = [
    {
        type: "input",
        name: "title",
        message: "Lets generate a ReadMe file! First off, what is the title of your Project?",
    },
    {
        type: "input",
        name: "description",
        message: "Sounds great! Give me a well thought out description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Wow, impressive project you got there! What are the steps for installation?",
    },
    {
        type: "input",
        name: "usage",
        message: "What is this project used for? And to what extent is it able to be used?",
    },
    // {
    //     type: "list",
    //     name: "licenses",
    //     message: "What are the licenses that you've obtained for your project?",
    //     choices: "",
    // },
    {
        type: "input",
        name: "contributers",
        message: "Who all contributed to this jaw-dropping project?",
    },
    {
        type: "input",
        name: "tests",
        message: "What are some tests for your application that can be ran for quality assurance, and how could we run them?",
    },
    {
        type: "input",
        name: "githubUsername",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "userEmail",
        message: "Whats your email that anyone can reach you at?",
    },
]}

function fs.writeFile(questions, response) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((inquirerResponses) == {
        writeToFile("READMETEST3.md", generateMarkdown({ ...inquirerResponses}));
    })
}

init();

// async function generateReadMe(){

// }

// generateReadMe();






// function to write README file
function writeFileAsync(userQuestions, response) {
    return new Promise((resolve, reject) =>{
        fs.writeFile(filename, filedata, function(err){
            if(err){
                reject(err);
            } else {
                resolve();
            }
        })
    })    
}


// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();

// writeFileAsync("readmetest.md", ).then(() => {
//     console.log("Done");
// })
const inquirer = require("inquirer");


function userQuestions() {
    return inquirer.prompt([
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
            name: "Usage",
            message: "What is this project used for? And to what extent is it able to be used?",
        },
        {
            type: "list",
            name: "Licenses",
            message: "What are the licenses that you've obtained for your project?",
            choices: "",
        },
        {
            type: "input",
            name: "Contributing",
            message: "Who all contributed to this jaw-dropping project?",
        },
        {
            type: "input",
            name: "Tests",
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
    ])

}
module.exports = {
    userQuestions
}
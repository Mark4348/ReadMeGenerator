const inquirer = require("inquirer");


function userQuestions() {
    return inquirer.prompt([
        {
            type: "input",
            name: "description",
            message: "",
        },
        {
            type: "input",
            name: "installation",
            message: "",
        },
        {
            type: "input",
            name: "Usage",
            message: "",
        },
        {
            type: "list",
            name: "Licenses",
            message: "",
            choices: "",
        },
        {
            type: "input",
            name: "Contributing",
            message: "",
        },
        {
            type: "input",
            name: "Tests",
            message: "",
        },
        {
            type: "input",
            name: "Questions",
            message: "",
        },

    ])

}
module.exports = {
    userQuestions
}
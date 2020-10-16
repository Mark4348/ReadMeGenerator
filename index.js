
const { userQuestions } = require ("./questions");
const { generateMarkdown } = require("./generateMarkdown");
const { writeFileAsync } = require("./writer");

//function to grab files 
async function generateFile(){
    try {
        const answers = await userQuestions();
        const profileMarkdown = generateMarkdown(answers);
        await writeFileAsync(answers.title + ".md", profileMarkdown);
        console.log("Done");
    } catch(err){
        console.log("Something went wrong! Please try again!")
    }
}

// function call to initialize program
generateFile();

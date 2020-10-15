// function to generate markdown for README
function generateMarkdown(response) {
  const {title, description, installation, usage, contributers, tests, githubUsername, userEmail, license} = response;
  return `
  #${title}
  ___________________________________________________________________
  ##Description
  ___________________________________________________________________
  ${description}

 
  ##Table of Contents


  ___________________________________________________________________
  
  ###Steps for installation
  ___________________________________________________________________
  ${installation}
  
  
  
  ###Usage
  ___________________________________________________________________
  ${usage}
  
  
 
  ###Contributers
  ___________________________________________________________________
  ${contributers}
  

  ###Testing processes
  ___________________________________________________________________
  ${tests}
  

  ###Licenses
  ___________________________________________________________________
  ${license}
  


  ###Where you can reach me at:
  ___________________________________________________________________

  ####Check out my github! https://github.com/${githubUsername}

  ####Shoot me an email: ${userEmail}
`;
}

module.exports = {
  generateMarkdown
}

const str = generateMarkdown({title: "Project", description:"Hello",
installation: "Hello", usage: "Hello", contributers: "hello", tests:"Hello",
license:"Hellow", githubUsername: "Hello", userEmail: "Hello"})
console.log(str);
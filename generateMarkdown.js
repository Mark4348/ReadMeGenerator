// function to generate markdown for README
function generateMarkdown(response) {
<<<<<<< HEAD
  const {title, description, installation, usage, contributors, tests, license, githubUsername, userEmail} = response;
  return `

  # ${title}
 
  ## Description
  ___________________________________________________________________
  ${description}

  ___________________________________________________________________
  ## Table of Contents
  ___________________________________________________________________
  
  *[Usage](#Usage)</br>
  *[Installation](#Installation)</br>
  *[Contributors](#Contributors)</br>
  *[Testing](#Testing)</br>
  *[Github](#Github)</br>
  *[Contact Me](#Contact)</br>
  *[License](#License)</br>

  ___________________________________________________________________
  ### Steps for installation (#Installation)
  ___________________________________________________________________
  ${installation}
  
  ___________________________________________________________________
  ### (#Usage)
  ___________________________________________________________________
  ${usage}

  ___________________________________________________________________
  ### (#Contributors)
  ___________________________________________________________________
  ${contributors}

  ### (#Testing) processes
  ___________________________________________________________________
  ${tests}

  ___________________________________________________________________
  #### Check out my github!
  ___________________________________________________________________
  https://github.com/${githubUsername} (#Contact)
  ___________________________________________________________________
  #### Shoot me an email:
  ___________________________________________________________________
  ${userEmail}
  ___________________________________________________________________
  ### (#License)
  ___________________________________________________________________
  ${license}

  
=======
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
>>>>>>> 44beaf2638bb95bdae6c256c5dabf1f124bb663b
`;
}

module.exports = {
<<<<<<< HEAD

 generateMarkdown }
=======
  generateMarkdown
}

const str = generateMarkdown({title: "Project", description:"Hello",
installation: "Hello", usage: "Hello", contributers: "hello", tests:"Hello",
license:"Hellow", githubUsername: "Hello", userEmail: "Hello"})
console.log(str);
>>>>>>> 44beaf2638bb95bdae6c256c5dabf1f124bb663b

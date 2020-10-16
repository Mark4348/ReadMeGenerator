// function to generate markdown for README
function generateMarkdown(response) {
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

  
`;
}

module.exports = {

 generateMarkdown }

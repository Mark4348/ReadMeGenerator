function renderMarkdown(response){
    const {title, description, installation, usage, contributers, tests, questions, license, githubUsername, userEmail} = response;
    return  `

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
`
}
module.exports = {
    renderMarkdown
}

//Testing
// const str = renderMarkdown({title: "asdf", installation:"asdf", usage:"asdf", contributers: "asdf", tests:"asdf", license:"asdf", userEmail:"asdf"})

// console.log(str)
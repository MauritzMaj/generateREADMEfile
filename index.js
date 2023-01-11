const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME =
({Title, Description, Installation, Usage, Contributing, Tests, License,}) =>



`
# ${Title} ${Renderlicensebadge()}

## table of contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)


## <a {name="description"></a>Description

${Description}

## <a {name="installation"></a>Installation

${Installation}

## <a {name="usage"></a>Usage

${Usage}


## <a {name="contributing"></a>Contributing

${Contributing}


## <a {name="tests"></a>Tests

${Tests}

## <a {name="license"></a>License 

${Renderlicenseinfo(License)}

## <a {name="questions"></a>Questions

Created by user: ${Username}

https://github.com/${Username}

${Email}
`
;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the title of your project?',
    },

    {
        type: 'input',
        name: 'Description',
        message: 'Please provide a short description of your project.',
       
    },

    {
        type:'input',
        name: 'Installation',
        message: 'Please provide any and all installation instructions required for this project.',
    },

    {
        type: 'input',
        name: 'Usage',
        message: 'Please provide any relevant usage information to your project.',
    },


    {
    
        type: 'input',
        name: 'Contributing',
        message: 'Please provide any relevant contribution guidelines.',
        

    },

    {
    
        type: 'input',
        name: 'Tests',
        message: 'Please provide any relevant test instructions.',
        

    },

    {
    
        type: 'checkbox',
        name: 'License',
        message: 'Please choose the type of license you would like to use for your project.',
        choices: [
            "None",
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            "Boost Software License 1.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0",
            "GNU Affero General Public License v3.0",
            "GNU General Public License v2.0",
            "GNU Lesser General Public License v2.1",
            "Mozilla Public License 2.0",
            "The Unlicense",
        ]
        

    },

    {
    
        type: 'input',
        name: 'Username',
        message: 'What is your Github username?',
        

    },

    {
    
        type: 'input',
        name: 'Email',
        message: 'Please provide your email address',
        

    },



   
  ])

  
  .then((answers) => {
    const READMEPageContent = generateREADME(answers);

    fs.writeFile('README.md', READMEPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });



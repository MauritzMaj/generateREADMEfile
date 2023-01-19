const inquirer = require('inquirer');
const fs = require('fs');
const badges = [

  {
  name:"Apache License 2.0",
  link:"[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  },

  {
  name:"GNU General Public License v3.0",
  link:"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  },

  {
  name:"MIT License",
  link:"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  },

  {
  name:'BSD 2-Clause "Simplified" License',
  link:"[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
  },

  {
  name:'BSD 3-Clause "New" or "Revised" License',
  link:"[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  },

  {
  name:"Boost Software License 1.0",
  link:"[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
  },

  {
  name:"Creative Commons Zero v1.0 Universal",
  link:"[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
  },

  {
  name:"Eclipse Public License 2.0",
  link:"[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)",
  },

  {
  name:"GNU Affero General Public License v3.0",
  link:"[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
  },

  {name:"GNU General Public License v2.0",
  link:"[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
  },

  {name:"GNU Lesser General Public License v2.1",
  link:"[![License: LGPL v2](https://img.shields.io/badge/License-LGPL_v2-blue.svg)](https://www.gnu.org/licenses/lgpl-2.0)",
  },

  {name:"Mozilla Public License 2.0",
  link:"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  },

  {name:"The Unlicense",
  link:"[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
  },

];


function Renderlicensebadge(License)  {

  for (let i=0; i<badges.length; i++) {

      if (License === badges[i].name)
       {
      
    return badges[i].link;
   
    }}
    return ''
  };  

function Renderlicenseinfo(License) {
  console.log(License);


for (let i=0; i <badges.length; i++) {

  if (License == badges[i].name) {
    
  return "This project is covered under the following license: " + License;
}}

 return 'This project has no license';

};


const generateREADME =
({Title, Description, Installation, Usage, Contributing, Tests, License, Username, Email}) =>



`
# ${Title} ${Renderlicensebadge(License)}


## table of contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)


## <a name="description"></a>Description

${Description}

## <a name="installation"></a>Installation

${Installation}

## <a name="usage"></a>Usage

${Usage}


## <a name="contributing"></a>Contributing

${Contributing}


## <a name="tests"></a>Tests

${Tests}

## <a name="license"></a>License 

${Renderlicenseinfo(License)}

## <a name="questions"></a>Questions

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
    
        type: 'list',
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

    fs.writeFile('README_Generated.md', READMEPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });



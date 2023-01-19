
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

    {name:'BSD 2-Clause "Simplified" License',
    link:"[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    },

    {name:'BSD 3-Clause "New" or "Revised" License',
    link:"[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    },

    {name:"Boost Software License 1.0",
    link:"[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    },

    {name:"Creative Commons Zero v1.0 Universal",
    link:"",},

    {name:"Eclipse Public License 2.0",
    link:"[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)",
    },

    {name:"GNU Affero General Public License v3.0",
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

function Renderlicensebadge()  {
    for (i =0; i<badges.length, i++;) {
        if (License =badges[i].name) {

        return badges[i].link;
     
    } else {return ''};

    
    }};  

function Renderlicenseinfo() {

for (i =0; i<badges.length, i++;) {

    if (License =badges[i].name) {

    return "This project is covered under the" + License;
 
    } else { return 'This project has no license';}

}};




// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges ={
    Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    Boost: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    GNUGLP: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
  }
  return badges[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    Apache: '[Apache](http://www.apache.org/licenses/LICENSE-2.0) ',
    Boost: '[Boost](https://www.boost.org/LICENSE_1_0.txt)',
    GNUGLP: '[GNU GLP v3](https://www.gnu.org/licenses/gpl-3.0)',
    MIT: '[MIT](https://opensource.org/licenses/MIT)',
    Mozilla: '[Mozilla](https://opensource.org/licenses/MPL-2.0)',
  }
return licenseLink[license]

}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) 
//   if(license) {
//     return `Licensed under the ${renderLicenseLink(license)} license` } else {
//       return ``
//     }
  





// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  Badge should show up under here:
  ${renderLicenseBadge(data.license)}
  

  ## Desctription
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contributions)
  * [Test](#test)
  * [License](#license)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contribution}

  ## Test
  ${data.test}

  ## License
  
  Licensed under the ${renderLicenseLink(data.license)} license. 


  ## Questions

  If you have any questions about this application, please reach out to me via email at ${data.email}. You can view my GitHub at https://github.com/${data.github}





`;
}

module.exports = generateMarkdown;

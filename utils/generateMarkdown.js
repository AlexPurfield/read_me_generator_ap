// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges ={
    apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    boost: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    gnuplv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
  }
  return badges[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   const licenseLink = {
//     apache:
//     boost:
//     gnuplv3:
//     mit:
//     mozilla:
//   }
// return licenseLink(license)

// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}
//   if(license) {
//     return `Licensed under the ${this.renderLicenseLink(license)} license` } else {
//       return ``
//     }
  





// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  



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
  ${data.license} 


  ## Questions

  If you have any questions about this application, please reach out to me via email at ${data.email}. You can view my GitHub at https://github.com/${data.github}





`;
}

module.exports = generateMarkdown;

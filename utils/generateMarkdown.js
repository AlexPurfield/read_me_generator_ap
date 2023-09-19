// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Desctription
  ${data.description}

  ## Table of Contents
  * [Installation](##installation)
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

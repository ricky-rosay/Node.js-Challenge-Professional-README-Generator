// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    switch (license) {
      case (license = "MIT"):
        return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      case (license = "Apache 2.0"):
        return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
      case (license = "GNU GPL v3.0"):
        return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      case (license = "None"):
        return "";
    }
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    switch (license) {
      case (license = "MIT"):
        return "[MIT License](https://choosealicense.com/licenses/mit/)";
      case (license = "Apache 2.0"):
        return "[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)";
      case (license = "GNU GPL v3.0"):
        return "[GNU GPL v3.0](https://choosealicense.com/licenses/gpl-3.0/)";
      case (license = "None"):
        return "";
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") {
    return "";
  } else {
    return `
  ## License
  ${renderLicenseLink(license)}
   `;
  }
}
//Creating another function to render the license for table of contents
function renderLicenseTOC(license) {
  if (license == "None") {
    return "";
  } else {
    return `* [License](#license)`;
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

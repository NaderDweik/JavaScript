const axios = require("axios"); // Importing axios
const fs = require("fs"); // File system module to write scripts to files

function loadScript(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => {
        console.log(`Script loaded from: ${url}`);
        resolve(response.data); // Returning the loaded script content
      })
      .catch((error) => {
        reject(
          new Error(`Failed to load script from ${url}: ${error.message}`)
        );
      });
  });
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js")
  .then((scriptContent) => {
    // Simulating script execution by saving it to a file
    fs.writeFileSync("lodash.js", scriptContent);
    console.log("Script saved as lodash.js");
  })
  .catch((error) => {
    console.error(error);
  });

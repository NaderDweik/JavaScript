loadScript("script.js")
  .then((script) => {
    console.log(`${script.src} loaded`); // Arrow function handling the resolved value
  })
  .catch((error) => {
    console.log("Error:", error); // Arrow function for error handling
  });

function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load failed for ${url}`));
    document.head.appendChild(script);
  });
}

// Example usage
loadScript("https://example.com/script.js")
  .then((script) => {
    console.log(`${script.src} loaded`);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// Example usage with async/await

async function loadAndLogScript(url) {
  try {
    const script = await loadScript(url);
    console.log(`${script.src} loaded`);
  } catch (error) {
    console.log("Error:", error);
  }
}
loadAndLogScript("https://example.com/script.js");
loadAndLogScript("https://example.com/non-existent-script.js"); // This will throw an error as the script does not exist.

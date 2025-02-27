// Example of Callback-based Function
// Let's start with an example of a function that uses a callback. Here's an old-style function that loads a script:

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = function () {
    callback(null, script); // No error, return the script
  };

  script.onerror = function () {
    callback(new Error(`Script load error for ${src}`)); // Error case
  };

  document.head.append(script);
}

// Promisified Function

let loadScriptPromise = function (src) {
  return new Promise(function (resolve, reject) {
    loadScript(src, function (err, script) {
      if (err)
        reject(err); // Reject if there’s an error
      else resolve(script); // Resolve with the script if successful
    });
  });
};

//Or using async/await:
async function load() {
  try {
    let script = await loadScriptPromise("path/script.js");
    console.log("Script loaded:", script);
  } catch (err) {
    console.log("Error loading script:", err);
  }
}

async function fetchData() {
  try {
    let response = await fetch("https://no-such-url.com");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

fetchData();

async function getData() {
  let [data1, data2] = await Promise.all([
    fetch("https://api.github.com/users/user1").then((res) => res.json()),
    fetch("https://api.github.com/users/user2").then((res) => res.json()),
  ]);

  console.log(data1, data2);
}

getData();

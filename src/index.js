const axios = require("axios");

const greet = (name) => "Hello " + name;

const users = async () => {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/users?_limit=2"
  );
  return res.data;
};

users().then((resp) => console.log(resp));

module.exports = {
  users,
  greet,
};

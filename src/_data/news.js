const axios = require("axios");

// Want to use async/await? Add the `async` keyword to your outer function/method.
module.exports = async function getUser() {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9ea92f5d53f44863b26ed89de4163cef"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

    let url = `https://api.github.com/users/${username}/repos`
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  // add repos folder
  let options = {
    url: url,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  console.log(options.url, options.headers, 'this is options url')

  // axios.get(option.url, option.headers)
  //   .then(function (response) {
  //     console.log(response.body, 'this is the body');
  //   })
  //   .catch(function (error) {
  //     console.log(error, 'this is github error');
  //   })
}

module.exports.getReposByUsername = getReposByUsername;
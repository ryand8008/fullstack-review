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


  // console.log(options.url, options.headers, 'this is options url')

  return axios.get(options.url, {headers: options.headers})
    // .then(function (response) {
    //   // let array = [];
    //   // for (let i = 0; i < response.data.length; i++) {
    //   //   array.push(response.data[i])
    //   // }

    //   console.log('this is the response: ', response.data[0])


    //   // return response.user + (' this is the user')
    // })
    // .catch(function (error) {
    //   console.log(error, 'this is github error');
    // })
}

module.exports.getReposByUsername = getReposByUsername;
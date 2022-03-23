const {getReposByUsername} = require('../helpers/github.js');
const {save, db, Repo} = require('../database/index.js');
const express = require('express');

let app = express();


app.use(express.json());
app.use(express.urlencoded())
app.use(express.static(__dirname + '/../client/dist'));


app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  getReposByUsername(req.body.username)
    .then(repos => {
      // console.log(repos.data, 'this is repos')
      repos.data.forEach(repo => save(repo))
    })
    .catch(err => {
      callback(err);
    });
  res.send('POST sent');

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  // console.log(req, 'this is the BODY')

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


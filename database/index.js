const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  'pk': Number,
  'repoId': Number,
  'repoName': String,
  'username': String,
  'url': String,
  'watchers': Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB





}

module.exports.save = save;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;
// var coll = db.test;

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

let save = (repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  let newRepo = new Repo({
    repoId: repo.id,
    repoName: repo.name,
    username: repo.owner.login,
    url: repo.owner.url,
    watchers: repo['watchers_count']
  }).save((err, data) => {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('success');
    }
  }
);
}

module.exports = {
  save: save,
  db: db,
  Repo: Repo
}
// module.exports.save = save;
// module.exports.db = db;
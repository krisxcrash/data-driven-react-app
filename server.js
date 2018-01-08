const express = require('express');
const MongoClient = require('mongodb').MongoClient;
import schema from './data/schema';
const GraphQLHTTP = require('express-graphql')

let app = express();

var url = 'mongodb://rgr_user:1234@ds241737.mlab.com:41737/rgr-stack'

app.use(express.static('public'));

app.use('/graphql', GraphQLHTTP({
  schema
}))

let db;

MongoClient.connect(url, (err, client) => {
    if (err) throw err;

    db = client.db('rgr-stack');
    let collection = db.collection('links');

    app.listen(3001, () => console.log('listening on port 3001'));
  });

  app.get('/data/links', (req, res) => {
    db.collection('links').find({}).toArray((err,links) => {
        if (err) throw err;
        res.json(links);
    });
  })
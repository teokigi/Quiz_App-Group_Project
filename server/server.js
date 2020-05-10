const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helper/create_Router.js');

app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('education_hub');
    const questionsCollection = db.collection('education');
    const questionsRouter = createRouter(questionsCollection);

    const usersCollection = db.collection('users');
    const usersRouter = createRouter(usersCollection);

    app.use('/api/questions', questionsRouter);
    app.use('/api/users', usersRouter);
  })
  .catch(console.err);

  app.listen(3000, function () {
    console.log(`Listening on port ${ this.address().port }`);
  });

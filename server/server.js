const express = require('express');
const app = express();

const session = require('express-session')





const cors = require('cors');
app.use(cors());

// const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helper/create_Router.js');
const authRouter = require ('./helper/auth_Router.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('education_hub');
    const questionsCollection = db.collection('education');
    const questionsRouter = createRouter(questionsCollection);

    const usersCollection = db.collection('users');
    const usersRouter = createRouter(usersCollection);

    const authUsersCollection = db.collection('users');
    const authUsersRouter = authRouter(authUsersCollection);

    app.use('/api/questions', questionsRouter);
    app.use('/api/users', usersRouter);
    app.use('/api/auth', authUsersRouter);
  })
  .catch(console.err);

  app.listen(3000, function () {
    console.log(`Listening on port ${ this.address().port }`);
  });

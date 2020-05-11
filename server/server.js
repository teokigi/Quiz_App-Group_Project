const express = require('express');
const OktaJwtVerifier = require('@okta/jwt-verifier')
const app = express();
const keys = require('./keys.js');

const cors = require('cors');
app.use(cors());

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: keys.okta.issuer,
  clientId: keys.okta.clientId,
  assertClaims: {
    aud: 'api://default',
  },
});

function authenticationRequired(req, res, next) {
  const authHeader = req.headers.authorization || '';
  const match = authHeader.match(/Bearer (.+)/);

  if (!match) {
    return res.status(401).end();
  }

  const accessToken = match[1];
  const expectedAudience = 'api://default';

  return oktaJwtVerifier.verifyAccessToken(accessToken, expectedAudience)
    .then((jwt) => {
      req.jwt = jwt;
      next();
    })
    .catch((err) => {
      res.status(401).send(err.message);
    });
}

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

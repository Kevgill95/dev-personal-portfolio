require ('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const buildPath = ('build/index.html');
const port = process.env.PORT || 5000;

const sendGrid = require('@sendgrid/mail');
const server = express();
server.use(bodyParser.json());

server.use(cors());

server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

server.get('/api', (req, res, next) => {
  res.send('API Status: Running')
});


server.set('port', process.env.PORT || 3000);

server.use(express.static('public'))
server.use('/static', express.static('public'))

server.use(express.static(path.resolve(__dirname, './public')));


server.get('*', (req, res) => {
    res.sendFile(path.resolve('/Users/kevingillooly/dev-personal-portfolio/public/index.html'));
});

const REACT_APP_SENDGRID_API_KEY =`${process.env.REACT_APP_SENDGRID_API_KEY}`
server.post('/api/email', (req, res, next) => {
  sendGrid.setApiKey(REACT_APP_SENDGRID_API_KEY);
  console.log(req.body);
  const msg = {
      to: 'kevgill95@gmail.com',
      from: req.body.email,
      subject: req.body.subject,
      text: req.body.message
  }

  sendGrid.send(msg)
      .then(result => {
          res.status(200).json({
            success: true
          });

      })
      .catch(err => {
          console.log('error: ', err);
          res.status(401).json({
            success: false
          })
      })
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
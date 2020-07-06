const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const publicPath = path.join(__dirname, '.', 'public');
const port = process.env.PORT || 3030;
require ('dotenv').config();

const sendGrid = require('@sendGrid/mail');
const server = express();
server.use(bodyParser.json());

server.use(cors());
server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

server.use(express.static(publicPath));

server.get('/api', (req, res, next) => {
  res.send('API Status: Running')
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

server.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, './index.html'));
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
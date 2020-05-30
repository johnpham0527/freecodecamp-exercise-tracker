const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });
const bodyParser = require('body-parser');
const path = require('path');
const terminalLink = require('terminal-link');
 
const link = terminalLink('http://localhost:3000', 'http://localhost:3000');

var exerciseTracker = require('./exercise');

express.static("/");
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: 'false'}));
app.use(bodyParser.json());

app.use('/api/exercise', exerciseTracker)

app.listen(3000, () => {
    console.log(`Server is running on ${link}`);
});
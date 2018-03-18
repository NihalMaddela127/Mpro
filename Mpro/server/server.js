const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path');
const cors = require('cors');
const port = process.env.port;
const route = require('./routes/routes');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(cors());

app.use('/', route);

// if(!module.parent){
let server = app.listen(3000,function(){
    console.log('Listen 3000');
});
// }
module.exports = server

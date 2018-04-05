const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path');
const cors = require('cors');
const port = process.env.port;
const route = require('./routes/routes');
app.use(function(req, res, next) { res.header("Access-Control-Allow-Origin", "*"); res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); next(); });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(cors());

app.use('/api', route);

// if(!module.parent){
let server = app.listen(3000,function(){
    console.log('Listen 3000');
});
// }
module.exports = server
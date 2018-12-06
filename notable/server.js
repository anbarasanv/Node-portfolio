const express       = require('express');
const mongoClient   = require('mongodb').MongoClient;
const bodyParser    = require('body-parser');
const db            = require('./config/db');

const app   = express();
const port  = 8080;

app.use(bodyParser.urlencoded({extended: true}));




mongoClient.connect(db.url, (err, client) => {
    if(err) return console.log(err);
    const db = client.db();
    require('./app/routes')(app, db);
    app.listen(port, () => {
        console.log("Server is running on "+port);
    });

});
const express = require('express')
const bodyParser = require('body-parser');
const itunesRoutes = require('./routes/itunes');

const app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false}));

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    res.setHeader(
      'Access-Control-Allow-Credentials', 'true'
    )
    next();
})

app.use('/api/itunes',itunesRoutes);

module.exports = app;
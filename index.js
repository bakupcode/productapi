
const express = require('express');
const app = express();
const port = process.env.PORT || 4000 ;
const bodyparser = require('body-parser');
const productRoute = require('./api/routes');

app.use(bodyparser.json());

// Routes
app.use('/api/v1/products', productRoute);

module.exports = app;
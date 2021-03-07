const express = require('express');
const app = express();
const port = process.env.PORT || 4000
const products = require('./products.json');
const bodyparser = require('body-parser');
const productRoute = require('./routes');

app.use(bodyparser.json());


exports.getProducts = (req, res) => {
    res.status(200).json(products);
};

exports.createProducts = (req, res) => {
    const { id, name, price } =  req.body ;
    products.push({id, name, price});
    res.status(200).json(products);
};

exports.getProduct = (req, res) => {
    const id = req.params.id;
    const product = products.find((product) => product.id === id);
    res.status(200).json(product);
};

exports.updateProduct = (req, res) => {
    const id = req.params.id;
    let product = products.find(product => product.id = id );
    product.name = req.body.name;
    product.price = req.body.price;
    res.status(200).json(product);
};

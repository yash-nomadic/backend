const express = require('express');
const Model = require('../models/productModel');
const { model } = require('mongoose');

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });

});

//getall
router.get('/getall', (req, res) => {

    Model.find()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
            
         })
});

//getbyid
router.get('/getbyid', (req, res) => {
    res.send('response from product getbyid')
});

//update
router.get('/update', (req, res) => {
    res.send('response from product update')
});

//delete
router.get('/delete', (req, res) => {
    res.send('response from product delete')
});

module.exports = router;
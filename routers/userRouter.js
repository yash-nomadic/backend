const express = require('express');

const router = express.Router();

router.get('/add', (req, res) => {
    res.send('response from user add')
});

//getall
router.get('/getall', (req, res) => {
    res.send('response from user getall')
});

//getbyid
router.get('/getbyid', (req, res) => {
    res.send('response from user getbyid')
});

//update
router.get('/update', (req, res) => {
    res.send('response from user update')
});

//delete
router.get('/delete', (req, res) => {
    res.send('response from user delete')
});

module.exports = router;
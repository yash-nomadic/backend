const express = require('express');

const app = express();

const port = 5000;

app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/add', (req, res) => {
    res.send('response from add')
});

app.get('/getall', (req, res) => {
    res.send('response from getall')
});

app.get('/delete', (req, res) => {
    res.send('response from delete')
});

app.listen(port, () => {
    console.log('server starded');
});
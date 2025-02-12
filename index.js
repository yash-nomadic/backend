const express = require('express');
const userRouter = require('./routers/userRouter');
// const productRouter = require('/routers/productRouter');

const app = express();

const port = 5000;


//middleware
app.use('/user', userRouter);

// app.use('/product', );

//route or endpoint
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
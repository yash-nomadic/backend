const express = require('express');
const userRouter = require('./routers/userRouter');
// const productRouter = require('/routers/productRouter');

const app = express();

const port = 5000;


//middleware
app.use(express.json());
app.use('/user', userRouter);
 

//new product middleware
// app.use('/product',productRouter);

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
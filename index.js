const express = require('express');
const userRouter = require('./routers/userRouter');
const productRouter = require('./routers/productRouter');
const cors=  require('cors');

const app = express();

const port = 5000;


//middleware
app.use(cors({ origin: ['http://localhost:3000'] }));
app.use(express.json());
app.use('/user', userRouter);   
app.use('/product', productRouter);
 

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
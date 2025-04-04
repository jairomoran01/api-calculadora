const express = require('express');
const {urlencoded, json} = require('express');
const router = require('./routes/calculadora.routes.js');
const cors = require('cors');

const app = express();

app.use(urlencoded({extended: true}));
app.use(json());
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    methods: ['GET', 'POST']
}));

app.use('/v1/calculadora', router);

const PORT = process.env.PORT || 3500;
app.listen(PORT, ()=>{
    console.log(`Listening at port ${PORT}`);
})
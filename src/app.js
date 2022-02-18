const express = require('express');
require('./connection/connection')
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')))

app.post('/', async(req, res) => {
    
})

app.listen(8000); 
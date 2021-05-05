const express = require('express');
const app = express();
const portser = 80;
const path = require('path');

//Server
app.set('view engine', 'ejs');


app.listen(portser, () => {
    console.log('Server on', portser);
})

app.get('/', (req, res) =>{
res.render('index', path.join(__dirname + '/../index.html'));
})
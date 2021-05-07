const express = require('express');
const app = express();
const portser = 80;
const path = require('path');



//set 
app.set('views', path.join(__dirname + '/../assets', 'views'))
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use('/assets', express.static('assets'));
app.listen(portser, () => {
    console.log('Server on', portser);
})

app.get('/', (req, res) =>{
res.render('index.html');
})
app.get('/inicio', (req, res) =>{
res.render('index.html');
})
app.get('/index', (req, res) =>{
    res.render('indexeng.html');
    })

app.get('/nosotros', (req, res) =>{
    res.render('nosotros.html');
    })

app.get('/contactanos', (req, res) =>{
    res.render('contactanos.html');
    })

app.get('/indexeng', (req, res) =>{
res.render('indexeng.html');
})
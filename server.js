const express = require('express')
const app = express()

const port = process.env.PORT || 8080;

const hbs = require('hbs');

//  Helpers
require('./hbs/helpers');



// console.log(__dirname + '/public');
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/', function(req, res) {
    // res.send('Hello World')
    // let data = {
    //     nombre: 'Roberto',
    //     user: 'Ricuesta',
    //     edad: 35,
    //     url: req.url
    // };
    // res.send(data);
    res.render('home', {
        nombre: 'Roberto',
        // anno: new Date().getFullYear()
    })
});

app.get('/abouts', (req, res) => {
    res.render('abouts');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})
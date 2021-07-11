
const express = require('express');
const bodyParser =require ('body-parser');
const mongoose =require('mongoose');
const routes = require('./routes');
const cors = require('cors');

// crea servidor
const app = express();

// Cors
app.use(cors());


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Conectar con Mongo

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/pruebatecnica', 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error de conexzión:')); 
db.once('open', () => {
  console.log('Conectado a la BBDD');

});

app.get('/', function(req, res) {
    console.log("Se ha realizado una petición GET para / ");
    res.send('Página de listado de usuarios');
});

app.use('/', routes())
app.listen(3000, () => {
    console.log('Conectado al puerto 3k')
})





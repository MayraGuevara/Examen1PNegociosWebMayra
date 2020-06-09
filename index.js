const express = require("express");
require('dotenv').config()
const morgan = require('morgan');
// inicializar servidor
const app = express();

const router = require('./routes/index.route')

// settings
app.set("port",process.env.PORTSERVER || 3000)

// middleware
app.use(morgan('dev'));

//ruotes
app.use("/",router())

//Static files

//Elserver escuche
app.listen(app.get('port'), () => {
    console.log("Server start on port");
  });

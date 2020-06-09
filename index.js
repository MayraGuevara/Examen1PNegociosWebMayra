const express = require("express");
require('dotenv').config()
// inicializar servidor
const app = express();

// settings
app.set("port",process.env.PORTSERVER || 3000)

// middleware

//ruotes

//Static files

//Elserver escuche
app.listen(app.get('port'), () => {
    console.log("Server start on port");
  });

const (Router) = require('express')

const router = Router();

// Importar el controlador
const indexController = require('../controllers/index.controller')

module.exports = function(){

    router.get("/", indexController.home)


    return router;
}

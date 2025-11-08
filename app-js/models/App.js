const Configuracion = require("../config/Config")

class App{
    nombre = ""
    version = ""

    constructor(){
        this.nombre = Configuracion.nombreApp
        this.version = Configuracion.version
        //Inicializacion de la aplicacion
        console.log(`Bienvenido a ${Configuracion.nombreApp} - version: ${Configuracion.version}`)
    }
}

module.exports = App
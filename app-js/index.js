//Importancion de dependencias - externas
var colors = require('colors');

//Importacion de depencias - internas

//var Persona = require('./models/Persona');
//var Configuracion = require('./config/Config');
var {persona1, persona2, persona3, persona4, persona5, pasatiempo1, pasatiempo3, pasatiempo4} = require('./inicializar');
var App = require('./models/App');
const Empleado = require('./models/Empleado');

var app = new App()


//Ejemplos de la operacion de la aplicacion

//funciones de bloque
function saludarConFuncionBloque(){
    console.log("Funcion de bloque retorna valor")
    return "Hola"
}

//funciones de flecha
const saludarConFuncionFlecha = () => {
    console.log("Funcion de flecha retorna valor")
    return "Hola flecha"
}

const saludarConFuncionFlechaSinRetorno = () => console.log("Hola sin retorno")

var resultado1 = saludarConFuncionBloque()
var resultado2 = saludarConFuncionFlecha()
var resultado3 = saludarConFuncionFlechaSinRetorno()

console.log(1 == 1) //true
console.log(1 === 1) //true
console.log(1 == "1") //true
console.log(1 === "1") //false

console.log(resultado1, resultado2, resultado3)

//Usando clases
console.log(persona1)
console.log(persona2)
console.log(persona3)
console.log(persona4)
console.log(persona5)

console.log(persona4.nombreCompleto)
persona4.apellido = "Skywalker"
console.log(persona4.nombreCompleto)

persona4.saludar("Anakin")
persona5.saludar(persona4.nombreCompleto)

persona5.presentarse(persona4.nombreCompleto)

persona4.agregarPasatiempo(pasatiempo1)
persona5.agregarPasatiempo(pasatiempo1)
persona4.agregarPasatiempo(pasatiempo3)
persona4.decirPasatiempos()
persona4.decirPasatiempoId(1)
persona4.decirPasatiempoId(10)
persona4.agregarPasatiempo(pasatiempo4)
persona4.decirPasatiemposCategoria("Deporte")
persona4.decirPasatiemposCategoria("Arte")
persona4.modificarPasatiempo(1, "Duelo de sables de luz")
persona4.modificarPasatiempo(2, "Poesia")
persona4.modificarPasatiempo(3, "Poesia")
persona4.decirPasatiempos()
persona4.eliminarPasatiempo(1)
persona4.decirPasatiempos()

//Contratar empleados
let empleado1 = new Empleado(persona4, 1000, "Programador")
empleado1.trabajar(10)
empleado1.trabajar(5)
empleado1.trabajar(8)
empleado1.cobrar()
empleado1.trabajar(2)
empleado1.cobrar()
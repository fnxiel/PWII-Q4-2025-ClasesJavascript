var colors = require('colors');
 
var persona = {
    nombre: "Luke",
    apellido: "Skywalker",
    edad: 25,
    direccion: "Tatooine"
}

var persona2 = {
    nombre: "Leia",
    apellido: "Organa",
    edad: 25,
    direccion: "X"
}

var persona3 = {
    nombre: "Leia",
    apellido: "Organa",
    edd: 25,
    direccion: "Otra direccion"
}

//Clases
class Persona {
    //Propiedades - atributos
    nombre = ""
    apellido = ""
    edad = 0
    direccion = ""
    fechaCreacion

    //Constructor
    constructor(nombre, apellido, edad, direccion){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.direccion = direccion
        this.fechaCreacion = new Date()
    }

    // get; set;

    get nombreCompleto(){
        //backtick
        //Interpolacion
        return `${this.nombre} ${this.apellido}`
    }

    //Metodos - funciones
    saludar(nombre){
        console.log(`Hola ${nombre}, mi nombre es ${this.nombreCompleto}`.bgGreen)
    }

    decirEdad(){
        console.log(`Mi edad es ${this.edad}`)
    }

    cambiarDireccion(direccionNueva){
        this.direccion = direccionNueva
        console.log(`He cambiado mi direccion a ${this.direccion}`)
    }

    decirDireccion(){
        console.log(`Vivo en ${this.direccion}`)
    }

    presentarse(nombre){
        this.saludar(nombre)
        this.decirEdad()
        this.decirDireccion()
    }

}

var persona4 = new Persona("Han", "Solo", 30, "Millenium falcon")
var persona5 = new Persona("Chewaka", "Wookie", 400, "Millenium falcon")

//Usando objetos
console.log(persona)
console.log(persona2)
console.log(persona3)

//Usando clases
console.log(persona4)
console.log(persona5)

console.log(persona4.nombreCompleto)
persona4.apellido = "Skywalker"
console.log(persona4.nombreCompleto)

persona4.saludar("Anakin")
persona5.saludar(persona4.nombreCompleto)

persona5.presentarse(persona4.nombreCompleto)
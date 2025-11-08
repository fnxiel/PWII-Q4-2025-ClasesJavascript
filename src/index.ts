import { Actor } from "./models/Actor"
import { IActor } from "./models/IActor"
import { IPelicula } from "./models/IPelicula"
import { Pelicula } from "./models/Pelicula"

//Declaracion implicita de tipo
var mensaje = "Hola"
mensaje = ""

//declaracion explicita de tipo
var saludo : string
saludo = ""

//Javascript
var textos = ""
var numeros = 0
var booleanos = true
var fechas = new Date()
var nulo = null
var noDefinido = undefined
var objetos = {}
var arreglos = []

var estados : "Activo" | "Inactivo"
estados = "Activo"

var textoNumero: string | number

textoNumero  = "0"
textoNumero = 0

var observacion : string | null
observacion = ""
observacion = null

//Tipos sin utilizar clases

let actor1: IActor = {
    nombre: "Mark Hammil",
    edad: 60
}

let actor2: IActor = {
    nombre: "",
    edad: 0
}

let pelicula1: IPelicula = {
    titulo: "",
    lanzamiento: 0,
    descripcion: "",
    observacion: "",
    reproducir: function (): string {
        return this.titulo
    },
    decirDuracion: function (duracion: number): number {
        return duracion
    },
    listarInformacion: function (): void //no tenemos return
    {
        console.log(this.titulo)
    },
    actores: [{
        nombre: "Carrie Fisher",
        edad: 55
    }]
}

let pelicula2: IPelicula = {
    titulo: "",
    lanzamiento: 0,
    descripcion: "",
    actores: [],
    reproducir: function (): string {
        throw new Error("Function not implemented.")
    },
    decirDuracion: function (duracion: number): number {
        throw new Error("Function not implemented.")
    },
    listarInformacion: function (): void //no tenemos return
    {
        throw new Error("Function not implemented.")
    }
}

pelicula1.actores.push(actor1)
pelicula1.actores.push({
    nombre: "",
    edad: 0
})

//Tipos utilizando clases

let pelicula3: IPelicula = new Pelicula("Star wars", 1985, "Guerra de las galaxias")
let actor4: IActor = new Actor("Harrison Ford", 70)
pelicula3.actores.push(actor4)

console.log(actor1)
console.log(pelicula1)

console.log(pelicula3)
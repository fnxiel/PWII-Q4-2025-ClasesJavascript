const Direccion = require('./models/Direccion');
const Pasatiempo = require('./models/Pasatiempo');
var Persona = require('./models/Persona');

//Pasatiempos
var pasatiempo1 = new Pasatiempo(1, "Esgrima", "Deporte")
var pasatiempo2 = new Pasatiempo(2, "Cocinar", "Hogar")
var pasatiempo3 = new Pasatiempo(3, "Construir", "Habilidades")
var pasatiempo4 = new Pasatiempo(4, "Lucha libre", "Deporte")

//Direcciones
var direccion1 = new Direccion("Millenium falcon", 10, 5, "Francisco Morazan", "Distrito Central")
var direccion2 = new Direccion("Tatooine", 25, 10, "Desierto", "Sahara")
var direccion3 = new Direccion("Deathstar", 0, 15, "Espacio", "Exterior")

//Personas
var persona1 = new Persona("Han", "Solo", 30, direccion1)
var persona2 = new Persona("Chewaka", "Wookie", 400, direccion1)
var persona3 = new Persona("Luke", "Skywalker", 25, direccion2)
var persona4 = new Persona("Leia", "Organa", 25, direccion2)
var persona5 = new Persona("Anakin", "Skywalker", 45, direccion3)

module.exports = {
    persona1, 
    persona2, 
    persona3, 
    persona4,
    persona5,
    direccion1,
    direccion2,
    direccion3,
    pasatiempo1,
    pasatiempo2,
    pasatiempo3,
    pasatiempo4
}
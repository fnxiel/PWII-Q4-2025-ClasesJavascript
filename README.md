# Requerimientos

Esta aplicacion requiere de lo siguiente:

- node 22
- npm

# Instrucciones

## Instalar las dependencias
Ejecute los siguientes comandos
```
npm i
npm start
```

puede incluir ejercicios de esta forma:
```javascript
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
```
//Clases
class Persona {
    //Propiedades - atributos
    nombre = ""
    apellido = ""
    edad = 0
    direccion = {
        //Colonia
        //Calle
        //Casa
        //Departamento
        //Municipio
    }
    fechaCreacion
    pasatiempos = []

    //Constructor
    constructor(nombre, apellido, edad, direccion){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.direccion = direccion
        this.fechaCreacion = new Date()
        this.pasatiempos = []
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
        console.log(`Vivo en ${this.direccion.departamento}, ${this.direccion.municipio}, colonia: ${this.direccion.colonia}, casa: ${this.direccion.casa}, calle: ${this.direccion.calle}`)
    }

    presentarse(nombre){
        this.saludar(nombre)
        this.decirEdad()
        this.decirDireccion()
    }

    //Arreglos
    //CRUD -Create, Read, Update, Delete

    //Read
    decirPasatiempos(){
        console.log(`--------------Decir pasatiempos------------------`)
        console.log(`Pasatiempos de la persona ${this.nombreCompleto}.`)
        console.log(`-------------------------------------------------`)
        ////ciclo for
        // for (let i = 0; i < this.pasatiempos.length; i++) {
        //     const pasatiempo = this.pasatiempos[i];
        //     console.log(`${i+1}.- Practico ${pasatiempo.descripcion} en la categoria ${pasatiempo.categoria}`)
        // }

        //forEach
        this.pasatiempos.forEach((pasatiempo, i) => console.log(`${i+1}.- Practico ${pasatiempo.descripcion} en la categoria ${pasatiempo.categoria}`))
        
        //map
        // const resutaldoMap = this.pasatiempos.map((pasatiempo, i) => {
        //     console.log(`${i+1}.- Practico ${pasatiempo.descripcion} en la categoria ${pasatiempo.categoria}`)
        //     return pasatiempo.descripcion
        // })
        
    }

    decirPasatiempoId(id){
        console.log(`--------Decir pasatiempo para el id ${id} para la persona ${this.nombreCompleto}--------`)

        const resultado = this.pasatiempos.find(pasatiempo => pasatiempo.id === id)
        if(resultado){
            console.log(`El pasatiempo con id ${id} es ${resultado.descripcion}`)
        }else{
            console.log(`El pasatiempo con id ${id} no se encontro`)
        }
    }

    decirPasatiemposCategoria(categoria){
        console.log(`--------Decir pasatiempo para la categoria ${categoria} para la persona ${this.nombreCompleto}--------`)

        const resultado = this.pasatiempos.filter(pasatiempo => pasatiempo.categoria === categoria)
        if(resultado.length > 0){
            console.log(`--------------Pasatiempos en la categoria ${categoria}------------------`)
            resultado.forEach((pasatiempo, i) => console.log(`${i+1}.- ${pasatiempo.descripcion} en la categoria ${pasatiempo.categoria}`))
        }else{
            console.log(`No se encontraron pasatiempos para la categoria ${categoria}`)
        }
    }

    //Create
    agregarPasatiempo(nuevoPasatiempo){
        this.pasatiempos.push(nuevoPasatiempo)
        console.log(`Se agrego el pasatiempo a la persona ${this.nombreCompleto}. Ahora practico ${nuevoPasatiempo.descripcion} en la categoria ${nuevoPasatiempo.categoria}`)
    }

    //Update
    modificarPasatiempo(id, nuevaDescripcion){
        let resultado = this.pasatiempos.find(pasatiempo => pasatiempo.id === id)
        if(resultado){
            const descripcionActual = resultado.descripcion
            resultado.descripcion = nuevaDescripcion
            console.log(`Se cambio la descripcion del pasatiempo con id ${id} de ${descripcionActual} a ${nuevaDescripcion}`)
        }else{
            console.log(`No se encontro el pasatiempo para el id ${id}`)
        }
        
    }
    //Eliminar()}
    eliminarPasatiempo(id){
        this.pasatiempos = this.pasatiempos.filter(pasatiempo => pasatiempo.id !== id)
        console.log(`Se elimino el pasatiempo con id ${id}`)
    }
}



module.exports = Persona
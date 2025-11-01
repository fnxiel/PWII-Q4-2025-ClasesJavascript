const Persona = require('./Persona')

class Empleado extends Persona{
    salarioBase
    horasTrabajadas
    puesto

    constructor(persona, salarioBase, puesto){
        super(persona.nombre, persona.apellido, persona.edad, persona.direccion)
        this.salarioBase = salarioBase
        this.horasTrabajadas = 0
        this.puesto = puesto
        persona.presentarse("Empleador")
        console.log(`Me han contratado en el puesto de ${this.puesto}, con un salario base de ${this.salarioBase}`)
    }

    trabajar(horas){
        this.horasTrabajadas = this.horasTrabajadas + horas
        console.log(`He trabajado ${horas} horas, con un total de ${this.horasTrabajadas} horas trabajadas`)
    }

    cobrar(){
        const pago = this.salarioBase * this.horasTrabajadas
        console.log(`Me han pagado ${this.horasTrabajadas} horas de trabajo, por un total de L${pago.toFixed(2)}`)
        this.horasTrabajadas = 0
    }
}

module.exports = Empleado
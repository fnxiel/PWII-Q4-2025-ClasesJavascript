import { IActor } from "./IActor"

export class Actor implements IActor{
    nombre: string
    edad: number
    constructor(nombre : string, edad: number){
        this.nombre = nombre
        this.edad = edad
    }
}
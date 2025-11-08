import { IActor } from "./IActor"
import { IPelicula } from "./IPelicula"

export class Pelicula implements IPelicula{
    titulo: string
    lanzamiento: number
    descripcion: string
    observacion?: string | undefined
    actores: IActor[]

    constructor(titulo : string, lanzamiento : number, descripcion : string)
    {
        this.titulo = titulo
        this.lanzamiento = lanzamiento
        this.descripcion = descripcion
        this.actores = []
    }
    reproducir(): string {
        return this.titulo
    }
    decirDuracion(duracion: number): number {
        return duracion
    }
    listarInformacion(): void //no tenemos return
    {
        console.log(this.titulo)
    }

}
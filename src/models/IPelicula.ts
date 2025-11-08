import { IActor } from "./IActor"

export interface IPelicula{
    //Propiedades
    titulo: string
    lanzamiento: number
    descripcion: string
    observacion?: string
    actores: IActor[]

    //Metodos
    reproducir(): string
    decirDuracion(duracion: number) : number
    listarInformacion(): void //no tenemos return
}
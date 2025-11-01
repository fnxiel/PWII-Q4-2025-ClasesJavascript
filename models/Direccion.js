class Direccion {
    colonia
    calle
    casa
    departamento
    municipio

    constructor(colonia, calle, casa, departamento, municipio) {
        this.colonia = colonia
        this.calle = calle
        this.casa = casa
        this.departamento = departamento
        this.municipio = municipio
    }
}

module.exports = Direccion
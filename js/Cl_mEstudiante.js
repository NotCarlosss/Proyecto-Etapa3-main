export default class Cl_mEstudiante {
    constructor({cedula, apellido, nombre}) {
        this.cedula = cedula;
        this.apellido = apellido;
        this.nombre = nombre;
    }
    set cedula(cedula) {
        this._cedula = +cedula;
        }
    get cedula() {
        return this._cedula;
    }
    set apellido(apellido) {
        this._apellido = apellido.toUpperCase();
    }
    get apellido() {
        return this._apellido;
    }
    set nombre(nombre) {
        this._nombre = nombre.toUpperCase();
    }
    get nombre() {
        return this._nombre;
    }
}

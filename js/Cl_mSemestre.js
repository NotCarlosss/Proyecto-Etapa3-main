import Cl_mMaterias from "./Cl_mMaterias.js";
import Cl_mEstudiantes from "./Cl_mEstudiantes.js";

export default class Cl_mSemestre{
    constructor(nombre){
        this.nombre = nombre;
        this.materias = new Cl_mMaterias();
        this.estudiantes = new Cl_mEstudiantes();
    }
    set nombre(nombre){
        this.nombre = nombre.toLowerCamelCase();
    }
    get nombre(){
        return this.nombre;
    }
}
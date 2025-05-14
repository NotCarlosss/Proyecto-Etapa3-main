export default class Cl_mMaterias {
    constructor(){
        this.materias = [];
    }
    agregar(materia){
        this.materias.push(materia);
    }
    listado(){
        return this.materias;
    }
}
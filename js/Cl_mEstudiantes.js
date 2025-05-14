export default class Cl_mEstudiantes{
    constructor(){
        this.estudiantes = []
    }
    agregar(estudiante){
        this.estudiantes.push(estudiante);
    }
    listado(){
        return this.estudiantes;
    }
    
}
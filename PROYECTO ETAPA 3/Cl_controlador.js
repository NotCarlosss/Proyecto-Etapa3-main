import vistas from "../data/vistas.js";
import rolesFichas from "../data/rolesFichas.js";
export default class Cl_controlador {
  constructor({ mSemestre, vApp }) {
    this.mSemestre = mSemestre;
    this.vApp = vApp;
  }
  activarVista({ vista, rol, objeto }) {
    this.vApp.activarVista({ vista });
    this.vApp.vEstudiante.activarVista({ vista, rol, estudiante: objeto });
    this.vApp.vEstudiantes.activarVista({ vista, rol });
    this.vApp.vMateria.activarVista({ vista, rol, materia: objeto });
    this.vApp.vMaterias.activarVista({ vista, rol });
    this.vApp.vInscripcion.activarVista({ vista, rol });
  }
  cambiarLapso() {
    let nombre = prompt("Nombre del lapso académico:", this.mSemestre.nombre);
    if (nombre) {
      this.mSemestre.nombre = nombre;
      this.activarVista({ vista: vistas.app });
    }
  }
  procesarEstudiante({ rol, cedula = null }) {
    if (rol === rolesFichas.agregar)
      return this.mSemestre.agregarEstudiante(
        this.vApp.vEstudiante.dataEstudiante()
      );
    else if (rol === rolesFichas.modificar)
      return this.mSemestre.modificarEstudiante(
        this.vApp.vEstudiante.dataEstudiante()
      );
    else if (rol === rolesFichas.eliminar)
      return this.mSemestre.eliminarEstudiante(this.vApp.vEstudiante.cedula);
    else return "Opción inválida";
  }
  procesarMateria({ rol, codigo = null }) {
    if (rol === rolesFichas.agregar)
      return this.mSemestre.agregarMateria(this.vApp.vMateria.dataMateria());
    else if (rol === rolesFichas.modificar)
      return this.mSemestre.modificarMateria(this.vApp.vMateria.dataMateria());
    else return "Opción inválida";
  }
  agregarInscripcion() {
    let data = this.vApp.vInscripcion.dataInscripcion();
    if (!this.mSemestre.estudiantes.existe(data.cedula))
      return "Estudiante inexistente";
    if (!this.mSemestre.materias.existe(data.codigo))
      return "Materia inexistente";
    let resultado = this.mSemestre.inscritos.inscribirMateria(data);
    return resultado;
  }
}

import Cl_vEstudiante from "./Cl_vEstudiante.js";
import Cl_vMateria from "./Cl_vMateria.js";
import Cl_vInscripcion from "./Cl_vInscripcion.js";
import Cl_vEstudiantes from "./Cl_vEstudiantes.js";
import Cl_vMaterias from "./Cl_vMaterias.js";
import vistas from "../data/vistas.js";
export default class Cl_vAplicacion {
  constructor() {
    this.controlador = null;
    this.vista = document.getElementById("appForm");

    this.vEstudiante = new Cl_vEstudiante();
    this.vEstudiantes = new Cl_vEstudiantes();

    this.vMateria = new Cl_vMateria();
    this.vMaterias = new Cl_vMaterias();

    this.vInscripcion = new Cl_vInscripcion();

    this.lblLapso = document.getElementById("appForm_lblLapso");

    this.btCambiarLapso = document.getElementById("appForm_btCambiarLapso");
    this.btCambiarLapso.onclick = () => this.controlador.cambiarLapso();

    this.btEstudiantes = document.getElementById("appForm_btEstudiantes");
    this.btEstudiantes.onclick = () =>
      this.controlador.activarVista({ vista: vistas.estudiantes });

    this.btMaterias = document.getElementById("appForm_btMaterias");
    this.btMaterias.onclick = () =>
      this.controlador.activarVista({ vista: vistas.materias });

    this.btInscribirMateria = document.getElementById(
      "appForm_btInscribirMateria"
    );
    this.btInscribirMateria.onclick = () =>
      this.controlador.activarVista({ vista: vistas.inscripcion });

    this.tabla = document.getElementById("appForm_tabla");
  }
  set controlador(controlador) {
    this._controlador = controlador;
    if (controlador) {
      this.vEstudiante.iniciar(controlador);
      this.vEstudiantes.iniciar(controlador);
      this.vMateria.iniciar(controlador);
      this.vMaterias.iniciar(controlador);
      this.vInscripcion.iniciar(controlador);
    }
  }
  get controlador() {
    return this._controlador;
  }
  activarVista({ vista }) {
    this.vista.hidden = vista !== vistas.app;
    if (vista === vistas.app) {
      this.reportarInscritos({
        info: this.controlador.mSemestre.inscritos.listado(
          this.controlador.mSemestre.estudiantes.listado()
        ),
      });
      this.lblLapso.innerHTML = this.controlador.mSemestre.nombre;
    }
  }
  reportarInscritos({ info }) {
    this.tabla.innerHTML = "";
    info.map((inscripcion) => {
      this.tabla.innerHTML += `<tr>
      <td>${inscripcion.cedula}</td>
      <td>${inscripcion.nombre}</td>
      <td>${inscripcion.cntMaterias}</td>
      <td><button id="appForm_tabla_ver${inscripcion.cedula}">Ver</button></td>
    </tr>`;
    });
  }
}

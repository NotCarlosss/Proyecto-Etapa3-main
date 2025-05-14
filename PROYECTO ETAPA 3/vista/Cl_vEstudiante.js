import rolesFichas from "../data/rolesFichas.js";
import vistas from "../data/vistas.js";
import estudianteNuevo from "../data/estudianteNuevo.js";
export default class Cl_vEstudiante {
  constructor() {
    this.controlador = null;
    this.vista = document.getElementById("estudianteForm");
    this.vista.hidden = true;

    this.lblRol = document.getElementById("estudianteForm_lblRol");

    this.inCedula = document.getElementById("estudianteForm_inCedula");
    this.inApellido = document.getElementById("estudianteForm_inApellido");
    this.inNombre = document.getElementById("estudianteForm_inNombre");

    this.btAceptar = document.getElementById("estudianteForm_btAceptar");
    this.btAceptar.onclick = () => {
      if (confirm(`Seguro que desea ${this.rol} el estudiante?`)) {
        let result = this.controlador.procesarEstudiante({
          rol: this.rol,
          cedula: this.cedula,
        });
        if (result === true)
          this.controlador.activarVista({ vista: vistas.estudiantes });
        else alert(result);
      }
    };

    this.btCancelar = document.getElementById("estudianteForm_btCancelar");
    this.btCancelar.onclick = () => {
      this.controlador.activarVista({ vista: vistas.estudiantes });
    };

    this.rol = rolesFichas.agregar;
  }
  set rol(rol) {
    this._rol = rol;
    this.lblRol.innerHTML = rol.toUpperCase();
    this.inCedula.disabled = rol !== rolesFichas.agregar;
    this.inApellido.disabled = rol === rolesFichas.eliminar;
    this.inNombre.disabled = rol === rolesFichas.eliminar;
  }
  get rol() {
    return this._rol;
  }
  get cedula() {
    return +this.inCedula.value;
  }
  get nombre() {
    return this.inNombre.value;
  }
  get apellido() {
    return this.inApellido.value;
  }
  iniciar(controlador) {
    this.controlador = controlador;
  }
  dataEstudiante() {
    return {
      cedula: this.cedula,
      apellido: this.apellido,
      nombre: this.nombre,
    };
  }
  activarVista({ vista, rol, estudiante = estudianteNuevo }) {
    this.vista.hidden = vista !== vistas.estudiante;
    if (vista === vistas.estudiante) {
      this.rol = rol;
      this.inCedula.value = estudiante.cedula;
      this.inApellido.value = estudiante.apellido;
      this.inNombre.value = estudiante.nombre;
    }
  }
}

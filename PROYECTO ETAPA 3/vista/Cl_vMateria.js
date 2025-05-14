import vistas from "../data/vistas.js";
import rolesFichas from "../data/rolesFichas.js";
import materiaNueva from "../data/materiaNueva.js";

export default class Cl_vMateria {
  constructor() {
    this.controlador = null;
    this.vista = document.getElementById("materiaForm");
    this.vista.hidden = true;

    this.lblRol = document.getElementById("materiaForm_lblRol");

    this.inCodigo = document.getElementById("materiaForm_inCodigo");
    this.inSemestre = document.getElementById("materiaForm_inSemestre");
    this.inNombre = document.getElementById("materiaForm_inNombre");

    this.btAceptar = document.getElementById("materiaForm_btAceptar");
    this.btAceptar.onclick = () => {
      if (confirm(`Seguro que desea ${this.rol} la materia?`)) {
        let result = this.controlador.procesarMateria({
          rol: this.rol,
          codigo: this.codigo,
        });
        if (result === true)
          this.controlador.activarVista({ vista: vistas.materias });
        else alert(result);
      }
    };

    this.btCancelar = document.getElementById("materiaForm_btCancelar");
    this.btCancelar.onclick = () => {
      this.controlador.activarVista({ vista: vistas.estudiantes });
    };

    this.rol = rolesFichas.agregar;
  }
  set rol(rol) {
    this._rol = rol;
    this.lblRol.innerHTML = rol.toUpperCase();
    this.inCodigo.disabled = rol !== rolesFichas.agregar;
    this.inSemestre.disabled = rol === rolesFichas.eliminar;
    this.inNombre.disabled = rol === rolesFichas.eliminar;
  }
  get rol() {
    return this._rol;
  }
  get codigo() {
    return this.inCodigo.value.toUpperCase();
  }
  get semestre() {
    return this.inSemestre.value;
  }
  get nombre() {
    return this.inNombre.value.toUpperCase();
  }
  iniciar(controlador) {
    this.controlador = controlador;
  }
  dataMateria() {
    return {
      codigo: this.codigo,
      semestre: this.semestre,
      nombre: this.nombre,
    };
  }
  activarVista({ vista, rol, materia = materiaNueva }) {
    this.vista.hidden = vista !== vistas.materia;
    if (vista === vistas.materia) {
      this.rol = rol;
      this.inCodigo.value = materia.codigo;
      this.inSemestre.value = materia.semestre;
      this.inNombre.value = materia.nombre;
    }
  }
}

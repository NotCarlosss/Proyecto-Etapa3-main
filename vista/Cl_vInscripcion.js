import vistas from "../data/vistas.js";

export default class Cl_vInscripcion {
  constructor() {
    this.controlador = null;
    this.vista = document.getElementById("inscripcionForm");
    this.vista.hidden = true;

    this.inCedula = document.getElementById("inscripcionForm_inCedula");
    this.inCodigo = document.getElementById("inscripcionForm_inCodigo");

    this.btAceptar = document.getElementById("inscripcionForm_btAceptar");
    this.btAceptar.onclick = () => {
      if (confirm(`Seguro que desea hacer la inscripción?`)) {
        let result = this.controlador.agregarInscripcion();
        if (result === true)
          this.controlador.activarVista({ vista: vistas.app });
        else alert(result);
      }
    };

    this.btCancelar = document.getElementById("inscripcionForm_btCancelar");
    this.btCancelar.onclick = () => {
      this.controlador.activarVista({ vista: vistas.app });
    };
  }
  get cedula() {
    return +this.inCedula.value;
  }
  get codigo() {
    return this.inCodigo.value.toUpperCase();
  }
  iniciar(controlador) {
    this.controlador = controlador;
  }
  dataInscripcion() {
    return {
      cedula: this.cedula,
      codigo: this.codigo,
    };
  }
  activarVista({ vista, rol }) {
    this.vista.hidden = vista !== vistas.inscripcion;
  }
}

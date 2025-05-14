import vistas from "../data/vistas.js";
import rolesFichas from "../data/rolesFichas.js";
export default class Cl_vMaterias {
  constructor() {
    this.controlador = null;
    this.vista = document.getElementById("materiasForm");
    this.vista.hidden = true;

    this.tabla = document.getElementById("materiasForm_tabla");

    this.btAgregar = document.getElementById("materiasForm_btAgregar");
    this.btAgregar.onclick = () =>
      this.controlador.activarVista({
        vista: vistas.materia,
        rol: rolesFichas.agregar,
      });

    this.btModificar = document.getElementById("materiasForm_btModificar");
    this.btModificar.onclick = () => {
      let materia = this.materia();
      if (materia)
        this.controlador.activarVista({
          vista: vistas.materia,
          rol: rolesFichas.modificar,
          objeto: materia,
        });
    };
    this.btVolver = document.getElementById("materiasForm_btVolver");
    this.btVolver.onclick = () =>
      this.controlador.activarVista({ vista: vistas.app });
  }
  iniciar(controlador) {
    this.controlador = controlador;
  }
  activarVista({ vista }) {
    this.vista.hidden = vista !== vistas.materias;
    if (vista == vistas.materias)
      this.reportar(this.controlador.mSemestre.materias.listado());
  }
  materia() {
    let codigo = prompt("Indique el código de la materia:"),
      materia = this.controlador.mSemestre.materias.materia(codigo);
    if (!materia) alert("Código inexistente");
    return materia;
  }
  reportar(info) {
    this.tabla.innerHTML = "";
    info.map((materia) => {
      this.tabla.innerHTML += `<tr>
      <td>${materia.codigo}</td>
      <td>${materia.semestre}</td>
      <td>${materia.nombre}</td>
    </tr>`;
    });
  }
}

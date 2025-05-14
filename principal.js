import Cl_mSemestre from "./modelo/Cl_mSemestre.js";
import Cl_vAplicacion from "./vista/Cl_vAplicacion.js";
import Cl_controlador from "./Cl_controlador.js";
import dataEstudiantes from "./data/dataEstudiantes.js";
import dataMaterias from "./data/dataMaterias.js";
import vistas from "./data/vistas.js";

export default class Cl_principal {
  constructor() {
    let vApp = new Cl_vAplicacion();
    let mSemestre = new Cl_mSemestre({ nombre: "Primero" });
    dataEstudiantes.forEach((estudiante) =>
      mSemestre.estudiantes.agregar(estudiante)
    );
    dataMaterias.forEach((materia) => mSemestre.materias.agregar(materia));
    let controlador = new Cl_controlador({
      mSemestre: mSemestre,
      vApp: vApp,
    });
    vApp.controlador = controlador;
    controlador.activarVista({ vista: vistas.app });
  }
}

// Este import sirve para importar archivos de otros JS.
//Por el contrario de la otra parte se debe utilozar export para exportarlos
import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

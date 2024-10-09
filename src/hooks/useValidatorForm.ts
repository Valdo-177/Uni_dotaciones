import { toast } from "sonner";
import { IForm } from "../models/models.types";

export function validarFormulario(campos:IForm) {
    let esValido = true;
  
    if (campos.contacto == '' || campos.detalles == '' || campos.email == '' || campos.empresa == '' || campos.telefono == '') {
        toast("El correo enviado no fue enviado :(", {
            description: `Es necesario que todos los campos del formulario estén llenos`,
          })
        esValido = false
        return esValido
    }

    // if (!campos.contacto.trim()) {
    //   alert("Por favor, ingrese un contacto válido.");
    //   esValido = false;
    // }
  
    // if (!validarEmail(campos.email)) {
    //   alert("Por favor, ingrese un correo electrónico válido.");
    //   esValido = false;
    // }
  
    // if (!validarTelefono(campos.telefono)) {
    //   alert("Por favor, ingrese un número telefónico válido.");
    //   esValido = false;
    // }
  
    // if (!campos.empresa.trim()) {
    //   alert("Por favor, ingrese el nombre de la empresa.");
    //   esValido = false;
    // }
  
    // if (!campos.detalles.trim()) {
    //   alert("Por favor, ingrese detalles adicionales.");
    //   esValido = false;
    // }
  
    return esValido;
  }
  

//   function validarEmail(email:string) {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   }
  
//   function validarTelefono(telefono:string) {
//     const regex = /^\d{3}-\d{3}-\d{4}$/; // Ejemplo de formato: XXX-XXX-XXXX
//     return regex.test(telefono);
//   }
  
"use strict";
import { validateString, vAvg, checkAvg } from "./validate.js";
import { paintCard,addStudent, addTeacher,modalAlert } from "./paint.js";

const btnAgregar = document.getElementById("btnAgregar");
const btnMostrar = document.getElementById("btnMostrar");
const option = document.getElementById("opcion");

option.onchange = function () {
  let op = document.getElementById("opcion").value;
  if (op === "profesor") {
    modalAlert("Los datos han cambiado a profesor");
    document.getElementById("text1").innerText = "Nombres y Apellidos:";
    document.getElementById("text2").innerText = "Profesion:";
    document.getElementById("text3").innerText = "Edad:";
  } else if (op === "estudiante") {
    modalAlert("Los datos han cambiado a estudiante");
    document.getElementById("text1").innerText = "Nombres:";
    document.getElementById("text2").innerText = "Apellidos:";
    document.getElementById("text3").innerText = "Promedio:";
  }
};

/*generar eventos 
    1. Colocando el metodo (evento) en el atributo onclick,
    onmouseover, onmouseout de la etiqueta
    2.mediante propiedad
    3.Mediante el addevenListener
*/
btnAgregar.onclick = function () {
  // console.log('evento mediante propiedad');
  const name = document.getElementById("nombre").value;
  const lastName = document.getElementById("apellido").value;
  const avg = parseFloat(document.getElementById("promedio").value);
  const nameApe = document.getElementById('nombre').value;
  const prof = document.getElementById('apellido').value;
  const age = parseFloat(document.getElementById('promedio').value);
  const op = document.getElementById("opcion").value;

  //console.log<(`${name} ${lastname} ${avg} ${op}`);
  if (op === 'estudiante'){
        if (validateString(name) && validateString(lastName) && op !=0){
            if ((!isNaN(avg)) && (vAvg(avg))){
                addStudent(name,lastName,avg)
                modalAlert("Se agrego el estudiante")
                document.getElementById('nombre').value="";
                document.getElementById('apellido').value="";
                document.querySelector('#promedio').value="";
            } else {
                document.querySelector('#promedio').value= "";
                modalAlert("Promedio Invalido");
            }
        } else {
            modalAlert("Datos invalidos, revisar campos");
        }
    } else if (op === 'profesor') {
        if (validateString(nameApe) && validateString(prof) && op !=0){
            if (!isNaN(age)){
                addTeacher(name,lastName,avg)
                modalAlert("Se agrego el profesor")
                document.getElementById('nombre').value="";
                document.getElementById('apellido').value="";
                document.querySelector('#promedio').value="";
            }
        } else {
            modalAlert("Datos invalidos, revisar campos");
        }
    }
}
btnMostrar.addEventListener('click', function(){
    const op = document.getElementById('opcion').value;
    if (op === 'estudiante'){
        paintCard("ESTUDIANTE");
    } else if (op === 'profesor') {
        paintCard("PROFESOR");
    }  
});

//primera tarea agregar el modal
//borrar campos
//crear el cad para profesor opcional el de egresados

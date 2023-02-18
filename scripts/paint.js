'use strict';

import {checkAvg } from './validate.js';
const cardE = document.getElementById('cardsEstudiantes');
const cardP = document.getElementById('cardsProfesor');
const students = [];
const teachers = [];


const paintCard = (typ) =>{
    console.log(typ);
    typ = typ.toUpperCase();
    const fragment = document.createDocumentFragment();
    const templateStudent = document.querySelector('#templateEstudiante').content;
    const templateTeacher = document.querySelector('#templateProfesor').content;

    if (typ === 'ESTUDIANTE') {
        for (let i of students){
            const cloneTemp = templateStudent.cloneNode(true);
            cloneTemp.querySelector('.title-card').innerHTML = "Datos del <i>Estudiante</i>.";
            cloneTemp.querySelector('.data-card').innerHTML = `NOMBRE: ${i.nom.toUpperCase()} APELLIDOS: ${i.ape.toUpperCase()}`;
            cloneTemp.querySelector('.text-promedio').innerHTML = `PROMEDIO ES: ${i.prom}`;
            cloneTemp.querySelector(`.text-aprobado`).innerHTML = `${checkAvg(i.prom)}`;
            fragment.appendChild(cloneTemp);
        }
    } else if (typ === 'PROFESOR') {
        for (let i of teachers){
            const cloneTemp = templateTeacher.cloneNode(true);
            cloneTemp.querySelector('.title-card').innerHTML = "Datos del <i>Profesor</i>.";
            cloneTemp.querySelector('.data-card').innerHTML = `NOMBRE y APELLIDOS: ${i.nomApe.toUpperCase()}<br>PROFESION: ${i.prof.toUpperCase()}`;
            cloneTemp.querySelector('.text-promedio').innerHTML = `EDAD: ${i.age}`;
            fragment.appendChild(cloneTemp);
        }
    }
    cardE.appendChild(fragment);
    cardP.appendChild(fragment);
};
const addStudent = (name,lastName, avg)=>{
    // objeto literal de js
    let student = {
        nom : name,
        ape: lastName,
        prom : avg
    }
    students.push(student);
    alert('se agrego estudiante');
}

const addTeacher = (name,lastname,avg) => {
    let teacher = {
        nomApe: name,
        prof: lastname,
        age: avg
    }
    teachers.push(teacher);
}

const modalAlert = (cad) => {
    const alerta =document.createElement('div');
    const texto = document.createElement('p');
    const img = document.createElement('img');
    img.src='./img/cruz.png';
    img.className="close";
    texto.setAttribute("class", "textAlerta");
    alerta.setAttribute("id","alerta");
    alerta.setAttribute("class","alerta");
    texto.innerHTML= `<strong>${cad}</strong>`;
    alerta.appendChild(img);
    alerta.appendChild(texto);
    document.body.appendChild(alerta);
    img.onclick= function(){
        document.getElementById("alerta").remove();
    }

}
export {paintCard,addStudent,addTeacher,modalAlert}
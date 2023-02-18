'use strict';
const validateString = (cad) =>{
    let response = (cad.length>3) ? true:false;
    return response;
}
const validateAvg =(num)=>{
    let response = (num>=0 && num <=5) ? true:false;
    return response;
}
const checkAvg =(value) =>{
    let result = (value>=3 && value <=5) ? "APROBADO":"REPROBADO";
    return result;
}
export { validateString, validateAvg as vAvg, checkAvg}

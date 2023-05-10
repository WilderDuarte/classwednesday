// VARIABLES
const nameuser = "WilderDuarte";
var x = "Valor";
let y = "Valor";

let a = 20;
let b = 5.4;
let string = "Mi nombre es Wilder Duarte";
let number = "023456789";
let boolean_uno = false;
let boolean_two = true;
let array = [1,2,3,5,4];
let array_string = ["Lunes","Martes","Miercoles","Jueves","Viernes"];

// OPERADORES ARITMÉTICOS: + - / * %
let suma = 1+5+a;
let resta = 1-5-a;
let multi = 1 * 5 * a;
let divi = 1 / 5 / a;
let module = 10%2;
let elev = 5^2;
console.log("- "+suma + "\n- "+resta + "\n- "+multi + "\n- "+divi + "\n- "+module + "\n- " + elev);

// OPERADORES DE COMPARACIÓN = / == / === / <> / >= / <= / > / <

// OPERADORES LÓGICOS AND && / OR || / 

if(10>5){
    for(let i=0;i<array_string.length;i++){
        console.log(array_string[i]);
    }
}

let j = 5;
let k = 10;
while(k>=j){
    console.log("ENTRA");
    j++;
    break
}
let nombre = prompt("Ingerse su nombre de usuario: ");
console.log(nombre);

let pronostico = prompt("Ingrese su pronostico (Gana Argentina, Gana Mexico, Empatan Argentina vs Mexico): ");
if (pronostico == "Gana Argentina") {
    alert ("Sumas 3 puntos");
}else if (pronostico == "Gana Mexico") {
    alert ("Resta 1 puntos");
}else if (pronostico == "Empatan Argentina vs Mexico"){
    alert ("Sumas 0 puntos");
}
console.log(pronostico);


let valorUno = parseInt(prompt("Ingrese el primer valor para la suma de puntos:"));
let valorDos = parseInt(prompt("Ingrese el segundo valor:"));
let valorTres = parseInt(prompt("Ingrese el tercer valor:"));

let operacion = prompt("Ingrese (+ -) o (- +) o (+ +) o (- -) dependiendo los puntos y orden en que los conseguiste.");

switch(operacion) {
    case "+ -":
        console.log(valorUno + valorDos - valorTres + " puntos son los que tiene.");
        break;
    case "- +":
        console.log(valorUno - valorDos + valorTres + " puntos son los que tiene.");
        break;
    case "+ +":
        console.log(valorUno + valorDos + valorTres + " puntos son los que tiene.");
        break;
    case "- -":
        console.log(valorUno - valorDos - valorTres + " puntos son los que tiene.");
        break;
    default: 
    console.log("Ingrese bien los datos");
    break;
}




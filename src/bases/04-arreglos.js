// Arrglos JS

const arreglo = [1,2,3,4,];

let arreglo2 = [ ...arreglo, 5 ];

// El metodo map regresa un nuevo arreglo sin modificar el areglo original
const arreglo3 = arreglo2.map((numero) => numero * 2)


console.log( arreglo );
console.log( arreglo2 );
console.log(arreglo3)
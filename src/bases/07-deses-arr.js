// Desestructuracion de arreglos

const peronaje = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3  ] = peronaje;
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

// Tarea
// 1. el primer nombre del arreglo se llamara nombre
// 2. se llamara setNombre

const usesState = ( valor ) => [ valor, () => console.log('Hola Mundo') ];

const arr = usesState('Reynaldo');

const [nombre, setNombre] = arr;

console.log(nombre);
setNombre()
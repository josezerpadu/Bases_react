// Funciones 

// Funcion declarada
function saludar( nombre ) {
    return `Hola, ${ nombre }`
}

console.log(saludar('Reynaldo'))
console.log(saludar)

// se recomienda no hacer funciones de esta manera ya que se pueden sobre escribir y cambiar su valor ejemplo:
saludar = 37; // aca estaria sobre escribendo su valor y ya dejaria de ser una funcion y pasaria a contener el valor primitivo de 37
console.log(saludar);

// Manera indicada de hacer una funcion es una funcion 
//expresada esta funcon no se puedde sobre escribir igual a la funcion de flecha
const saludarExpresada = function ( nombre)  {
    return `Hola, ${ nombre }`
}

console.log(saludarExpresada('Reynaldo'));

// Funciom flecha sintaxis sin retorno explicito ya que solo es de una linea
const saludarFlecha = (nombre) => `Hola, ${nombre}`;

console.log(saludarFlecha(' Funcion Flecha'));

// Ojo con esta sintaxis da igual para JS, tome en cuenta que puedo retornar este objeto implicitamente utilizando los parentesis y seria igual que si usara los corchetes y la palabra return
const getUser = () => ({
        uid: 'ABC123',
        username: 'Reynaldo_Zerpa'
    })


console.log( getUser() );

// Ejercicio
const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
}) 

const usuarioActivo = getUsuarioActivo('Reynaldo');
console.log(usuarioActivo);
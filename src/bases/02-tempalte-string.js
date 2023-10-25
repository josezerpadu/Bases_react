// Template String

const nombre = 'Reynaldo';
const apellido = 'Zerpa';

// Version antigua de concatenar
const nombreCompleto = nombre + ' ' + apellido;

// version nueva
const nombreCompleto2 = `${nombre} ${apellido} ${1 + 1}`

console.log(nombreCompleto);

function getSaludos(nombre) {
    return ` Hola ${nombre}: funcion`
}

console.log( `Este es un texto: ${ getSaludos(nombreCompleto) } `);
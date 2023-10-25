// Objetos literales 

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 92737,
        lat: 83836,
        lng: 8832283,
    },
};

console.log( persona.direccion.ciudad );

// Copiando un objeto sin mutar el orignal con spread opr

const persona2 = persona;
const persona3 = {...persona}

console.log(persona2 === persona);
console.log(persona3 === persona);

persona3.nombre = 'Reynaldo'
console.log(persona);
console.log(persona3)
// Desestructuracion de objetos

const persona = {
    name: 'Reynaldo',
    lastName: 'Zerpa',
    Edad: 37,
    ubicacion: 'Montevideo',
    profesion: 'Programador'
}

const {ubicacion, name, Edad} = persona
const ubicacionCliente = ubicacion;

console.log(`La ubicacion del cliente es: ${ubicacionCliente} y su edad es de: ${Edad}`);

// Desestructuracion de objeto en una funcion (SINTAXIS)
// Tomar en cuenta la creacion de las llaves dentro los parametros y ahi llamar las propiedades la cual extraera su valor
const retornaPersona = ( {name, Edad, profesion} ) => {
    // Dentro del cuerpo de FC hacemos lo que sea necesario
    console.log(name, Edad, profesion)
}

// Al llamar la funcion pasamos el nombre del objeto
retornaPersona(persona);

// Aca crearemos una func donde formaremos un nuevo obj implicito ya con los valores del obj principal
const objetoImplicito = ({name, lastName, Edad, ubicacion, profesion}) => ({
    nameUser: name,
    lastNameUser: lastName,
    EdadUser: Edad,
    ubicacionUser: ubicacion,
    latlng: {
        lat: 12.2323,
        lng: 64.7237
    },
    trabajo: profesion
});

const {nameUser, ubicacionUser, latlng: { lat, lng}, trabajo } = objetoImplicito(persona);
console.log(nameUser, ubicacionUser, lat, lng, trabajo)

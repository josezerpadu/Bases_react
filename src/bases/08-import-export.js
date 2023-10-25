// Import, export y funciones comunes de arreglos

import heroes, { ejemploImportaciones } from "../data/heroes";

// Aca crearemos una funcion que devuelve el objeto si se encuentra su id

export const getHeroesById = (id) => heroes.find( (elemnt) => elemnt.id === id);




// console.log( getHeroesById(2) );

// otra tarea pero esta vez con owner
export const getHeroeByOwner = (buscando) => heroes.filter((elemnt) => elemnt.owner === buscando);

//console.log(getHeroeByOwner('DC'))
//console.log(ejemploImportaciones);
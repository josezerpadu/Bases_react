import { getHeroesById } from "./bases/08-import-export";


// const promesa = new Promise((resolve, reject) => {

//     setTimeout( () => {
//         const heroe =(getHeroesById(2))
//         resolve(heroe)

//        reject('No se encontro el heroe')
//     }, 2000)

// })

// promesa.then((result) => console.log('Heroe: ', result))
// .catch((err) => console.warn(err))

const getHeroesByIdAsync = (id) =>{

    return new Promise((resolve, reject) => {
       
        setTimeout( () => {
            const heroe =  getHeroesById(id)
            if (heroe) {
                resolve(heroe)
            }else {
                reject('No se encontro heroe')
            }
    }, 2000)
    
    })
}

getHeroesByIdAsync(10)
.then( console.log)
.catch( console.warn )



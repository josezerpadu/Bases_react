// ASYNC Y AWAIT 

const getImagen = async() => {

    try {
        
        const apiKeys  = 'M1VBGGkPNIsMyvfW4xyHGr3Y3wLoOKrb';
        const resp     =  await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKeys }`);
        const { data } = await resp.json();
        // Desestrucuturacion del objeto data.
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
 
    } catch (error) {
        console.log(error)
    }
   

}

getImagen()


// const apiKeys = 'M1VBGGkPNIsMyvfW4xyHGr3Y3wLoOKrb';

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKeys }`);

// peticion.then( (resp) => resp.json() )
//         .then( ({data }) => {
//             const { url } = data.images.original;

//             const img = document.createElement('img');
//             img.src = url;

//             document.body.append( img );
//         })
// .catch( console.warn );


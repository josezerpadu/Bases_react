// Promesas peticion a api keys
const apiKeys = 'M1VBGGkPNIsMyvfW4xyHGr3Y3wLoOKrb';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKeys }`);

peticion.then( (resp) => resp.json() )
        .then( ({data }) => {
            const { url } = data.images.original;

            const img = document.createElement('img');
            img.src = url;

            document.body.append( img );
        })
.catch( console.warn );



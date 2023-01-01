/* const getImagenPromesa = () => new Promise ( resolve => resolve('hola https://holamundo'))
getImagenPromesa().then( console.log) */


const getImagen = async () => {
    try {

    const apiKey = 'MNWppXbWfAXdzktPaPfI3QB8XSN1RLBd';
    const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const {data} = await respuesta.json()
    const { url } = data.images.original

    const img = document.createElement('img');
    img.src = url;
    
    document.body.append(img)


    } catch (error) {
        
        console.error(error)
    }
    
}

getImagen();
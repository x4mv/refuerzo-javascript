// Desestructuracion 
// Asignacion desestructurante

const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'IronMan',
    rango: 'soldado'
};

/* console.log( persona.nombre);
console.log( persona.edad);
console.log( persona.clave); */

const {nombre, edad, clave} = persona;

// console.log(nombre, edad, clave)

const Context = ({clave, nombre, edad, rango = 'capitan'}) => {
    
    // console.log(nombre , edad, rango)

    return {
        nombreClave: clave,
        anios: edad, 
        latlng: {
            lat: 1234.234,
            lng: 324.234
        }
    }
}


const avenger = Context(persona);

const { nombreClave, anios, latlng} = avenger

// const { nombreClave, anios, latlng:{ lat, lng}} = avenger

const {lat, lng} = latlng

console.log(nombreClave , anios)
console.log(`la latitud es ${lat}, y la longitud es ${lng}`)
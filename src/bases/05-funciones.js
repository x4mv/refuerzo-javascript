// Funciones en javascript


/*  No se suele usar 
function saludar ( nombre ){
    return `hola, ${nombre}`
}; */


// Forma recomendada 
/* const saludar = function( nombre ){
    return `Hola, ${nombre} `
}; */


// funcion flecha 
const saludar2 = ( nombre ) => {
    return `Hola, ${nombre} `
};

// funcion flecha reducida 
const saludar3 = (nombre ) => `hola, ${nombre}`;

// funcion flecha  reducida 
const saludar4 = () => `hola mundo`;

console.log(saludar2('Funcion flecha normal'));
console.log(saludar3('Funcion flecha normal forma reducida '));
console.log(saludar4());

const getUser = () => ({
        uid: 'ABC123', 
        username: 'x4mv'
    });

const user = getUser()
console.log(user)

// Tarea 
// 1- Transformar a una funcion flecha 
// 2- Tiene que retornar un objeto implicito
// 3- Pruebas 

function getUsuarioActivo(nombre) {
    return{
        uid: 'ABC567',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('fernando')

console.log(usuarioActivo)


// Tarea - resolucion 

const usuarioActivo2 = (nombre) =>
    ({
        uid: 'ABC567',
        username: nombre
    });

console.log(getUsuarioActivo('sergio')) 
const persona = {
    nombre: 'x4mv',
    apellido: 'caceres',
    edad: 45,
    direccion: {
        ciudad: 'NYC',
        zip: 1234,
        lat: 1223.234,
        lng: 123.1231,
    }
};

// console.table(persona);

console.log(persona);

// copiando la referencia (no se hace)
// const persona2 = persona;

const persona2 = {...persona}
persona2.nombre = 'luxu';

console.log(persona2);
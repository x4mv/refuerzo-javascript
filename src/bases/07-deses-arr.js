

const personajes = [ 'goku', 'vegeta', 'trunks' ];

/* console.log(personajes[0])
console.log(personajes[1])
console.log(personajes[2]) */

const [ p1 ,  ,p3] = personajes
console.log(p1, p3)

const retornaArrgelo = () =>{
    return ['ABC', 123];
}

const [letras, numeros] = retornaArrgelo();

console.log(letras, numeros);

// Tarea 
// 1- el primer valor del arreglo se llamara nombre 
// 2- el segundo valor se llamara setNombre 

const State = ( valor ) => {
    return [valor, ()=>{console.log('Hola Mundo')}];
}

// const arr = State('Goku');

//console.log(arr)


// Tarea resolucion 

const [ nombre , Nombre] = State('Goku')

console.log(nombre)
Nombre()






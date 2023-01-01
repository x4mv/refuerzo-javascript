// import {heroes} from './data/heroes';
import heroes, {owners} from '../data/heroes'





// find => devuelve la primera coincidencia 
const getHeroeById = (id) => heroes.find(heroe => heroe.id === id );

// console.log(getHeroeById(2));


// filter => devuelve todas las coincidencias
const getHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner) ;

// console.log(getHeroesByOwner('DC'));


export {
    getHeroeById as default,
    getHeroesByOwner
}
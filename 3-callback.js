// CREACION MANUAL DEL METODO MAP COMO FUNCION Y COMO MÉTODO
// un callback es un argumento de una función que es también una función

// const doble = [1, 2, 3].map((numero) => {
//     return numero * 2
// })
// console.log(doble)

// function map(array, callback) {
//     const arrayResultado = [];
//     for (let i = 0; i < array.length; i++) {
//         arrayResultado.push(callback(array[i]));
//     }
//     return arrayResultado;
// }

// const doble = map([1, 2, 3], (numero) => {
//     return numero * 2
// })
// console.log(doble)

class CustomArray {
    constructor(...args) {
        this.args = args;
    }

    map(callback) {
        let newArray = [];
        for (let i = 0; i < this.args.length; i++) {
            newArray.push(callback(this.args[i]));
        }
        return newArray;
    }
}

const array = new CustomArray(1, 2, 3);
const doble = array.map((numero) => {
    return numero * 2
});
console.log(doble);
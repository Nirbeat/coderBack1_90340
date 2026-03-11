// PODEMOS (Y DEBEMOS) DESARROLLAR NUESTROS PROPIOS MÓDULOS PARA
// TENER BIEN ORGANIZADO NUESTRO CÓDIGO Y EVITAR LO QUE SE LLAMA
// "SPAGHETTI"
// POR EJEMPLO, EN ESTE MÓDULO DESARROLLAREMOS LAS FUNCIONES PARA LAS
// OPERACIONES MATEMÁTICAS BÁSICAS
export function sumar(num1, num2) {
    return num1 + num2;
}

export function restar(num1, num2) {
    return num1 - num2;
}

export function multiplicar(num1, num2) {
    return num1 * num2;
}

export function dividir(num1, num2) {
    if (num2 === 0) {
        return "No se puede dividir por cero";
    }
    return num1 / num2;
}

// CUANDO DESARROLLEMOS UN MÓDULO VAMOS A QUERER EXPORTARLO PARA
// QUE SEA UTILIZADO EN DISTINTOS LUGARES DE NUESTRA APLICACIÓN Y,
// DE NUEVO, DEPENDERÁ DE QUE TIPO DE PROYECTO TENGAMOS PARA
// EXPORTARLO O IMPORTARLO
// -----------------------------------------------------
// // ASÍ SE HARÍA EN COMMON
// module.exports = {
//     sumar, restar, multiplicar, dividir
// }
// --------------------------------------------------------
// // ASÍ SE HARÍA EN MODULE
export default {
    sumar, restar, multiplicar, dividir
}

// EN AMBOS CASOS EXISTE LA POSIBILIDAD DE EXPORTAR UNO A UNO LAS
// FUNCIONALIDADES, PERO EN COMMON ES BASTANTE ATÍPICO
// EN MODULE, EN CAMBIO, SÍ ES MAS COMÚN (Y ÚTIL MUCHAS VECES) EXPORTAR
// LAS FUNCIONALIDADES O VARIABLES UNA A UNA ANTEPONIENDO export:
// export function funcionalidad(){*aca va la logica*} 
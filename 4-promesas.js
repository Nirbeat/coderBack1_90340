// EJEMPLO DE PROMESA QUE PROHIBE DIVIDIR POR CERO
function dividir(dividendo, divisor) {
    return new Promise((resolve, reject) => {
        if (divisor == 0) {
            reject("no se puede dividir por cero");
        } else {
            resolve(dividendo / divisor);
        }
    })
}
// EXPORTAMOS LA PROMESA PARA PODER USARLA EN OTRO ARCHIVO
module.exports = dividir;



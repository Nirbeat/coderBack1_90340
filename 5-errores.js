// LANZAMIENTO DE ERRORES
// siempre que haya un error podemos (y debemos) lanzar el error
// el error es una instancia de clase, y se le puede pasar un 
// mensaje de error. Ese mensaje podemos mostrarlo en consola
// throw new Error("error de prueba para coder");
// console.log("lo que sea");

// USO DE TRY/CATCH
// dentro del bloque try se intenta hacer algo, si eso falla se lanza
// error y se captura y maneja en el catch
// try {
//     /**intentar hacer algo */
//     throw new Error("fallo dentro del try")
// } catch (error) {
//     console.log(error.message)
// }

// en este ejemplo lanzamos error si se intenta dividir por cero
// class OperacionesMatematicas{
//     suma(num1, num2){
//         return num1+num2;
//     };

//     resta(num1,num2){
//         return num1-num2;
//     };
    
//     multiplicacion(num1,num2){
//         return num1*num2;
//     };
    
//     division(num1,num2){
//         if(num2 == 0){
//             throw new Error("no se puede dividir por cero");
//         }else return num1/num2;
//     };
// }

// try {
//     const resultado = new OperacionesMatematicas().division(6,3);
//     console.log(resultado);
// } catch (error) {
//     console.log(error.message, "intente con otro numero distinto de cero")
// }
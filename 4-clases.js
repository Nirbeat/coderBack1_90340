// CLASE QUE PERMITE HACER LAS 4 OPERACIONES MATEMÁTICAS BÁSICAS
// class OperacionesMatematicas{
//     suma(num1, num2){
//         return num1+num2;
//     };

//     resta(){

//     };
    
//     multiplicacion(){

//     };
    
//     division(){

//     };
// }
// INSTANCIA DE CLASE
// la clase es una "plantilla" para crear objetos con las mismas 
// propiedades y métodos, y se instancian con la palabra "new"

// const operador = new OperacionesMatematicas();
// const resultado = operador.suma(3,4);
// console.log(resultado);

// EJEMPLO DE HERENCIA DE CLASES
// cuando una clase hereda de otra (clase hija), adquiere 
// automáticamente las propiedades de la otra clase (clase padre)

class Persona{
    nombre;
    aNacimiento;
    dni;
    raciocinio = true;
    constructor(nombre, aNacimiento, dni){
        this.nombre = nombre;
        this.aNacimiento = aNacimiento;
        this.dni = dni;
    }

    caminar(){

    }

    comer(){

    }

    dormir(){

    }
}

// const persona1 = new Persona("Maxi", 1989, 34000000);
// const persona2 = new Persona("Matias", 2000, 44000000);

// console.log(persona1.nombre);
// console.log(persona2.nombre);

class Empleado extends Persona{
        
        constructor(nombre, aNacimiento, dni, trabajo){
            super(nombre, aNacimiento, dni)
            this.trabajo = trabajo;
    }

    trabajar(){

    }
}

const empleado1 = new Empleado("Maxi", 1989, 34000000, "profesor");

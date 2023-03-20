// Examples bases of TS and POO
class Teacher {

    // public: puede trabajar con esas propiedades de forma libre dentro y fuera de la classes
    // private: puedo trabajar con esas propiedas de forma libre dentro de la clase pero no fuera 
    // protected: puedo trabajar con esas propiedas de forma libre dentro de la clase y también fuera pero solo desde clases que hereden de la clase padre 
    // por default: las propiedades son públicas

    // !: required && que solo pueda recibir valores de ese tipo, no puede ser nulo ni undefined
    // ?: el valor es opcional
    // las definiciones sin ! y ?: pueden definirse en el lenguaje con una definición de undefined y también null
    // any: acepta un valor de cualquier tipo
    // readonly: es un dato o definición de solo lectura

    /*name: string
    lastname!: string 
    cod?: number*/
    //readonly fullname: string

    // forma 1 de inicialización
    /*constructor(name: string, lastname: string, cod: number) {
        this.name = name
        this.lastname = lastname
        this.cod = cod
        //this.fullname = `${this.name} ${this.lastname}`
    }*/

    // constructor: es lo primero que se ejecuta en una clase
    /*constructor() {
        this.initialize()
    }

    // es una definición incorrecta del ciclo de vida de mis propiedades de clase
    initialize() {
        this.name = "Hector"
        this.lastname = "Salas"
        this.cod = 12
    }*/

    // forma 2 de inicialización
    constructor(public name: string, public lastname: string, public cod: number) {

    }

}

// Instancia de Teacher
const teacher: Teacher = new Teacher("Hector", "Salas", 12)
console.log(teacher)
//console.log(teacher.name)
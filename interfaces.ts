// interfaces examples
interface ITeacher {
    name: string
    lastname: string
    cod: number // por default el ! viene ya definido

    // no tienen implementación
}

//const teacher: Teacher = { cod: 12, name: "Mijael", lastname: "Salas"}
//console.log(teacher)

// forma 4 de inicialización
class TeacherExample {

    name: string
    lastname: string
    cod: number

    constructor({ name, lastname, cod }: ITeacher) {
        this.name = name
        this.lastname = lastname
        this.cod = cod

    }

}

const teacherObj = new TeacherExample({ lastname: "Salas", name: "Mijael", cod: 12 })
console.log(teacher)

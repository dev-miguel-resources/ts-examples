// Arq.Hexagonal Example
// 3 capas: domain, infraestructure y application

// Domain: Repository
// design pattern: facade
interface TeacherRepository {
    insert(teacher: Teacher): Teacher 
}

// PRINCIPIOS SOLID: Single Responsability (OK)
// PRINCIPIOS SOLID: Segregation Interface
// PRINCIPIOS SOLID: Open/Close
// PRINCIPIOS SOLID: Sustitution of Liskov
// PRINCIPIOS SOLID: Inversion Dependency

// Domain
// Data Model
// Domain Model
class Teacher {

    constructor(public name: string, public lastname: string, public cod: number) {

    }
}

// application
class TeacherApplication {

    insert(teacher: Teacher) {

        const infraestructure: TeacherInfraestructure = new TeacherInfraestructure()
        const insertedTeacher = infraestructure.insert(teacher)
        return insertedTeacher
    }
}

// infraestructure
class TeacherInfraestructure {

    insert(teacher: Teacher) {
       return teacher 
    }
}

const teacher: Teacher = new Teacher("Miguel", "Chamorro", 12)
const infraestructure: TeacherInfraestructure = new TeacherInfraestructure()
const application: TeacherApplication = new TeacherApplication()
console.log(application.insert(teacher))
//console.log(teacher)

// Arq.Hexagonal Example
// 3 capas: domain, infraestructure y application

// Domain: Repository
// design pattern: facade
// abstract class
abstract class TeacherAbs {
    abstract insert(teacher: Teacher): Teacher
    /*abstract list(): Teacher[]

    validation(teacher: Teacher) {
        return true
    }*/
}

// Domain: Repository
// design pattern: facade
interface TeacherRepository {
    insert(teacher: Teacher): Teacher
    validationNationality(teacher:Teacher): boolean
}

/*interface CrudRepository {
    list(): Teacher[]
    insertTeacher(teacher: Teacher): Teacher
    updateTeacher(teacher: Teacher): Teacher
    delete(guid: string): Teacher
    listOne(guid: string): Teacher
}*/

/*interface ListTeacherRepository {
    list(): Teacher[]
}

interface InsertTeacherRepository {
    insert(teacher: Teacher): Teacher
}*/

// PRINCIPIOS SOLID: Single Responsability (OK)
// PRINCIPIOS SOLID: Segregation Interface (OK)
// PRINCIPIOS SOLID: Open/Close (OK)
// PRINCIPIOS SOLID: Sustitution of Liskov/Extends (OK)
// PRINCIPIOS SOLID: Inversion Dependency (PENDING)

// pattern design

// Domain
// Data Model
// Domain Model (
class Teacher {

    constructor(public name: string, public lastname: string, public cod: number) {

    }
}

// application
class TeacherApplication {

    // design pattern: injection dependency
    constructor(private infraestructure: TeacherRepository) {

    }

    insert(teacher: Teacher) {

        const isValid = this.infraestructure.validationNationality(teacher)

        if (isValid) {
            const insertedTeacher = this.infraestructure.insert(teacher)
            return insertedTeacher
        }

        return null

    
        /*const infraestructure: TeacherInfraestructure = new TeacherInfraestructure()
        const insertedTeacher = infraestructure.insert(teacher)
        return insertedTeacher*/
    }
}

// infraestructure
class TeacherInfraestructure extends TeacherAbs {

    insert(teacher: Teacher) {
        return teacher
    }

    validationNationality(teacher: Teacher) {
        return true
    }
}

const teacher: Teacher = new Teacher("Miguel", "Chamorro", 12)
const infraestructure: TeacherRepository = new TeacherInfraestructure()
const application: TeacherApplication = new TeacherApplication(infraestructure)
console.log(application.insert(teacher))
//console.log(teacher)



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
class TeacherInfraestructure extends TeacherAbs  {

    insert(teacher: Teacher) {
       return teacher 
    }    
}

const teacher: Teacher = new Teacher("Miguel", "Chamorro", 12)
const infraestructure: TeacherInfraestructure = new TeacherInfraestructure()
const application: TeacherApplication = new TeacherApplication()
console.log(application.insert(teacher))
//console.log(teacher)

class Classroom {
    private students: string[];
    private teacher: string;

    constructor(teacher: string) {
        this.teacher = teacher;
        this.students = [];
    }

    addStudent(student: string): void {
        this.students.push(student);
    }

    removeStudent(student: string): void {
        this.students = this.students.filter(s => s !== student);
    }

    listStudents(): string[] {
        return this.students;
    }

    getTeacher(): string {
        return this.teacher;
    }
}

// Example usage
const myClassroom = new Classroom("Mr. Smith");
myClassroom.addStudent("Alice");
myClassroom.addStudent("Bob");
console.log(myClassroom.listStudents()); // ["Alice", "Bob"]
myClassroom.removeStudent("Alice");
console.log(myClassroom.listStudents()); // ["Bob"]
console.log(myClassroom.getTeacher()); // "Mr. Smith"
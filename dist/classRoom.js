"use strict";
class Classroom {
    constructor(teacher) {
        this.teacher = teacher;
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    removeStudent(student) {
        this.students = this.students.filter(s => s !== student);
    }
    listStudents() {
        return this.students;
    }
    getTeacher() {
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

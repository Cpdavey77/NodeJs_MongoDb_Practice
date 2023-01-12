const { format } = require("path");
const Student = require("./studentsCrud.js");

const student = {name: "Patrick", hobby: "Playing"}

//// Test running the application
// const run = async() => {
//     try
//     {
//         newStudent = new Student();

//         return newStudent.testRun();
//     }
//     catch(err)
//     {
//         console.error(err);
//     }
// }
// run();

//// Inserting a document(student)
// const insert = async(student) => {
//     try
//     {
//         newStudent = new Student();

//         return newStudent.insert(student);
//     }
//     catch(err)
//     {
//         console.error(err);
//     }
// }
// insert(student);

//// Getting all student
// const findAllStudents = async() => {
//     try
//     {
//         newStudent = new Student();

//         return newStudent.findAll();
//     }
//     catch(err)
//     {
//         console.error(err);
//     }
// }
// findAllStudents();

// // Get One Student
// const findStudent = async(student) => {
//     try
//     {
//         newStudent = new Student();

//         return newStudent.findOne(student);
//     }
//     catch(err)
//     {
//         console.error(err);
//     }
// }
// findStudent("Patrick");


// // Get One Student
// const findStudent = async(student) => {
//     try
//     {
//         newStudent = new Student();

//         return newStudent.findOne(student);
//     }
//     catch(err)
//     {
//         console.error(err);
//     }
// }
// findStudent("Patrick");

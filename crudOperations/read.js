const Student = require("../src/studentsCrud.js");

const student = "Patrick"

// // Query one student

// const getStudent = async(name) => {
//     try
//     {
//         const newStudent = new Student();
//         newStudent.findOne(name);
//     }
//     catch(err)
//     {
//         console.error(err);
//     }
// }

// getStudent(student);

// // Query one student

const getAllStudent = async(name) => {
    try
    {
        const newStudent = new Student();
        newStudent.findAll();
    }
    catch(err)
    {
        console.error(err);
    }
}

getAllStudent();
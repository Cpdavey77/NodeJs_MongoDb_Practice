const Student = require("../src/studentsCrud.js");

const student = "Patrick";



const deleteStudent = async(name) => {
    try
    {
        const newStudent = new Student();
        newStudent.deleteStudent(name)
    }
    catch(err)
    {
        console.error(err);
    }
}

deleteStudent(student);
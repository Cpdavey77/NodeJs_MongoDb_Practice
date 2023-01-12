const Student = require("../src/studentsCrud.js");

const student = "Patrick";
const newHobby = {hobby: "Gaming"};


const updateStudent = async(name, update) => {
    try
    {
        const newStudent = new Student();
        newStudent.updateStudent(name, update)
    }
    catch(err)
    {
        console.error(err);
    }
}

updateStudent(student, newHobby);
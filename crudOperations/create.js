const Student = require("../src/studentsCrud");

const aStudent = {name: "Patrick", hobby: "Playing"};


const insertStudent = async(student) => 
{
    try
    {
        const newStudent = new Student();
        newStudent.insert(student)
    }
    catch(err)
    {
        console.error(err);
    }
}   

insertStudent(aStudent);
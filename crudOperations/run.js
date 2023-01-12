const Student = require("../src/studentsCrud.js");

//// Test running the application
const run = async() => {
    try
    {
        const newStudent = new Student();
        newStudent.testRun();
    }
    catch(err)
    {
        console.error(err);
    }
}

run();
const student1 ={
    name: "Tracy",
    course: "SE300"
}
console.log(student1);

const fs = require('fs');

/**
 * Synchronous File Processing
 */

// fs.writeFileSync('message.txt', 'Hello SE300 Students');

// console.log("1. Starting");
// const data = fs.readFileSync('message.txt','utf8');

// console.log("2.", data);
// console.log("3. Finished");

/**
 * Ansynchronous File processing
 */
console.log("1. Starting");

fs.readFile('message.txt', 'utf8', (err, data) =>{
    if(err){
        console.error(err);
        return;
    }
    console.log("2. ", data);

});
console.log("3. Finished");


/**
 * JSON is a text format used to store and exchange structured data.
 * Save JSON to a File 
 */
const student = {
    name: "Jordan",
    course: "SE300",
    grade: 95,
    active: true
};

const jsonData = JSON.stringify(student, null, 2);
console.log(jsonData);

fs.writeFileSync('student.json', jsonData);
console.log("Student saved");


/**
 * Read and Parse the JSON File
 */
const fileData = fs.readFileSync('student.json', 'utf8');

const studentObject = JSON.parse(fileData);
console.log(studentObject);
console.log(studentObject.name);
console.log(studentObject.grade);




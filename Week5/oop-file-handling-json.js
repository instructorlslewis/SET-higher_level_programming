/**
 * Professor Lewis
 * 9/30/2026
 * Reinforces OOP concepts using file and JSON operations organized into small classes and methods.
 * Student → represents the student data.
 * FileManager → handles reading and writing files.
 * JsonManager → handles JSON.stringify() and JSON.parse().
 * 
 */
class Student {
    constructor(name, course, grade) {
        this.name = name;
        this.course = course;
        this.grade = grade;
    }
}


const fs = require('fs');


class FileManager {

    writeFile(fileName, data) {
        fs.writeFileSync(fileName, data);
    }

    readFile(fileName) {
        return fs.readFileSync(fileName, 'utf8');
    }
}


class JsonManager {

    toJSON(object) {
        return JSON.stringify(object, null, 2);
    }

    fromJSON(jsonData) {
        return JSON.parse(jsonData);
    }
}



/**
 * Create an instance from each class
 */

const student = new Student(
    "Morgan",
    "SE300",
    90
);


const fileManager = new FileManager();
const jsonManager = new JsonManager();

/**
 * Convert student to json then write to
 * class-student.json file
 */
const jsonData = jsonManager.toJSON(student); 
                                         
fileManager.writeFile(
    'class-student.json',  //  write student object in json form →check 
    jsonData
);

/**
 * Read JSON file and converts to JavaScript object
 * Then displays specific student properties.
 */
const fileData = 
    fileManager.readFile('class-student.json');
 
const studentObject =

    jsonManager.fromJSON(fileData);

console.log(studentObject);
console.log(studentObject.name);
console.log(studentObject.course);
console.log(studentObject.grade);
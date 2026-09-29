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


const jsonData = jsonManager.toJSON(student); //convert student to json then write to
                                              //class-student.json

fileManager.writeFile(
    'class-student.json',  //  write student object in json form →check 
    jsonData
);


const fileData = 
    fileManager.readFile('class-student.json');
 
const studentObject =

    jsonManager.fromJSON(fileData);

console.log(studentObject);
console.log(studentObject.name);
console.log(studentObject.course);
console.log(studentObject.grade);
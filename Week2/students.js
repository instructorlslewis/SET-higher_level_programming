/**
 *  Student Grade Processor App
 * September 8, 2026 
 * September 10, 2026
 * Professor L.S. Lewis
 */
//Global constants and one student object - allowed outside functions

const REQUIRED_ASSIGNMENT_COUNT = 4;
const ASSIGNMENT_WEIGHT = 0.4;
const EXAM_WEIGHT = 0.6;
const PASSING_GRADE = 50;
const HONOR_ROLL_GRADE = 90;

const student = {
    name: "",
    studentId: "",
    assignmentScores: [],
    examScore: 0
}

//Convert prompt text into a clean String
function cleanText(text){
    if(text === null){
        return "";
    }
    
    return text.trim(); //removes whitespace from the beginning and end of a string

}
    
//Convert one numeric value into a Number
                            
function convertToNumber(numberText){
    if(numberText === null || numberText.trim()=== ""){
        return NaN;
    }

    return Number(numberText);  
}

function convertAssignmentScores(scoreText){  //"85, 90, 78, 92"
    if(scoreText === null || scoreText.trim() === ""){    
        return [];
    } 
    const scorePieces = scoreText.split(",");   //["85", "90", "78", "92"] //divides into an array of strings using a specified separator, comma.
    const scores=[];

    for(let i=0; i < scorePieces.length; i++){
        scores.push(convertToNumber(scorePieces[i]));    //[85, 90, 78, 92]

    }

    return scores;

       
}

function getStudentInput(){
    const nameInput = prompt("Enter the student's name: ");   //"Jane Doe"
    const idInput = prompt("Enter the student ID: ");    //"01"
    const assignmentInput = prompt("Enter exactly 4 assignment scores separated by commas: "); //"85, 90, 78, 92"
    const examInput = prompt("Enter the exam score: ");  //"98.9"

    student.name = cleanText(nameInput);
    student.studentId = cleanText(idInput);
    student.assignmentScores = convertAssignmentScores(assignmentInput);
    student.examScore = convertToNumber(examInput);

    return student;
}

function validateStudent(studentRecord){
    if(studentRecord.name === "" || studentRecord.studentId === ""){
        throw new Error("The student's name and ID are required.");
    }

    if(studentRecord.assignmentScores.length !== REQUIRED_ASSIGNMENT_COUNT){
        throw new Error("Enter exactly 4 assignment scores.");
    }

                                //[85, 90, 78, 92]
    for(let i= 0; i < studentRecord.assignmentScores.length; i++){
        const score = studentRecord.assignmentScores[i];

        if(Number.isNaN(score) || score < 0 || score > 100){
            throw new Error("Each assignment score must be a number from 0 to 100.");
        }
    }//end of "for" loop

    if(Number.isNaN(studentRecord.examScore) || studentRecord.examScore < 0 || studentRecord.examScore > 100){
            throw new Error("The exam score must be a number from 0 to 100.");

    }

}
             //[85, 90, 78, 92]

function calculateAverage(scores){
    let total = 0;

     for(let i=0; i < scores.length; i++){
          total += scores[i];   //85 + 90 + 78 + 92 = 345
        
     }

     return total/ scores.length;    //total/4  = 86.25
}

function calculateFinalGrade(assignmentAverage, examScore){
    return (assignmentAverage * ASSIGNMENT_WEIGHT) + (examScore * EXAM_WEIGHT);  
}

function determineStatus(finalGrade){
    if(finalGrade >= PASSING_GRADE){
        return "Pass";
    }

    return "Fail";

}

function isHonorRoll(finalGrade){
    return finalGrade >= HONOR_ROLL_GRADE;
}

function processStudent(studentRecord){
    validateStudent(studentRecord);

    const assignmentAverage = calculateAverage(studentRecord.assignmentScores);

    const finalGrade = calculateFinalGrade(assignmentAverage, studentRecord.examScore);

    //creating object on fly.... Object literal or anonymous object
    return {
        name: studentRecord.name,
        studentId: studentRecord.studentId,
        assignmentAverage: assignmentAverage.toFixed(2),
        finalGrade: finalGrade.toFixed(2),
        status: determineStatus(finalGrade),
        honorRoll: isHonorRoll(finalGrade)

    };

}

function displayResult(result){
    document.getElementById("result").textContent = `Student: ${result.name}
    Student ID: ${result.studentId}
    Assignment Average: ${result.assignmentAverage}
    Final Grade: ${result.finalGrade}
    Status: ${result.status}
    Honor Roll: ${result.honorRoll ? "Yes" : "No"}  `;
}

function displayError(error){
    document.getElementById("result").textContent = `Error: ${error.message}`;
}

function handleButtonClick(){
  try{
    const studentRecord = getStudentInput();
    const result = processStudent(studentRecord);
    displayResult(result);
  }catch(error){
    displayError(error);
  }

}


document.getElementById("processButton").addEventListener("click", handleButtonClick);
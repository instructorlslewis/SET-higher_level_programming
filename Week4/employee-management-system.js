
/**
 * Professor Lewis
 * September 22, 2026
 */
/**
 * Employee Super/Parent class with constructor,two methods
   and has-a project (implements Composition)
*/ 
class Employee{
    constructor(name, employeeId, department){
        this.name = name;
        this.employeeId = employeeId;
        this.department = department;
        this.project = null;
    }
    
    describe(){
        console.log(`${this.name} works in the ${this.department} department`);
    }
    assignProject(project){
        this.project = project;
    }

}

/**
 * Create and employee object, test the describe() method and property chain methods.
 */
const employee1 = new Employee("Jane", "E101", "Technology");
console.log(employee1);
employee1.describe();
console.log(Object.getOwnPropertyNames(Employee.prototype));
console.log(employee1.hasOwnProperty("describe"));
console.log(Object.getPrototypeOf(employee1) === Employee.prototype);
console.log(Object.keys(employee1));

/**
 * 
 * Developer Subclass/Child class extends Employee (Parent) with constructor that invokes the super()method (Parents constructor) 
 * and one overriden method
   Is-An Relationship:  Developer is-an Employee
*/ 
class Developer extends Employee{
    constructor(name, employeeId, department, language){
        super(name, employeeId, department);

        this.language = language;

    }


    describe(){
        console.log(`${this.name} is a developer who works with ${this.language}.`);
    }
}

/**
 *  Creates and initializes a Developer object, displays it's content, inoke it's overrident method and
 * test it's prototype chain.
 */
const developer1 = new Developer("Tracy", "E102", "Software Engineering", "JavaScript");
console.log(developer1);
developer1.describe();

console.log(Object.getPrototypeOf(developer1));
console.log(Object.keys(developer1));
console.log(Object.getOwnPropertyNames(Employee.prototype));

/**
 * Project an independent class, used in the Employee class to demonstrate Composition
 * Relationships such as, Employee has-a Project.
 */

class Project{
    constructor(projectName, deadline){
        this.projectName = projectName;
        this.deadline = deadline;
    }

    displayProject(){
        console.log(`${this.projectName} is due ${this.deadline}.`);
    }

}

/**
 * Build a project object and assign it to developer1.
 */
const websiteProject = new Project("Company Website", "October 30");
websiteProject.displayProject();

developer1.assignProject(websiteProject);
console.log(developer1);
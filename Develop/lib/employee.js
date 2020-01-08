const inquirer = require("inquirer");

class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }

    getName(){
        // inquirer
        //     .prompt({
        //     message: "Enter the employee's name.",
        //     name: name
        // })
        // .then(answers => {
        //     name = answers.name;
        // });
        return this.name;
    }

    getId(){
        // inquirer
        //     .prompt({
        //     message: "Enter the employee's id.",
        //     name: id
        // })
        // .then(answers => {

        // });
        return this.id;
    }
    
    getEmail(){
        // inquirer
        //     .prompt({
        //     message: "Enter the employee's Email.",
        //     name: email
        // })
        // .then(answers => {
        //     this.email = answers.email;
        // });
    }

    getRole(){
        // inquirer
        //     .prompt({
        //     message: "Enter the employee's role.",
        //     name: role
        // })
        // .then(answers => {
        // });
        return this.role;
    }
    getEmail(){
        return this.email;
    }
}

module.exports = Employee;
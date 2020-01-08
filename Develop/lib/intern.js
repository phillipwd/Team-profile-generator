const Employee = require("./employee");

class Intern extends Employee{
    constructor(school){
        super(name, id, title);
        this.school = school;
    }
    getRole(){
        return intern;
    }
}
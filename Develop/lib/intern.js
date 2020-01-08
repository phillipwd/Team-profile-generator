const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
        this.role = "Intern"
    }
    getSchool(){
        return this.school;
    }
    generateInternCard(){
        return `<div style = "width: 45vw; background-color: rgb(133, 187, 145);">
        <h1>${this.name}</h1>
        <h2>Role: Intern</h2>
        <h2>${this.email}</h2>
        <h2>Attending: ${this.school}</h2>
        <h2>Employee id: ${this.id}</h2>
    </div>`
    }
}

module.exports  = Intern;
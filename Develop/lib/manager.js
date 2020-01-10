const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber; 
        this.role = "Manager"
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    // generateManagerCard(){
    //     return `<div style = "width: 45vw; background-color: red;">
    //         <h1>${this.name}</h1>
    //         <h2>Role: Manager</h2>
    //         <h2>${this.email}</h2>
    //         <h2>office number: ${this.officeNumber}</h2>
    //         <h2>Employee id: ${this.id}</h2>
    //     </div>`
    // }
    genManagerCard()
}

module.exports = Manager;
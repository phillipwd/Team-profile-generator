const Employee = require("./Employee");

class Manager extends(Employee){
    constructor(officeNo){
        super(name, id, email);
        this.officeNo = officeNo; 
    }
    getRole(){
        return Manager;
    }
}
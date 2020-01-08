const Employee = require("./employee");

class Manager extends(Employee){
    constructor(officeNo){
        super(name, id, title);
        this.officeNo = officeNo; 
    }
    getRole(){
        return Manager;
    }
}
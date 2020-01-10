const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
        this.role = "Engineer"
    }
    getGithub(){
        return this.github
    }
    // generateEngineerCard(){
    //     return `<div style = "width: 45vw; background-color: rgb(102, 129, 173);">
    //     <h1>${this.name}</h1>
    //     <h2>Role: Engineer</h2>
    //     <h2>${this.email}</h2>
    //     <h2>github id: ${this.github}</h2>
    //     <h2>Employee id: ${this.id}</h2>
    // </div>`
    // }
    genEngineerCard();
}

module.exports = Engineer;
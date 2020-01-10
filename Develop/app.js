const inquirer = require("inquirer");
const html = require("./templates/generate-main");
const fs = require("fs");
const axios = require("axios");
const employee = require("./lib/Employee");
const manager = require("./templates/genManagerCard")
const engineer = require("./templates/genEngineerCard")
const main = require("./templates/generate-main")
const intern = require("./templates/genInternCard")

//test team:
const team = 
    [
    {name:"MrBighead",id:1,email:"big@glomo.com",officeNumber:508,role:"manager"},
    {name:"Rocko",id:99,email:"rocko@glomo.com",github:"rockoTheDrone",role:"engineer"},
    {name:"Filbert",id:123,email:"FilbertRRBM@glomo.com",school:"O-town University",role:"intern"}
]

const head = html();//gets html head and upper body

team.forEach(element => {
    if(element.role === "manager"){
        const card = manager(element);//generates card with manager data based on role. (works)
    }
    else if(element.role === "engineer"){
        const card = engineer(element);//generates card with engineer data based on role. (works)
    }
    else{
        const card = intern(element);//generates card with intern data based on role. (works)
    }
});

// const fileName = "index.html";
//         function writeToFile(fileName, data) {
//             fs.writeFile(fileName, data, function(err){
//                 if(err) throw(err);
//             })
//         }
//         writeToFile(fileName, pageName);

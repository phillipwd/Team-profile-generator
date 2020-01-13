const inquirer = require("inquirer");
const html = require("./templates/generate-main");
const fs = require("fs");
// const axios = require("axios");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const employee = require("./lib/Employee");
const manager = require("./templates/genManagerCard");
const engineer = require("./templates/genEngineerCard");
const main = require("./templates/generate-main");
const intern = require("./templates/genInternCard");



//test team:
const team = 
    [
    {name:"MrBighead",id:1,email:"big@glomo.com",officeNumber:508,role:"manager"},
    {name:"Rocko",id:99,email:"rocko@glomo.com",github:"rockoTheDrone",role:"engineer"},
    {name:"Filbert",id:123,email:"FilbertRRBM@glomo.com",school:"O-town University",role:"intern"}
]

const fileName = "index.html";
const head = html();//gets html head and upper body
const foot = `      </div>
    </body>
</html>`


function appFile(filename, data){
    fs.appendFile(filename, data, function(err){
        if(err) throw err;
    })
    
};

writeFileAsync(fileName, head);
genCards();

async function genCards(){
    team.forEach(element => {
        let card;
        try{
            if(element.role === "manager"){
                card = manager(element);//generates card with manager data based on role. (works)
            }
            else if(element.role === "engineer"){
                card = engineer(element);//generates card with engineer data based on role. (works)
            }
            else{
                card = intern(element);//generates card with intern data based on role. (works)
            }
            appFile("index.html", card);
        }catch(err){
            console.log(err);    
        };
    });
}

appFile("index.html", foot);



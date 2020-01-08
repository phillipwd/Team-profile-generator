const inquirer = require("inquirer");
const html = require("html");
const fs = require("fs");
const axios = require("axios");
const employee = require("./lib/Employee");

const team = new Employee();

team.getName();
#! /usr/bin/env node

import inquirer from "inquirer";

const answers = await inquirer.prompt([
    {
        message: "Enter your first number: ",
        type: "number",
        name: "num1",
        
    },
    {
        message: "Enter your second number: ",
        type: "number",
        name: "num2",
    },
    {message: "select any operator of your choice: ",
    type: "list",
    name: "operator",
    choices: ["add", "sub", "mul", "div"]},
]);

if (answers.operator === "add") {
    console.log("Your result is = ", answers.num1 + answers.num2);
} else if (answers.operator === "sub") {
    console.log("Your result is = ", answers.num1 - answers.num2);
} else if (answers.operator === "mul") {
    console.log("Your result is = ", answers.num1 * answers.num2);
} else if (answers.operator === "div") {
    console.log("Your result is = ", answers.num1 / answers.num2);
}
else {
    console.log("invalid operator");
}
console.log("THE END");
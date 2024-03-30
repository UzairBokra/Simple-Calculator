#! /usr/bin/env node  
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "fistNumber" },
    { message: "Enter your second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the opeators to perform operation",
        type: "list",
        name: "operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    }
]);
if (answer.operators === "Addition") {
    console.log(`Your answer is: ${answer.fistNumber + answer.secondNumber}`);
}
else if (answer.operators === "Subtraction") {
    console.log(`Your answer is: ${answer.fistNumber - answer.secondNumber}`);
}
else if (answer.operators === "Multiplication") {
    console.log(`Your answer is: ${answer.fistNumber * answer.secondNumber}`);
}
else if (answer.operators === "Division") {
    console.log(`Your answer is: ${answer.fistNumber / answer.secondNumber}`);
}
else {
    console.log("Please slect a valid operators");
}


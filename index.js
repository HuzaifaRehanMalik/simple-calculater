#! /usr/bin/env node 
import inquirer from "inquirer";
const answere = await inquirer.prompt([
    { message: "Enter First number ", type: "number", name: "FirstNumber" },
    { message: "Enter Second number ", type: "number", name: "SecondNumber" },
    {
        message: "Select one of the operater to perforam action",
        type: "list",
        name: "operater",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answere.operater === "Addition") {
    console.log("Your value is", answere.FirstNumber + answere.SecondNumber);
}
else if (answere.operater === "Subtraction") {
    console.log("Your value is", answere.FirstNumber - answere.SecondNumber);
}
else if (answere.operater === "Multiplication") {
    console.log("Your value is", answere.FirstNumber * answere.SecondNumber);
}
else if (answere.operater === "Division") {
    if (answere.SecondNumber == 0) {
        console.log(0);
    }
    else {
        console.log("Your value is", answere.FirstNumber / answere.SecondNumber);
    }
}
else {
    console.log("Invalid operater");
}

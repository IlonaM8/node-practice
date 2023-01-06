const cliColor = require("cli-color");

function outputMessage(message){
    console.log(cliColor.green(`The message is ${message}`));
}

outputMessage(" Hey hey!");


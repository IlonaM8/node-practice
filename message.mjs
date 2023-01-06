import cliColor  from "cli-color";

function outputMessage(message){
    console.log(cliColor.yellow(`The message is ${message}`));
}

outputMessage(" Hey hey!");


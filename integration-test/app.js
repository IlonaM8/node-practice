const { createServer } = require("node:http");

function createApp(){
    return createServer((request, response) => {
        response.statusCode = 200;

        response.setHeader("Content-Type", 'text/html');

        //const jsonResponseBody = JSON.stringify({message: "Welcome to the World Wide Web!" });

        response.end(`Welcome to the World Wide Web!`);
    });
}

module.exports = createApp;

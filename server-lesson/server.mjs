// import the createServer method from nodejs
import { createServer } from 'node:http';


//create a new server instance with the create server method
//create server method has a callback fun that accepts two param: req object and a res object.

//we do this because we want to accept req and send back responses
const server = createServer((req, res) =>{

    console.log('request received');

    res.statusCode = 200;

    res.setHeader('Content-Type', 'text/html');

    res.end('<html><body><h1>This page was served with Node.js!</h1></body></html>');

});

//tell the server to listen to new connection
//listen method has the first arg is a port, second arg is a callback function.

server.listen(3000, () =>{
    console.log(`Server running at http://localhost:3000`);
});


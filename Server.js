const http = require('http');
const port = 3000;
const host = "127.0.0.1";
const { Router } = require("./Router.js");


const server = http.createServer(Router); //create Server


server.listen(port, host, () => { //listen to Port 3000
    console.log(`Server running at http://${host}:${port}/`);
});
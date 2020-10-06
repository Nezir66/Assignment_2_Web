const fs = require("fs");
const { welcomePage, defaultPage, enterPlayer1 , enterPlayer2 , enterPlayer3 } = require("./Pages.js");
const { addPlayer } = require("./Player1.js");
const { addPlayer2 } = require("./Player2.js");
const { addPlayer3 } = require("./Player3.js");


function Router(request, response){
    
    response.setHeader("Content-Type", "text/html");
    const { url, method } = request;    

    if (request.url === "/") {
        response.writeHead(301, { Location: "/Assignment.html" });
        return response.end();
    }
    
    if (request.url === "/Assignment.html") {
        response.setHeader("Content-Type", "text/html");
        fs.readFile('Player1.txt',function(err1, data1){//get data from Player1.txt
            fs.readFile('Player2.txt',function(err2, data2){//get data from Player2.txt
                fs.readFile('Player3.txt',function(err3, data3){//get data from Player3.txt
                     if(err1 || err2 || err3){
                           throw new Error(); // throw error if something went wrong
                     }
                     let data = "Player 1: " + data1 + "\nPlayer 2: " + data2 + "\nPlayer 3: " + data3;//save the data from the text files in "data"
                     fs.writeFile('allPlayer.txt', data , (err)=>{// write "data" to allPlayer.txt
                         if(err){
                             throw new Error();
                         }
                     });
                 });
            });
            
        });

        return response.end(welcomePage);
    } else if (request.url === "/Assignment/enterPlayer1.html") {
        return response.end(enterPlayer1);// show page enterPlayer1 if /Assignment/enterPlayer1.html requested
    } else if (url === "/Assignment/deleteP1" && method === "POST") {
        fs.unlink('Player1.txt', (err) => { // delete Player1.txt 
            if (err) {
                throw err;
            }
            console.log("Player 1 is deleted");
        });
        fs.writeFile('Player1.txt', 'No Player choosen', function (err) {//create a new Player1.txt with data "No Player choosen"
            if (err) throw err;
          }); 
        response.writeHead(302, { Location: "/" });//go to first welcome page
    } else if (request.url === "/Assignment/enterPlayer2.html") {
        return response.end(enterPlayer2);// show page enterPlayer2 if /Assignment/enterPlayer2.html requested
    } else if (url === "/Assignment/deleteP2" && method === "POST") {
        fs.unlink('Player2.txt', (err) => {// delete Player2.txt 
            if (err) {
                throw err;
            }
            console.log("Player 2 is deleted.");
        });
        fs.writeFile('Player2.txt', 'No Player choosen', function (err) {//create a new Player2.txt with data "No Player choosen"
            if (err) throw err;
          }); 
        response.writeHead(302, { Location: "/" });//go to first welcome page
    } else if (request.url === "/Assignment/enterPlayer3.html") {
        return response.end(enterPlayer3);// show page enterPlayer3 if /Assignment/enterPlayer3.html requested
    } else if (url === "/Assignment/deleteP3" && method === "POST") {
        fs.unlink('Player3.txt', (err) => {// delete Player3.txt 
            if (err) {
                throw err;
            }
            console.log("Player 3 is deleted.");
        });
        fs.writeFile('Player3.txt', 'No Player choosen', function (err) {//create a new Player3.txt with data "No Player choosen"
            if (err) throw err;
          }); 
        response.writeHead(302, { Location: "/" });//go to first welcome page
    } else if (request.url === "/Assignment/allPlayers.html") {
        fs.readFile('allPlayer.txt', 'utf8', function(err, data) {//create a Page for allPlayers with the data of allPlayer.txt shown on this page
            if (err) throw err;
            response.write('<html>');
            response.write('<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">');
            response.write('<head><title>Assignment 2</title></head>');
            response.write('<div class="w3-panel">');
            response.write('<div class="w3-card-4">');
            response.write('<div class="w3-container w3-yellow">');
            response.write('<h2>The Players:</h2>');
            response.write('</div>');
            response.write('<div class="w3-container">');
            response.write(data);
            response.write('<form action="/Assignment.html" method="POST">');
            response.write('<div><button type="submit">Go back</button></div>');
            response.write('</form>');
            response.write('</div>');
            response.write('</div>');
            response.write('</div>');
            response.write('</html>');
        });
        return;
    } else if (url === "/Assignment/enterPlayers/Player1" && method === "POST") {
        let data = "";
        request.on("data", chunk => (data += chunk.toString()));// save every chunk to data
        request.on("end", () => {
            addPlayer(data); // add the choosen Player to data
            response.writeHead(302, { Location: "/" });
            return response.end();
        });
        return;
    } else if (url === "/Assignment/enterPlayers/Player2" && method === "POST") {
        let data = "";
        request.on("data", chunk => (data += chunk.toString()));
        request.on("end", () => {
            addPlayer2(data);
            response.writeHead(302, { Location: "/" });
            return response.end();
        });
        return;
    } else if (url === "/Assignment/enterPlayers/Player3" && method === "POST") {
        let data = "";
        request.on("data", chunk => (data += chunk.toString()));
        request.on("end", () => {
            addPlayer3(data);
            response.writeHead(302, { Location: "/" });
            return response.end();
        });
        return;
    } else if (request.url === "/Assignment/delete.html"){
        return response.end(deleteDone); // if /Assignment/delete.html requested show page deleteDone
    } 
    response.statusCode = 404;
    response.end(defaultPage);// if default show defaultPage
 }

 module.exports = { Router };
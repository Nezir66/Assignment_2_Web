const fs = require("fs");

function addPlayer(data) {
    const filename = "./Player1.txt";
    const note = processUserData1(data);
    createNotes(filename, note);
    }

function processUserData1(data) {
    return decodeURIComponent(data)
    .replace(/(.*?)=(.*)/g, (m, key, value) => value)
    .replace(/\+/g, " ");
    }

function createNotes(filename, note) {
    console.log(`Creating note ${filename}:`, "\n", note);
    fs.writeFile(filename, note, error => {
        if (error) {
        console.error(`Could not create file ${filename}.`);
        console.error(error);
        }
    });
    }


    module.exports = { addPlayer };
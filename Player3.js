const fs = require("fs");

function addPlayer3(data) {
    const filename = "./Player3.txt";
    const note = processUserData3(data);
    createNotes(filename, note);
    }

function processUserData3(data) {
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

    module.exports = { addPlayer3 };

const fs = require('fs')
const chalk = require('chalk');
const { debug } = require('console');


const notesFileName = 'my-notes.json'

const addNote = (id, body) => {
    const notes = getNotesFromFile();
    const idTaken = notes.filter(x => x.id === id);
    if (idTaken.length === 0) {
        notes.push({
            id: id,
            body: body
        })
        saveNotesToFile(notes);
        console.log(chalk.green.bold.inverse('note added successfully'));
    } else {
        console.log(chalk.red.bold.inverse('id already taken'));
    }
}


const removeNote = (id) => {
    const allNotes = getNotesFromFile();
    const notesLeft = allNotes.filter(x => x.id !== id);
    if (allNotes.length > notesLeft.length) {
        console.log(chalk.green.bold.inverse(`note with id : ${id} was removed`));
        saveNotesToFile(notesLeft)
    } else {
        console.log(chalk.red.bold.inverse('id not found'));
    }
}


const showAllNotes = () => {
    const allNotes = getNotesFromFile();
    if (allNotes.length > 0) {
        allNotes.forEach(n => {
            console.log(chalk.green.bold.inverse(`id : ${n.id} , body : ${n.body}`));
        })
    } else {
        console.log(chalk.red.bold.inverse('no notes found'));
    }
}


const showNoteById = (id) => {
    const allNotes = getNotesFromFile();

    debugger
    
    let found = false
    allNotes.forEach(n => {
        if (n.id === id) {
            console.log(chalk.green.bold.inverse(`id : ${n.id} , body : ${n.body}`));
            found = true
        }
    })

    if (!found) {
        console.log(chalk.red.bold.inverse('no notes found'));
    }

}




const getNotesFromFile = () => {
    try {
        const dataBuffer = fs.readFileSync(notesFileName) //when we read from files , we get bytes
        const dataJSON = dataBuffer.toString() //convert into JSON
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}


const saveNotesToFile = (notes) => {
    const dataJSON = JSON.stringify(notes) //convert into JSON
    fs.writeFileSync(notesFileName, dataJSON) //when we read from files , we get bytes
}




module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    showAllNotes: showAllNotes,
    showNoteById: showNoteById
}
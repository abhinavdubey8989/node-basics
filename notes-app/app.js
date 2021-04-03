
const yargs = require('yargs');
const notes = require('./notes');



//provide custom version of our app : nothing fancy
yargs.version('5.3.1'); //node app.js --version


//command to add note 
//when we run "node app.js --help" : <command> <description> is displayed
//when we run "node app.js add" : handler is executed
//builder object is used to support various options when execution the command
yargs.command({
    command: 'add',
    describe: 'used to add new note',
    builder: {
        id: {
            describe: 'unique id for the note',
            demandOption: true,//denotes that "id" is require for add comman to run
            type: 'number'
        },
        body: {
            describe: 'content of the note',
            demandOption: true, //denotes that "body" is require for add comman to run
            type: 'string'

        }

    },
    handler: function (argv) {
        notes.addNote(argv.id, argv.body)
    }
})


//command to remove note 
yargs.command({
    command: 'remove',
    describe: 'used to remove a note',
    builder: {
        id: {
            describe: 'id of the note to be removed',
            demandOption: true,//denotes that "id" is require for add comman to run
            type: 'number'
        },
    },
    handler: function (argv) {
        notes.removeNote(argv.id)
    }
})

//command to list all notes 
yargs.command({
    command: 'showAll',
    describe: 'used to show all notes',
    handler: function () {
        notes.showAllNotes()
    }
})


//command to read note (basicall get by id)
yargs.command({
    command: 'read',
    describe: 'used to read a note',
    builder: {
        id: {
            describe: 'id of the note to read',
            demandOption: true,//denotes that "id" is require for add comman to run
            type: 'number'
        }
    },
    handler: function (argv) {
        notes.showNoteById(argv.id)
    }
})


yargs.parse() //without this , any argv argument will not work above
// console.log(yargs.argv);
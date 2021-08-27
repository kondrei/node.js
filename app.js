const validator = require('validator');
const getNotes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'            
        }
    },
    handler: function(argv) {
        console.log('Title: ', argv.title);
        console.log('Body: ', argv.body);
        
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove note',
    handler: function() {
        console.log('remve note');
    }
})

yargs.command({ 
    
    command: 'list',
    describe: 'list notes',
    handler: function() {
        console.log('listing notes');
    }
})

yargs.command({
    command: 'read',
    describe: 'read note',
    handler: function() {
        console.log('read all the note note');
    }
})

yargs.parse();
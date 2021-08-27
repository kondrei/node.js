const validator = require('validator');
const getNotes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

yargs.command({
    command: 'add',
    describe: 'add a new note',
    handler: function() {
        console.log('adding new note');
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

console.log(yargs.argv)
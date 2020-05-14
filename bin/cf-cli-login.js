const program = require('commander');

program.action(function () {console.log('attempting');});

program.parse(process.argv);
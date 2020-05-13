#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');

program
    .version(pkg.version)
    .command('credentials', 'Manage CF login credentials')
    .parse(process.argv);

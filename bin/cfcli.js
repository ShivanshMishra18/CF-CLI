#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');

program
    .version(pkg.version)
    .command('credentials', 'Manage CF login credentials')
    .command('login', 'Attempt Login')
    .command('logout', 'Logout from CF')
    .parse(process.argv);

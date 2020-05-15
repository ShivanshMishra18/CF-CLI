const program = require('commander');
const chalk = require('chalk')

const login = require('../commands/login');

program.action(async function () {
    try {
        console.log(chalk.dim('[*] Submission without logging would throw error.'));
        // Get csrf key
        // Obtain details for file submission
        // Make submission
        console.log(chalk.green('[+] Submission successful!'));
    } catch (e) {
        console.log(chalk.red().bold('[-] Error Encountered!'))
        console.log(e);
    }
});

program.parse(process.argv);
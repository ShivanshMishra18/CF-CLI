const program = require('commander');
const login = require('../commands/login');


program.action(async function () {
    console.log('attempting');
    try {
        const who = await login.checkLoginStatus();
        if (who !== 'Enter') {
            console.log('Logged in as:', who);
            return;
        } 
    } catch (e) {
        console.log(e);
    }
});

program.parse(process.argv);
const program = require('commander');
const login = require('../commands/login');


program.action(async function () {
    try {
        const who = await login.checkLoginStatus();
        if (who !== 'Enter') {
            console.log('Logged in as:', who);
            return;
        }
        const CSRF_key = await login.obtainCSRF();
        await login.signIn(CSRF_key);
        console.log('Successfuly logged in as <handle>');
    } catch (e) {
        console.log(e);
    }
});

program.parse(process.argv);
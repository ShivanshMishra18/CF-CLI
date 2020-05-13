const Configstore = require('configstore');
const pkg = require('../package.json');

class CredentialsManager {
    constructor() {
        this.conf = new Configstore(pkg.name);
    };

    setCredentials(handle, password) {
        this.conf.set('handle', handle);
        this.conf.set('password', password);
        return;
    };

    getHandle() {
        const handle = this.conf.get('handle');
        if (!handle) {
            throw new Error('No handle configured');
        }
        return handle;
    };

    unsetCredentials() {
        if (!this.conf.get('handle')) {
            throw new Error('No handle configured');
        }
        this.conf.delete('handle');
        this.conf.delete('password');
    };

}; 

module.exports = CredentialsManager;
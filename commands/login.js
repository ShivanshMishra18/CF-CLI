const request = require('request');
const cheerio = require('cheerio');
const {cookiePath} = require('../lib/datafilePaths')


const login = {

    checkLoginStatus() {
        return new Promise( (resolve, reject) => {
            request.get({url: 'https://codeforces.com/enter'}, (e,res,body) => {
                if (e) return reject(e);
                const $ = cheerio.load(body);
                const who = $('.lang-chooser a').eq(2).text();
                resolve(who);
            });
        })
    }

}

module.exports = login;



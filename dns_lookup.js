var readline = require('readline');
var dns = require('dns');

var getDomain = function(domain){
    dns.lookup(domain, function(err, address) {
        if (err) {
            console.log(err);
        } else {
            console.log(`IP Address: ${address}`);
        }
    })
};

var rl  = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Domain name: ', (function(answer) {
    getDomain(answer);
    rl.close();
}))
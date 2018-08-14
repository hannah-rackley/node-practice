var readline = require('readline');
var dns = require('dns');

var getDomain = function(domain){
    dns.lookup(domain, function(err, address) {
        if (!err) {
            console.log(`IP Address: ${address}`);
        } else {
            console.log(err);
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
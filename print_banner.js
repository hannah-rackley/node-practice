//Print a banner
var printBanner = function (text) {
    var i = 0;
    var bannerLength = (text.length + 2);
    while (i < 3) {
        if (i === 0 || i === 2) {
            var row = "*".repeat(bannerLength);
        } else {
            row = `*${text}*`;
        };
        console.log(row);
        i++;
    };
};

// printBanner('Welcome to DigitalCrafts!');

exports.printBanner = printBanner;
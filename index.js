const quotes = require('./data/quotes.json');

module.exports = function () {
    process.on('uncaughtException', function (err) {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        console.log(`\n\nSorry pal, new error!\n\nKeep going with this inspiration quote!\n\n${randomQuote.name}:\n${randomQuote.quote} \n\nHere is the stacktrace:\n\n${err}`);
        process.exit(1);
    });
};

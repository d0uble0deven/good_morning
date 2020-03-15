let data = require('./Data/Data');
var quotes = data.vibes;
var randomQuote;

// randomized data
module.exports = function randomize() {
    let number = Math.floor(Math.random() * Math.floor(data.vibes.length));
    return randomQuote = quotes[number];
}
// randomize();

console.log(randomQuote);
// console.log('hello + ' + data.vibes);



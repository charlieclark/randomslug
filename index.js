var gen = require('random-seed');
var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function randomslug( seed, length ){
	length = length || 10;
    var text = "";
    var rand = gen.create(seed);

    for( var i=0; i < length; i++ )
        text += possible.charAt(Math.floor(rand.random(1) * possible.length));

    return text;
}

module.exports = randomslug;
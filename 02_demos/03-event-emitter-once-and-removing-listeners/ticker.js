const EventEmitter = require( 'events' );

const ticker = new EventEmitter();

setInterval(() => {
    ticker.emit( 'data', Math.random() );
}, 1000);

module.exports = ticker;
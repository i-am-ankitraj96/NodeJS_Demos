const EventEmitter = require( 'events' );

const DB = new EventEmitter();

setTimeout(() => {
    DB.emit( 'connected' );

    setTimeout(() => {
        DB.emit( 'data_loaded' );
    }, 3000);
}, 3000);

module.exports = DB;
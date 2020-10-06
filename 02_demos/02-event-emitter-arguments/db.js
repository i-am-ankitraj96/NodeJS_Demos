const EventEmitter = require( 'events' );

const DB = new EventEmitter();

setTimeout(() => {
    DB.emit( 'connected' );

    setTimeout(() => {
        DB.emit( 'data_loaded', [ 'users', 'books' ], [ 4, 8 ] );
    }, 3000);
}, 3000);

module.exports = DB;
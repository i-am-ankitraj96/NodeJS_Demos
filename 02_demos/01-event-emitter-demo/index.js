const DB = require( './db' );

DB.on( 'connected', function() {
    console.log( '[handler 1] we can do something with DB now that we are connected to the DB' );
});

DB.on( 'connected', function() {
    console.log( '[handler 2] we can do something with DB now that we are connected to the DB' );
});

DB.on( 'data_loaded', function() {
    console.log( 'we can do something with the data in the DB now' );
});
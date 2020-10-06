const DB = require( './db' );

DB.on( 'data_loaded', function( tables, records ) {
    console.log( 'we can do something with the data in the DB now' );

    for( let i = 0; i < tables.length; i++ ) {
        console.log( `${records[i]} records added to ${tables[i]} table` );
    }
});
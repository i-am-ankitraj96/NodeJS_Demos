const fs = require( 'fs' );

fs.readFile( 'package.json', ( error, data ) => {
    if( error ) {
        console.log( 'error : ' + error.message );
    }

    console.log( 'file contents\n', data.toString() );
});

fs.readFile( 'package.json', 'utf8', ( error, data ) => {
    if( error ) {
        console.log( 'error : ' + error.message );
    }

    console.log( 'file contents\n', data );
});
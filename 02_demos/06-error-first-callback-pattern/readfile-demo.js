const fs = require( 'fs' );

fs.readFile( __filename, 'utf8', ( error, contents ) => {
    if( error ) {
        console.log( error.message );
        return;
    }

    console.log( 'contents of this very script file are \n', contents );
});
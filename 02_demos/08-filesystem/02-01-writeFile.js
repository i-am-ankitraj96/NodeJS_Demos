const fs = require( 'fs' );

fs.writeFile( 'output-async.txt', 'Hello, world', error => {
    if ( error ) {
        console.log( 'error : ' + error.message );
    }
    console.log( 'File output-async.txt has been created asynchronously' );
});
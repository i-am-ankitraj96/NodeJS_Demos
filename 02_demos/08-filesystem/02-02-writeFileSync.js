const fs = require( 'fs' );

try {
    fs.writeFileSync( 'output-sync.txt', 'Hello, world' );
    console.log( 'File output-sync.txt has been created synchronously' );
} catch( error ) {
    console.log( 'error : ' + error.message );
}
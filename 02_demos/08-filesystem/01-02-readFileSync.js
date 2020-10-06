const fs = require( 'fs' );

try {
    const data = fs.readFileSync( 'package.json', 'utf8' );
    console.log( 'file contents\n', data );
} catch( error ) {
    console.log( 'error : ' + error.message );
}
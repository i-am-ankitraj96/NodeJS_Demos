const fs = require( 'fs' );
const path = require( 'path' );

fs.unlink( path.join( __dirname, 'output-async.txt' ), err => {
    if( err ) throw err;

    console.log( 'output-async.txt was successfully deleted' );
});
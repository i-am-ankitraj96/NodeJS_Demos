const fs = require( 'fs' );

fs.stat( __filename, ( err, stats ) => {
    if( err ) throw err;

    console.log( 'Size of this file : %d bytes', stats.size );

    console.log( 'This file was created on : ', stats.birthtime.toString() );
    console.log( 'This file was last modified on : ', stats.mtime.toString() );
    console.log( 'This file was last accessed on : ', stats.atime.toString() );
});

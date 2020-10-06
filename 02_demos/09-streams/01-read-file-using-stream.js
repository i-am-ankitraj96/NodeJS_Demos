const fs = require( 'fs' );

const rs = fs.createReadStream( 'data.txt' );

rs.on( 'data', chunk => {
    process.stdout.write( chunk.toString() );
});
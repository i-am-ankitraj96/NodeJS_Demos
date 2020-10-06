const fs = require( 'fs' );

const rs = fs.createReadStream( 'data.txt' );
const ws = fs.createWriteStream( 'data.copy.txt' );

rs.on( 'data', chunk => {
    process.stdout.write( chunk.toString() );
});

rs.on( 'data', chunk => {
    let ok = ws.write( chunk );

    if( !ok ) {
        rs.pause();
        ws.once( 'drain', () => {
            rs.resume();
        });
    }
});

rs.on( 'end', () => {
    ws.end();
});
const fs = require( 'fs' );
const ws = fs.createWriteStream( 'data.txt' );

for( let i = 0; i < 65536; i++ ) {
    ws.write( 'hello world [(' + i + ')]' );
}
ws.end();
const http = require( 'http' );
const fs = require( 'fs' );

const server = http.createServer( ( req, res ) => {
    const rs = fs.createReadStream( 'data.txt' );
    rs.pipe( res );
});

const port = process.env.PORT || 8080;

server.listen(port, () => {
    console.log( `Open http://localhost:${port}/` );
});

server.on( 'error', error => console.log( error.message ) );
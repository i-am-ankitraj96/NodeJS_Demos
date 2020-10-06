const fs = require( 'fs' );

const rs = fs.createReadStream( 'data.txt' );
const ws = fs.createWriteStream( 'data.copy.txt' );

rs.pipe( ws );
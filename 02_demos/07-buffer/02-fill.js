const buffer = Buffer.allocUnsafe( 16 );

buffer.fill();
console.log( buffer );

buffer.fill( 'abcd' );
console.log( buffer );
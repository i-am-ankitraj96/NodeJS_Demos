const buffer1 = Buffer.from( [ 0, 1, 2 ] );
const buffer2 = Buffer.from( [ 256, 257, 258 ] );
const buffer3 = Buffer.from( '100˚ C' );
const buffer4 = Buffer.from( '100˚ C', 'latin1' );
const buffer5 = Buffer.from( buffer4 );

const buffer6 = Buffer.alloc( 16 );
const buffer7 = Buffer.alloc( 16, 1 );
const buffer8 = Buffer.allocUnsafe( 16 );
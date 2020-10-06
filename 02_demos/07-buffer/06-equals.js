const buffer1 = Buffer.from( 'abcd' );
const buffer2 = Buffer.from( [ 0x61, 0x62, 0x63, 0x64 ] );

console.log( buffer1 );
console.log( buffer2 );
console.log( buffer1.equals( buffer2 ) );
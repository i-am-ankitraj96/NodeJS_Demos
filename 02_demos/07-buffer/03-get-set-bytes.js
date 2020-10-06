const buffer = Buffer.from( 'abcd' );
console.log( buffer );
console.log( buffer.toString() );
console.log( buffer[0] );

buffer[0] = 65; // same as 0x41 (hexadecimal for 65), the utf8 code for A
console.log( buffer );
console.log( buffer.toString() );
const bufferSrc = Buffer.from( 'Bat' );
const bufferTarget = Buffer.alloc( bufferSrc.length );
bufferSrc.copy( bufferTarget );
console.log( bufferTarget.toString() );

bufferTarget[0] = 'R'.charCodeAt(0); // code for letter 'R'
console.log( bufferSrc.toString() );
console.log( bufferTarget.toString() );
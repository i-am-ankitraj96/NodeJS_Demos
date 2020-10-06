const hello = Buffer.from( 'hello' );
const world = Buffer.from( 'world' );

const helloWorld = Buffer.concat( [ hello, Buffer.from( ' ' ), world ] );

console.log( helloWorld );
console.log( helloWorld.toString() );
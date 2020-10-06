const basicModule = require( './01-basic-module' );
console.log( 'basicModule = ', basicModule );

console.log( 'basicModule.x = ', basicModule.x );
basicModule.greeterFunction();

const { x, greeterFunction : greet } = require( './01-basic-module' );
console.log( 'x = ', x );
greet();
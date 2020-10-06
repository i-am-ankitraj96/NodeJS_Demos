console.log( 'module = ', module );
console.log( 'module.exports = ', module.exports );
console.log( 'exports = ', exports );
console.log( 'module.exports === exports : ', module.exports === exports );

// x shall be exported but y will be private to the module
let x = 1, y = 2;
const greet = () => console.log( 'hello Node.js' );

module.exports.x = x;
exports.greeterFunction = greet;
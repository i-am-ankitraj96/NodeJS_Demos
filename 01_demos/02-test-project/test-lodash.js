const lodash = require( 'lodash' );

const arr1 = [ 2, 4, 6, 8 ], arr2 = [ 4, 8, 12, 16 ];
const arr3 = lodash.difference( arr1, arr2 );
console.log( arr3 );
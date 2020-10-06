const path = require('path');
console.log(path.basename('/test/something'));
console.log(path.basename('/test/something.txt'));
console.log(path.basename('/test/something.txt', '.txt'));

//Output
/*
something
something.txt
something
*/

console.log(path.dirname('/test/something'));
console.log(path.dirname('/test/something.txt'));

//Output
/*
/test
/test
*/

console.log(path.isAbsolute('/test/something'));
console.log(path.isAbsolute('/test/something.txt'));

//Output
/*
true
true
*/

const name = 'John';
console.log(path.join('/', 'users', name, 'notes.txt'));
console.log(path.normalize('/users/john/..//test.txt'));

//Output
/*
\users\John\notes.txt
\users\test.txt
*/

console.log(path.parse('/users/test.txt'));
console.log(path.resolve('test.txt') );

//Output
/*
{ root: '/',
  dir: '/users',
  base: 'test.txt',
  ext: '.txt',
  name: 'test' }
C:\3-Global_Objects_Designing_REST_APIs\2_Class_Exercises_And_Demos\demos\12-global-object-path\test.txt
*/



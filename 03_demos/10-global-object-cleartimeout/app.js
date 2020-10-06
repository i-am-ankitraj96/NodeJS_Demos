console.log('Test console before set timeout...');
timeout = setTimeout(() => {
   console.log('Set timeout function executed...');
}, 3000);
clearTimeout(timeout);
console.log('set timeout will not execute ...');

//Output
/*Test console before set timeout...
set timeout will not execute ... */
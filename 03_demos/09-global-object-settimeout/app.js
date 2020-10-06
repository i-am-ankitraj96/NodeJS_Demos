console.log('Test console before set timeout...');

setTimeout(() => {
   console.log('Set timeout function executed...');
}, 2000);

console.log('Test console after set timeout...');

//Output
/*Test console before set timeout...
Test console after set timeout...
Set timeout function executed... */
console.log('Test console before set interval...');
timeout = setInterval(() => {
   console.log('Set interval function executed...');
}, 3000);
clearInterval(timeout);
console.log('set interval will not execute ...');

//Output
/*Test console before set interval...
set interval will not execute ... */
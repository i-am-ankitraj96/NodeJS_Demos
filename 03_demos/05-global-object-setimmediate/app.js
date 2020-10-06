console.log('Test console before set immediate...');

setImmediate(() => {
    console.log('Set immediate function executed...');
});

console.log('Test console after set immediate...');
//Output
/* Test console before set immediate...
Test console after set immediate...
Set immediate function executed... */
console.log('Test console before set immediate...');
immediate = setImmediate(() => {
   console.log('Set immediate function executed...');
});
clearImmediate(immediate);
console.log('set immediate will not execute...');

//Output
/*Test console before set immediate...
set immediate will not execute... */
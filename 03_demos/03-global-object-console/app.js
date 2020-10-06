console.log('hello world');

console.error(new Error('something bad happened'));

const name = 'John Rodson';
console.warn(`Danger ${name}! Danger!`);
/*Output - 
hello world
Error: something bad happened
    at Object.<anonymous> (C:\JCI\Project Details\MEAN\Imarticus\3-Global_Objects_Designing_REST_APIs\2_Class_Exercises_And_Demos\demos\03-global-object-console\app.js:4:15)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Function.Module.runMain (module.js:693:10)
    at startup (bootstrap_node.js:188:16)
    at bootstrap_node.js:609:3
Danger John Rodson! Danger! */


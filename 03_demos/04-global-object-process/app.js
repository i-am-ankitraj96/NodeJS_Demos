console.log('Process Architecture -', process.arch);
console.log('Process ID -', process.pid);
console.log('Process Platform -', process.platform);
console.log('Process Version -', process.version);
console.log('Process Execution Path -', process.execPath);

//Output
/* Process Architecture - x64
Process ID - 13300
Process Platform - win32
Process Version - v8.11.1
Process Execution Path - C:\Program Files\nodejs\node.exe */

const user = ['John'];
if (user[1] === undefined) {
   console.log('Process will exit now ..');
   process.exit(1);
   console.log('This will not executed...');
}
//Output - Process will exit now ..

var fs = require('fs');
fs.readFile('somefile.txt', function (err, data) {
    if (err) throw err;
    console.log(data);
});
process.on('uncaughtException', function (err) {
    console.log('Error will be handled here - ', err);
});



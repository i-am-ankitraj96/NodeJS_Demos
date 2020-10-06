const os=require('os');
console.log("os.freemem(): ",os.freemem());
console.log("os.homedir(): ",os.homedir()); 
console.log("os.hostname(): ",os.hostname()); 
console.log("os.endianness(): ",os.endianness()); 
console.log("os.loadavg(): ",os.loadavg()); 
console.log("os.platform(): ",os.platform());
console.log("os.release(): ",os.release()); 
console.log("os.tmpdir(): ",os.tmpdir()); 
console.log("os.totalmem(): ",os.totalmem()); 
console.log("os.type(): ",os.type()); 
console.log("os.uptime(): ",os.uptime()); 

//Output
/*os.freemem():  3369820160
os.homedir():  C:\Users\cvishva
os.hostname():  M3063286
os.endianness():  LE
os.loadavg():  [ 0, 0, 0 ]
os.platform():  win32
os.release():  6.1.7601
os.tmpdir():  C:\Users\cvishva\AppData\Local\Temp
os.totalmem():  17056174080
os.type():  Windows_NT
os.uptime():  20936.7136597*/
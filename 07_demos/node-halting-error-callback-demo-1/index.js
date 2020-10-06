var fs = require('fs');


fs.readFile("config.txt", function (err, data) {
    if (err) {
        console.error(err);
        //No return statment
       // return
    }

    //Even if there is error the below will continue because of no return statement
    console.log(data);
    connectWithConfig(data)

});

function connectWithConfig(data) {
    // Some data logic here
    console.log("Printing", data)
}



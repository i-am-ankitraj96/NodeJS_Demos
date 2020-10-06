var http = require('http');
var auth = require('basic-auth')


http.createServer(function (request, response) {

    const credentials = auth(request)
    console.log(credentials)
    if (!credentials || (credentials.name !== "imarticus" && credentials.pass !== "imarticus")) {
  
        response.statusCode = 401
        response.setHeader('WWW-Authenticate', 'Basic realm="Imarticus Denied"')
        response.end('Access denied')
    } else {
        response.end('Hello Everyone via Basic Auth')
    }

}).listen(4000);


console.log("server Started at port 4000")

//
/*
    var credentials = auth(request)
 
    // Check credentials
    if (!credentials || (credentials.name !== "imarticus" && credentials.pass !== "imarticus")) {
        response.statusCode = 401
        response.setHeader('WWW-Authenticate', 'Basic realm="example"')
        response.end('Access denied')
    } else {
        response.end('Hello Everyone !')
    }
    */
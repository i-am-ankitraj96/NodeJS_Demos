
const jwt = require('jsonwebtoken');
const PRIVATE_KEY = "IMARTICUS~!@#$%^()*^%$#";
const TOKEN_EXPIRATION_TIMES = '2h';



const AuthService = {

    getToken: function (request) {
        return jwt.sign(request, PRIVATE_KEY, { expiresIn: TOKEN_EXPIRATION_TIMES })
    },
    extractTokenFromRequest:function( request ) {
        const authorizationHeader = request.get( 'Authorization' ) || request.get( 'authorization' ) || " ";
        let  token = authorizationHeader.split( ' ' )[1];   
        return token;
    },
    verify: function (request) {

        try {
            const token = AuthService.extractTokenFromRequest(request);            
            const response = jwt.verify(token, PRIVATE_KEY);
            
            if (!response.username)
                throw new Error("Invalid Token or Expired")

            return response;
        } catch (err) {
             throw err
        }
    }


}
module.exports = AuthService;
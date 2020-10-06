const express = require('express')
const router = express.Router()
const Member = require('../models/member');
const AuthService = require('../utils/auth-service');


router.post('/login', async (request, response) => {
    try {

        //retrieve the parameters from request
        const username = request.body.username || "";
        const password = request.body.password || "";

        // check the value in Database , if error throw exception
        const member = await Member.findOne({ "username": username, "password": password });

        if (!member)
            throw new Error("Invalid Member Details")


        // Generate Token
        const tokenRequest = {
            name: member.name,
            username: member.username,
            role: member.role
        };

        const token = AuthService.getToken(tokenRequest);

        // Send the response back
        const loginResponse = {
            message: 'Authentication succeeded - you are now logged in',
            token: token,
            name: member.name,
            username: member.username
        }

        response.status(200).json(loginResponse);

    } catch (error) {
        console.error(error)
        response.status(401).json(error);
    }


})


module.exports = router

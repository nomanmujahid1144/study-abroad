const jwt = require('jsonwebtoken');
const ErrorResponse = require('../utils/errorResponse');

module.exports = (req, res, next) => {
    // console.log('I am Here');
    try {
        
        const token = req.headers.authorization;
        if (!token) {
            return next(new ErrorResponse('Token Absent', 401))
        }
        const decoded = jwt.verify(token, "" + process.env.JWT_SECRET);
        req.user = decoded;
        console.log(req.user.data + " User has been verified form CheckAuth" )
        next();
    } catch (err) {
        return next(new ErrorResponse(err, 400))
    }
};
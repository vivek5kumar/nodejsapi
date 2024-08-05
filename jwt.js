const jwt = require('jsonwebtoken');

const jwtMiddleware = (req, resp, next) => {
    // extract the jwt token from request header
    const token = req.headers.authorization.split('')[1];
    if (!token)
        return resp.status(401).json({ error: "Unauthorization" });
    try {
        // verify the JWT token
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        // Attach user information to the request object
        req.user = decode;
        next();
    } catch (err) {
        console.error(err);
        resp.status(401).json({ error: "Invalid token" });

    }
}

// function to generate token
const generateToken = (userData) => {
    return jwt.sign(userData, process.env.JWT_SECRET);
}

module.exports = { jwtMiddleware, generateToken };



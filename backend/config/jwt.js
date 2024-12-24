const jwt = require('jsonwebtoken');

function createToken(payload) {
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
    return token;
}
function verifyToken(token){
    return jwt.verify(token,process.env.JWT_SECRET_KEY);
}
module.exports = { createToken ,verifyToken };
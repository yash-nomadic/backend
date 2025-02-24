const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {

    const token = req.header['x-auth-token'];

    if (!token) {           
        res.status(403).json({ message: 'Token not Provided' });
    } else {

        jwt.verify(
            token,
            process.env.JWT_SECRET,
            (err, payload) => {
                if (err) {
                    console.log(err);
                    res.status(500).json(err);
                } else {
                    req.user = payload;
                    next();
                }
            }
        )
    }


}

module.exports = verifyToken;

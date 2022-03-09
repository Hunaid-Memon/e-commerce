const jwt = require("jsonwebtoken");
const config = require("config");
const { modelName } = require("../models/user");

const auth = (req, res, next) => {
    const token = req.header('auth-token');
    if(!token) {
        return res.status(401).json({ msg: "Authorized Denied, Token is missing" });
    }

    try {
        const payload = jwt.verify(token, config.get("jwtSecret"));
        req.user = payload.user;
        next();
    } catch(err) {
        console.log("Error", err.message);
        res.status(401).json({ msg: "Invalid Token" })
    }
}

module.exports = auth;
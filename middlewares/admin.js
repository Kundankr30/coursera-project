const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");

function adminMiddleware(req, res, next) {
    const token = req.headers.token;
    if (!token) {
        return res.status(403).json({ message: "You are not signed in" });
    }
    try {
        const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);
        if (decoded) {
            req.userId = decoded.id;
            return next();
        }
        return res.status(403).json({ message: "You are not signed in" });
    } catch (err) {
        return res.status(403).json({ message: "Invalid token" });
    }
}

module.exports = {
    adminMiddleware: adminMiddleware,
};
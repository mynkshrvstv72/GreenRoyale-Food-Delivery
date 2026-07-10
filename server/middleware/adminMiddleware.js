const admin = (req, res, next) => {

    if (!req.user) {

        return res.status(401).json({
            message: "Not Authorized"
        });

    }

    if (req.user.email !== "admin@gmail.com") {

        return res.status(403).json({
            message: "Admin Only"
        });

    }

    next();

};

module.exports = { admin };
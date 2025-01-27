const jwt = require('jsonwebtoken')
const Signup = require("../model/signup")
const authftn = async (req, res, next) => {

    const token = req.header("Authorization")

    try {
        const isverifed = jwt.verify(token, process.env.secret)
        const userf = await Signup.findOne({ email: isverifed.email }).select({ password: 0 })

        req.user=userf;

        next();

    } catch (error) {
        res.status(401).send("Invalid token")
    }
}
module.exports = authftn
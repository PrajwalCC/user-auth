const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("../utils/jwt");
const saltRounds = 10;
exports.signup = async (req, res) => {
    try {
        const payload = req.body;
        const user = await User.findOne({
            where: {
                email: payload.email
            }
        })
        if (!user) {
            const newUser = await User.create({
                firstName: payload.firstName,
                email: payload.email,
                password: await bcrypt.hash(payload.password, saltRounds)
            })
            return res.json({
                message: "user succesfully created",
                user: newUser
            })
        } return res.json({ message: "user already exists" })

    } catch (err) {
        console.error(err);
        res.json({
            msg: err.message
        })
    }
};

exports.login = async (req, res) => {
    try {
        const payload = req.body;
        const user = await User.findOne({
            where: {
                email: payload.email,
            }
        })
        if (!user) {
            return res.json({
                message: "user not registered"
            })
        }
        const hashedPassword = user.password;
        const check = await bcrypt.compare(payload.password, hashedPassword);
        if (!check) return res.json({ message: "wrong password" })
        const access_token = jwt.generateJwtToken(user);
        const date = new Date()
        user.set("lastLogin", date.toISOString());
        user.set("accessToken", access_token);
        await user.save();
        const response = {
            status: 200,
            message: "Login  successfull",
            user: user,
        };
        return res.status(200).send(response)
    } catch (err) {
        console.error(err);
        res.json({
            msg: err.message
        })
    }
};
const express = require("express")
const Signup = require('../model/signup')
const bcrypt = require("bcrypt")

const home = (req, res) => {
    res.send("I am on home page")
}

const signup = async (req, res) => {
    try {
        const { firstname, lastname, email, password, number } = req.body;

        const finduser = await Signup.findOne({ email: email })

        if (finduser) {
            res.send("Response User Already exist").status(404);
            console.log("Already user exist")
        }
        else {

            const createuser = await Signup.create({ firstname, lastname, email, password, number })
            const jwtoken = await createuser.gettoken();
            res.json({
                user: createuser,
                token: jwtoken
            }).status(200);
            console.log("User created")
        }

    } catch (error) {
        console.log(error)
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    const loginfind = await Signup.findOne({ email })

    if (loginfind) {
        // const passcom=await bcrypt.compare(password,loginfind.password)

        const passcom = await loginfind.checkpass(password);

        if (passcom) {
            const jwtoken = await loginfind.gettoken();
            res.status(200).json({
                "Message": "Login succesfully",
                token: jwtoken,
                name: loginfind.firstname
            });
            console.log("Login success from server side");
        }
        else {
            res.status(404).send("invalid pass from server side");
            console.log("invalid pass from server side");
        }
    }
    else {
        res.status(404).send("User not found");
        console.log("invalid creditials from server side");
    }
}

const contact = (req, res) => {
    res.send("I am on contact page")
}

const user = async (req, res) => {

    const user_details = req.user;

    console.log(user_details)
    res.status(200).send(user_details)
}
module.exports = { home, login, signup, contact, user }

const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const REGISTER = mongoose.model("REGISTER")

router.post("/register", async (req, res) => {
    const { Name, Email, Phone, State, District, Address, Pincode } = req.body
    if (!Name || !Email || !Phone || !State || !District || !Address || !Pincode) {
        return res.status(422).json({ error: "please fill all field" })
    }
    const register = new REGISTER({
        ...{ Name, Email, Phone, State, District, Address, Pincode }
    })
    try {
        console.log(register)
        res.json({ message: "Successfull" })
        const registerData = await register.save()
    }
    catch (err) {
        console.log(err)
    }
})

module.exports = router;
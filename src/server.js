require('dotenv').config();
const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');

const PORT = process.env.PORT
const user = process.env.user
const pass = process.env.pass

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`))

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: user,
        pass: pass
    }
})

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Ready to Send');
    }
})
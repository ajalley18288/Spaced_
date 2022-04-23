const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
// const dotenv = require('dotenv')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json({limit: "30mb", extended: false}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: false}))
app.use(cors())

// TODO
// app.use(userRoutes)
// app.use(taskRoutes)

const CONNECTION_URL = 'mongodb+srv://Massy1456:.Blackops11@spaced.i75y5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = 5000 
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,}
    ).then(() => app.listen(PORT, () => console.log(`Server up on Port ${PORT}`))
    ).catch((error) => console.log(error.message))

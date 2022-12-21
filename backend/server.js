
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/shoeCull')
require('dotenv').config()

const cors = require('cors')

const app = express()
const PORT = process.env.port || 5000;

app.use(express.json())
app.use(cors());


mongoose.set("strictQuery", true);
mongoose
    .connect(process.env.MONGODB_URL, {

        useNewURLParser: true,
        useUnifiedTopology: true

    })
    .then(() => console.log(`Connected to Mongodb...`))
    .catch((err) => console.log(err));



app.listen(PORT, () => console.log("listening on:" + PORT))

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const routes = require('./routes/shoeCullRoute')

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

app.use(routes)

app.listen(PORT, () => console.log("listening on:" + PORT))
require("dotenv").config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT;
const { rundb } = require("./config/mongo.js");


app.use('/api', require("./routes/index"))

app.use(cors());
app.use(express.json())

app.listen(port, () => {

  console.log(`http://localhost:${port}`)
} )

rundb();
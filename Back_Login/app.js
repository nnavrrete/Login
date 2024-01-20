require("dotenv").config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT;
const conectarMongoDB = require("./config/mongo.js");
const { createUser, getUserById } = require('./models/user');

app.use('/api', require("./routes"))

app.use(cors());

(async () => {
  try {
    await conectarMongoDB();
    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error);
    process.exit(1); // Salir del proceso si hay un error en la conexión a MongoDB
  }
})();
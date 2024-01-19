const { MongoClient } = require('mongodb');
require('dotenv').config();

let cliente; // Variable global para almacenar el cliente MongoDB

async function conectarMongoDB() {
  try {
    // Obtener variables de entorno
    const URI = process.env.DB_URI;
    const nombreBaseDatos = process.env.NOMBRE_BASE_DATOS;

    // Crear un nuevo MongoClient si aún no está definido
    if (!cliente) {
      cliente = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });

      // Conectar al servidor
      await cliente.connect();
      console.log('Conectado al servidor de MongoDB');
    }

    // Obtener la base de datos
    const baseDatos = cliente.db(nombreBaseDatos);

    // Devolver el objeto cliente para que se pueda utilizar en otras partes de la aplicación
    return cliente;
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error);
    throw error; // Re-lanzar el error para que pueda ser manejado en la aplicación
  }
}

module.exports = conectarMongoDB;
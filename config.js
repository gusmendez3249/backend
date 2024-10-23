// config.js

// Configuración de la base de datos
module.exports = {
  database: {
    host: process.env.DB_HOST || 'bhgl05ekrbkxhawhik0r-mysql.services.clever-cloud.com',
    user: process.env.DB_USER || 'utqu4u696ixahzzv',
    password: process.env.DB_PASSWORD || 'xUS89suK8S8slzt5Wosw',
    database: process.env.DB_NAME || 'bhgl05ekrbkxhawhik0r',
    port: process.env.DB_PORT || 3306,
  },
}
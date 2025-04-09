const db = require('./config/db');

(async () => {
    try {
        const result = await db.query('SELECT * FROM usuario');
        console.log('Conexion exitosa', result.rows[0])
    } catch (error) {
        console.error('Error de conexion:', error)
    }
})();
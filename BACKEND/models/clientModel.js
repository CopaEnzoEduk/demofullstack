const db = require('../config/db');

class ClientModel {

    async getAllClients() {
        const result = await db.query('SELECT * FROM cliente');
        return result.rows;
    }

    async getClientById(id) {
        const result = await db.query('SELECT * FROM cliente WHERE id = $1', [id]);
        return result.rows[0];
    }

    async createClient({dni, nombre, ap_paterno, ap_materno, fecha_nacimiento}) {
        const result = await db.query(
            'INSERT INTO cliente (dni, nombre, ap_paterno, ap_materno, fecha_nacimiento) VALUES ($1, $2, $3, $4, $5) RETURNING *', 
            [dni, nombre, ap_paterno, ap_materno, fecha_nacimiento]
        );
        return result.rows[0];
    }

    async updateClient(id, {dni, nombre, ap_paterno, ap_materno, fecha_nacimiento}) {
        const result = await db.query(
            'UPDATE cliente SET dni = $1, nombre = $2, ap_paterno = $3, ap_materno = $4, fecha_nacimiento = $5 WHERE id = $6 RETURNING *',
            [dni, nombre, ap_paterno, ap_materno, fecha_nacimiento, id]
        );
        return result.rows[0];
    }

    async deleteClient(id) {
        const result = await db.query('DELETE FROM cliente WHERE id = $1 RETURNING *', [id]);
        return result.rows[0];
    }

    //Buscar cliente por DNI
    async getClientByDni(dni) {
        const result = await db.query('SELECT * FROM cliente WHERE dni = $1', [dni]);
        return result.rows[0];
    }

    //Actualizar cliente por DNI
    async updateClientByDni(dni, {nombre, ap_paterno, ap_materno, fecha_nacimiento}) {
        const result = await db.query(
            'UPDATE cliente SET nombre = $1, ap_paterno = $2, ap_materno = $3, fecha_nacimiento = $4 WHERE dni = $5 RETURNING *',
            [nombre, ap_paterno, ap_materno, fecha_nacimiento, dni]
        );
        return result.rows[0];
    }

    //Eliminar cliente por DNI
    async deleteClientByDni(dni) {
        const result = await db.query('DELETE FROM cliente WHERE dni = $1 RETURNING *', [dni]);
        return result.rows[0];
    }
}

module.exports = new ClientModel();
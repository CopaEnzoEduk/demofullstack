const db = require('../config/db');

class ProductModel {
     
    async getAllProducts() {
        const result = await db.query('SELECT * FROM producto');
        return result.rows;
    }

    async getProductById(id) {
        const result = await db.query('SELECT * FROM producto WHERE id = $1', [id]);
        return result.rows[0];
    }

    async createProduct({nombre, precio, descripcion}) {
        const result = await db.query('INSERT into producto (nombre, precio, descripcion) VALUES ($1, $2, $3) RETURNING *', [nombre, precio, descripcion]);
        return result.rows[0];
    }

    async updateProduct(id, {nombre, precio, descripcion}) {
        const result = await db.query(
            'UPDATE producto SET nombre = $1, precio = $2, descripcion = $3 WHERE id = $4 RETURNING *',
            [nombre, precio, descripcion, id]
        );
        return result.rows[0];
    }
    
    async deleteProduct(id) {
        const result = await db.query('DELETE FROM producto WHERE id = $1', [id]);
        return result.rows[0];
    }
}

module.exports = new ProductModel();
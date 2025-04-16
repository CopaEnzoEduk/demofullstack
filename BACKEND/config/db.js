const { Pool } = require('pg');

class Database {
    constructor() {
        this.pool = new Pool({
            host: 'localhost',
            user: 'postgres',
            database: 'prueba',    
            password: 'admin',
            port: 5433,              
        });
    }

    query(text, params) {
        return this.pool.query(text, params);
    }
}

module.exports = new Database();
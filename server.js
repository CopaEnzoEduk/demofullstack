const express = require('express');
const cors = require('cors');
const productRoutes = require('./routers/productRooters')

class Server {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes() {
        this.app.use('/productos', productRoutes);
    }
}
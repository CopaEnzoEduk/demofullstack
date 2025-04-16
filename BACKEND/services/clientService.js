const productModel = require('../models/clientModel');

class ClientService {

    async getAllClients() {
        return await productModel.getAllClients();
    }

    async getClientById(id) {
        return await productModel.getClientById(id);
    }

    async getClientByDni(dni) {
        return await productModel.getClientByDni(dni);
    }

    async addClient(data) {
        return await productModel.createClient(data);
    }

    async modifyClient(id, data) {
        return await productModel.updateClient(id, data);
    }

    async modifyClientByDni(dni, data) {
        return await productModel.updateClientByDni(dni, data);
    }

    async removeClient(id) {
        return await productModel.deleteClient(id);
    }

    async removeClientByDni(dni) {
        return await productModel.deleteClientByDni(dni);
    }
}

module.exports = new ClientService();
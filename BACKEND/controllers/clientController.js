const clientService = require('../services/clientService');

class ClientController {
    async getClient(req, res) {
        try {
            const clients = await clientService.getAllClients();
            res.json(clients);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener los clientes.' });
        }
    }

    async getClientbyId(req, res) {
        const { id } = req.params;
        try {
            const client = await clientService.getClientById(id);
            if (!client) {
                return res.status(404).json({ message: 'Cliente no encontrado.' });
            }
            res.json(client);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener el cliente.' });
        }
    }

    //bh Obtener cliente por DNI
    async getClientByDni(req, res) {
        const { dni } = req.params;
        try {
            const client = await clientService.getClientByDni(dni);
            if (!client) {
                return res.status(404).json({ message: 'Cliente no encontrado.' });
            }
            res.json(client);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener el cliente por DNI.' });
        }
    }

    async createClient(req, res) {
        try {
            const { dni, nombre, ap_paterno, ap_materno, fecha_nacimiento } = req.body;
            const newClient = await clientService.addClient({ dni, nombre, ap_paterno, ap_materno, fecha_nacimiento });
            res.status(201).json(newClient);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al crear el cliente.' });
        }
    }

    async updateClient(req, res) {
        try {
            const { id } = req.params;
            const { dni, nombre, ap_paterno, ap_materno, fecha_nacimiento } = req.body;
            const updatedClient = await clientService.modifyClient(id, { dni, nombre, ap_paterno, ap_materno, fecha_nacimiento });
            res.json(updatedClient);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al actualizar el cliente.' });
        }
    }

    //Actualizar cliente por DNI
    async updateClientByDni(req, res) {
        try {
            const { dni } = req.params;
            const { nombre, ap_paterno, ap_materno, fecha_nacimiento } = req.body;
            const updatedClient = await clientService.modifyClientByDni(dni, { nombre, ap_paterno, ap_materno, fecha_nacimiento });
            if (!updatedClient) {
                return res.status(404).json({ message: 'Cliente no encontrado para actualizar.' });
            }
            res.json(updatedClient);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al actualizar el cliente por DNI.' });
        }
    }

    async deleteClient(req, res) {
        try {
            const { id } = req.params;
            await clientService.removeClient(id);
            res.status(204).send();
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al eliminar el cliente.' });
        }
    }

    //Eliminar cliente por DNI
    async deleteClientByDni(req, res) {
        try {
            const { dni } = req.params;
            const deletedClient = await clientService.removeClientByDni(dni);
            if (!deletedClient) {
                return res.status(404).json({ message: 'Cliente no encontrado para eliminar.' });
            }
            res.status(204).send();
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al eliminar el cliente por DNI.' });
        }
    }
}

module.exports = new ClientController();

const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// Rutas por ID
router.get('/', (req, res) => clientController.getClient(req, res));

router.get('/:id', (req, res) => clientController.getClientbyId(req, res));

router.post('/', (req, res) => clientController.createClient(req, res));

router.put('/:id', (req, res) => clientController.updateClient(req, res));

router.delete('/:id', (req, res) => clientController.deleteClient(req, res));

//Rutas por DNI
router.get('/dni/:dni', (req, res) => clientController.getClientByDni(req, res));

router.put('/dni/:dni', (req, res) => clientController.updateClientByDni(req, res));

router.delete('/dni/:dni', (req, res) => clientController.deleteClientByDni(req, res));

module.exports = router;

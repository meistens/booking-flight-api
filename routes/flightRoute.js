const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

//GET route (server will refuse to start without  it)
router.get('/flights', controller.getFlights);


//POST add a flight data route
router.post('/flights', controller.addFlight);

//GET a flight detail using its id
router.get('/flights/:id', controller.getFlight);

//PUT or update all flight details
router.put('/flights/:id', controller.updateFlight);

//DELETE a flight data
router.delete('/flights/:id', controller.deleteFlight);

module.exports = router;


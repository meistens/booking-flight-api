//destructured to prevent errors, let for flexibility
let { models } = require("../models/Flight");

const { v4: uuidv4 } = require('uuid');


// get all flight data
exports.getFlights = (req, res) => {
    res.status(200).send(models)
}

// post a flight
exports.addFlight = (req, res) => {
    const airData = req.body;

    // date, time and id added automatically if input is flight details and price
    models.push({
        ...airData,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        id: uuidv4(),
    });
    res.status(201).send(`${airData.title} booked`)
};


// get a flight detail
exports.getFlight = (req, res) => {
    // destructured id
    const { id } = req.params;

    const fetchFlight = models.find((ticket) => ticket.id === id);

    if (!fetchFlight) {
        return res.status(404).send("Flight not found")
    }

    res.status(200).send(fetchFlight);
};

// update or edit all flight details using PUT instead of PATCH
exports.updateFlight = (req, res) => {
    const { id } = req.params;

    // what to update
    const { title, price } = req.body;

    const updateAll = models.find((ticket) => ticket.id === id)
    // if updateAll is true, the following below will be added
    // time and date added automatically instead of manually
    // below is a single-line if statement
    if (updateAll)
        updateAll.title = title,
            updateAll.price = price,
            updateAll.date = new Date().toLocaleDateString(),
            updateAll.time = new Date().toLocaleTimeString();

    res.status(200).send(`${title} has been updated`)
};

// delete a flight data
// if you seeing this, it means...
// id that do not match in the array will be untouched
// and matching id removed from the array
// confusing as hell...
exports.deleteFlight = (req, res) => {
    const { id } = req.params;

    models = models.filter((hmm) =>
        hmm.id !== id)
    return res.status(200).send(`flight with the id ${id} deleted`);
};

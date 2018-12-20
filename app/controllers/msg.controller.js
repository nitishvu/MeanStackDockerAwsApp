const Msg = require('../models/msg.model.js');

// Create and Save a new msg
exports.create = (req, res) => {

     // Validate request
     console.log(req.body.content,req.body.title);
     if(!req.body.content) {
        return res.status(400).send({
            message: "Msg content can not be empty"
        });
    }

    // Create a Msg
    const msg = new Msg({
        title: req.body.title || "Untitled Msg", 
        content: req.body.content
    });

    // Save Msg in the database
    msg.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Msg."
        });
    });

};

// Retrieve and return all msgs from the database.
exports.findAll = (req, res) => {

    Msg.find()
    .then(msgs => {
        res.send(msgs);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving msgs."
        });
    });

};

// Find a single msg with a msgId
exports.findOne = (req, res) => {

    Msg.findById(req.params.msgId)
    .then(msg => {
        if(!msg) {
            return res.status(404).send({
                message: "Msg not found with id " + req.params.msgId
            });            
        }
        res.send(msg);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Msg not found with id " + req.params.msgId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving msg with id " + req.params.msgId
        });
    });

};

// Update a msg identified by the msgId in the request
exports.update = (req, res) => {

    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Msg content can not be empty"
        });
    }

    // Find Msg and update it with the request body
    Msg.findByIdAndUpdate(req.params.MsgId, {
        title: req.body.title || "Untitled Msg",
        content: req.body.content
    }, {new: true})
    .then(msg => {
        if(!msg) {
            return res.status(404).send({
                message: "Msg not found with id " + req.params.msgId
            });
        }
        res.send(msg);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Msg not found with id " + req.params.msgId
            });                
        }
        return res.status(500).send({
            message: "Error updating msg with id " + req.params.msgId
        });
    });

};


// Delete a msg with the specified msgId in the request
exports.delete = (req, res) => {

    Msg.findByIdAndRemove(req.params.msgId)
    .then(msg => {
        if(!msg) {
            return res.status(404).send({
                message: "Msg not found with id " + req.params.msgId
            });
        }
        res.send({message: "Msg deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Msg not found with id " + req.params.msgId
            });                
        }
        return res.status(500).send({
            message: "Could not delete msg with id " + req.params.msgId
        });
    });

};
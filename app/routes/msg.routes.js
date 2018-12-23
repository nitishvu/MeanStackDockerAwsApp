module.exports = (app) => {
    const msgs = require('../controllers/msg.controller.js');

    // Create a new msg
    app.post('/msgs', msgs.create);

    // Retrieve all msgs
    app.get('/msgs', msgs.findAll);

    // Retrieve a single msg with msgId
    app.get('/msgs/:msgId', msgs.findOne);

    // Update a msg with msgId
    app.put('/msgs/:msgId', msgs.update);

    // Delete a msg with msgId
    app.delete('/msgs/:msgId', msgs.delete);

    
   
}
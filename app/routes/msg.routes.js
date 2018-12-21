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

    app.get('/',msgs.homepage);

       /* msgs.findAll.toArray((err, result) => {
            if (err) return console.log(err)
            // renders index.ejs
            res.render('index.ejs', {quotes: result})
          })
        //res.sendFile(__dirname + '/index.html')
        //res.json({"message": "Welcome to Easymsgs application. Take msgs quickly. Organize and keep track of all your msgs."});
        */
   
}
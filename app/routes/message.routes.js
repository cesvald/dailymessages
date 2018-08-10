module.exports = (app) => {
    var cors = require('cors')
    
    app.use(cors())
    
    const messages = require('../controllers/message.controller.js');

    // Create a new Message
    app.post('/messages', messages.create);

    // Retrieve all messages
    app.get('/messages', messages.findAll);

    // Retrieve a single Message with messageId
    app.get('/messages/:messageId', messages.findOne);

    // Update a Message with messageId
    app.put('/messages/:messageId', messages.update);

    // Delete a Message with messageId
    app.delete('/messages/:messageId', messages.delete);
}
const mongoose = require('mongoose');

const MsgSchema = mongoose.Schema({
    name: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('msg', MsgSchema);
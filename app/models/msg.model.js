const mongoose = require('mongoose');

const MsgSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('msg', MsgSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Items = new Schema({
    id: String,
    name: String,
    status: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
  });

 module.exports = mongoose.model('Item', Items)
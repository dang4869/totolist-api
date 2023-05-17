const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    title: String,
    description: String,
    image: String,
    video: String,
    level: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
  });

 module.exports = mongoose.model('Course', Course)
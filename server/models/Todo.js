const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  text: {
      type: String,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    created_at: {
      type: Date,
      default: Date.now
    }
});

module.exports = mongoose.model('Todo', Schema);

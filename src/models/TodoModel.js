const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  task: {
    type: String
  },
  user: {
    type: String,
    required: true
  },
  isDone: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Todo", TodoSchema, "todos");
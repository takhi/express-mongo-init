const Todo = require("../models/TodoModel");

const todoHandler = {};

todoHandler.addTodo = async function(request, response) {
  const todo = new Todo(request.body);
  try {
    const result = await todo.save();
    response.json(result);
  } catch (err) {
    console.log("[ERROR][todoHandler] unable to add item");
    response.sendStatus(500);
  }
};

todoHandler.getTodos = async function(request, response) {
  try {
    const result = await Todo.find();
    response.json(result);
  } catch (err) {
    console.log("[ERROR][todoHandler] unable to fetch collection");
    response.sendStatus(500);
  }
};

todoHandler.getTodo = async function(request, response) {
  const { user } = request.params;
  try {
    const result = await Todo.find({ user });
    response.json(result);
  } catch (err) {
    console.log("[ERROR][todoHandler] unable to fetch item");
    response.sendStatus(404);
  }
};

todoHandler.editTodo = async function(request, response) {
  const { id } = request.params;
  try {
    const result = await Todo.findByIdAndUpdate({ _id: id }, { isDone: true });
    response.json(result);
  } catch (err) {
    console.log("[ERROR][todoHandler] unable to edit item");
    response.sendStatus(404);
  }
};

module.exports = todoHandler;

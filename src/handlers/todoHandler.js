const Todo = require("../models/TodoModel");

const todoHandler = {};

todoHandler.addTodo = async function(request, response) {
  const todo = new Todo(request.body);
  try {
    response.json(
      await todo.save()
    );
  } catch (err) {
    console.log("[ERROR][todoHandler] unable to add document");
    response.sendStatus(500);
  }
};

todoHandler.getAllTodos = async function(request, response) {
  try {
    response.json(
      await Todo.find()
    );
  } catch (err) {
    console.log("[ERROR][todoHandler] unable to fetch collection");
    response.sendStatus(500);
  }
};

todoHandler.getTodo = async function(request, response) {
  const { user } = request.params;
  try {
    response.json(
      await Todo.find({ user })
    );
  } catch (err) {
    console.log("[ERROR][todoHandler] unable to fetch document");
    response.sendStatus(404);
  }
};

todoHandler.editTodo = async function(request, response) {
  const { id } = request.params;
  try {
    response.json(
      await Todo.findByIdAndUpdate(
        { _id: id },
        { isDone: true }
      )
    );
  } catch (err) {
    console.log("[ERROR][todoHandler] unable to edit document");
    response.sendStatus(404);
  }
};

module.exports = todoHandler;

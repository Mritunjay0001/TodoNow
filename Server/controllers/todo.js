const { Todo } = require('../models/todo')

async function handleGetAllTodos(req, res) {
  console.log('call get')
  const todos = await Todo.find()
  res.send(todos)
}
async function getTodoById(req, res) {
  try {
    const id = req.params.id
  const todo = await Todo.find({ _id: id })
  res.status(201).send(todo)
  } catch (error) {
    res.status(404).send("findbyid function not working properly")
  }
}

async function handleUpdateTodoById(req, res) {
  try {
    const id = req.params.id;
    const body = req.body;
    const todo = await Todo.findByIdAndUpdate({ _id: id }, body, {
      returnDocument: 'after',
    })
    res.status(201).send(todo)
  } catch (error) {
    console.log('err', error)
  }
}
async function handleDeleteTodoById(req, res) {
  const id = req.params.id
  const todo = await Todo.findByIdAndDelete({ _id: id })
  res.status(201).send({ status: 'success', todo })
}
async function handleCreateNewTodo(req, res) {
  console.log("post call");
  try {
    const body = req.body
    const todo = new Todo(body)
    await todo.save()
    res.send(todo);
  } catch (error) {
    console.log('err', error)
  }
}

module.exports = {
  handleGetAllTodos,
  getTodoById,
  handleUpdateTodoById,
  handleDeleteTodoById,
  handleCreateNewTodo,
}

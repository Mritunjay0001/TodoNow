const express = require('express')
const {
  handleGetAllTodos,
  getTodoById,
  handleUpdateTodoById,
  handleDeleteTodoById,
  handleCreateNewTodo,
} = require('../controllers/todo')
const router = express.Router()

router.route('/').get(handleGetAllTodos).post(handleCreateNewTodo)

router
  .route('/:id')
  .get(getTodoById)
  .patch(handleUpdateTodoById)
  .delete(handleDeleteTodoById)

module.exports = router

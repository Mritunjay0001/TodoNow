const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema(
  {
    task: { type: String, required: true },
    complete: { type: Boolean, required: true },
  },
  { timestamps: true },
)

exports.Todo = mongoose.model('todo', TodoSchema)

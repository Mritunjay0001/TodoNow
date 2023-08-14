import React, { useContext, useEffect, useState } from 'react'
import './inputTask.css'
import { ContextApi } from '../../context/ContextApi'

const taskObject = {
  task: '',
  complete: false,
}

const InputTask = () => {
  const [formtask, setFormTask] = useState(taskObject)
  const { addTask, updateTask, setUpdateTask, updateTaskApi } = useContext(
    ContextApi,
  )

  const changeHandler = (e) => {
    const { value, name } = e.target
    setFormTask({ ...formtask, [name]: value })
    console.log(formtask)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    if (updateTask) {
      updateTaskApi(formtask)
      alert('data upadted')
      setFormTask(taskObject)
      setUpdateTask('')
    } else {
      addTask(formtask)
      setFormTask(taskObject)
      alert('form submited')
    }
  }

  useEffect(() => {
    if (updateTask) {
      setFormTask(updateTask)
    }
  }, [updateTask])

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div className="task">
          <label htmlFor="task">Enter Task</label>
          <input
            minLength={5}
            required
            autoComplete="off"
            onChange={changeHandler}
            type="text"
            id="task"
            name="task"
            value={formtask.task}
            placeholder="Enter Task"
          />
        </div>
        <div>
          <label htmlFor="complete">complete</label>
          <select
            name="complete"
            id="complete"
            value={formtask.complete}
            required
            onChange={changeHandler}
          >
            <option >Select complete</option>
            <option value={true}>Complete</option>
            <option value={false}>Incomplete</option>
          </select>
        </div>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default InputTask

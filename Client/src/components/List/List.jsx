import React, { useContext, useEffect } from 'react'
import './list.css'
import { ContextApi } from '../../context/ContextApi'

import Loading from '../Loading'

const List = () => {
  const { tasks, getTasks, loading, editTask, deleteTask } = useContext(
    ContextApi,
  )
  // console.log(tasks)

  useEffect(() => {
    getTasks()
  }, [])
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <table className="taskList">
          <thead>
            <tr>
              <th>Task</th>
              <th>complete</th>
              <th>
                <span>Edit</span>
              </th>
              <th>
                <span>Delete</span>
              </th>
            </tr>
          </thead>

          <tbody>
            {tasks.length > 0 && tasks?.map(({ _id, task, complete },ind) => {
              return (
                <tr key={ind}>
                  <td>{task}</td>
                  <td>{complete ? "Done" : "Not Done"}</td>
                  <td>
                    <span onClick={() => editTask(_id)}>
                    
                    Edit
                    </span>
                  </td>
                  <td>
                    <span onClick={()=>deleteTask(_id)}>
               
                      Delete
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default List

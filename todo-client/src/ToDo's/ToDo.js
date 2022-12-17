import React from 'react'

export default function ToDo({todo}) {
  return (
    <div>
        <div>
            <label>Task:</label>
            <h3>{todo.task}</h3>
        </div>
        <div style={{margin: "20px"}}>
            <div>Due Date:</div>
            {todo.due_date}
        </div>
    </div>
  )
}

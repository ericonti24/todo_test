import React from 'react'

export default function ToDo({todo, deleteToDo}) {
    
    const handleDeleteTodo = () => {
        deleteToDo(todo)
    }
    
  return (
    <div>
        <div>
            <div>Task:</div>
            {todo.task}
        </div>
        <div style={{margin: "20px"}}>
            <div>Due Date:</div>
            {todo.due_date}
        </div>
        <button onClick={handleDeleteTodo}>Clear</button>
    </div>
  )
}

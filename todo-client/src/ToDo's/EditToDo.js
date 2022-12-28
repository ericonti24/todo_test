import React from 'react'

export default function EditToDo({
    currentTodo, 
    setIsEditing,  
    onTaskEditInputChange,
    onDueDateInputChange,

    onEditFormSubmit
}) {

  const updateToDo = async () => {
    await fetch(`http://127.0.0.1:3000/todos/${currentTodo.id}`,{
      method: 'PATCH',
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(currentTodo)
    })
    onEditFormSubmit()
  }
  
  return (
    <form onSubmit={updateToDo}>
        <h2>Edit To Do</h2>
        <label>Update Task: </label>
        <input 
            name="task"
            type="text"
            placeholder="Update Task"
            value={currentTodo.task}
            onChange={onTaskEditInputChange}
        />
        <label>Update Due Date: </label>
        <input 
            name="due_date"
            type="text"
            placeholder="Update Due Date"
            value={currentTodo.due_date}
            onChange={onDueDateInputChange}
        />
        <button>Update</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
    </form>
  )
}

import React from 'react'

export default function ToDo({todo, deleteToDo, onEditClick, fetchToDoData}) {
    
    const handleDeleteTodo = () => {
        deleteToDo(todo)
        fetchToDoData()
    }

    

    
  return (
    <div className='todo-container'>
        <div className='todo-task-container'>
            <label>Task: </label>
            &nbsp;
            {todo.task}
        </div>
        
        <div className='due-date-containter' >
            <label>Due Date: </label>
            &nbsp;
            <div>{todo.due_date}</div>
        </div>
        <div className='buttons-container'>
            <button className='clear-button' onClick={handleDeleteTodo}>Clear</button>
            &nbsp;
            <button className='update-button' onClick={() => onEditClick(todo)}>Update</button>
        </div>
        
        
    </div>
  )
}

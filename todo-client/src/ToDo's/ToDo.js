import React from 'react'

export default function ToDo({todo, deleteToDo, onEditClick, fetchToDoData}) {
    
    const handleDeleteTodo = () => {
        deleteToDo(todo)
        fetchToDoData()
    }

    

    
  return (
    <div className='todo-container'>
        <div className='grid-item todo-task-container'>
            <label className='grid-item todo-task-label'>Task: </label>
            &nbsp;
            <div className='grid-item todo-task'>{todo.task}</div>
        </div>
        <br/>
        <div className='due-date-containter' >
            <label className='todo-due-date-label'>Due Date: </label>
            &nbsp;
            <div className='todo-due-date'>{todo.due_date}</div>
        </div>
        <br/>
        <div className='buttons-container'>
            <button className='update-button' onClick={() => onEditClick(todo)}>Update</button>
            {/* &nbsp; */}
            <button className='clear-button' onClick={handleDeleteTodo}>Clear</button>
        </div>
        <br/>
    </div>
  )
}

import React from 'react'
import ToDo from './ToDo'

export default function ToDoList({toDoList, onEditClick, fetchToDoData}) {

  const deleteToDo = async (todo) => {
      await fetch(`http://127.0.0.1:3000/todos/${todo.id}`, {
        method: 'Delete'
      })
      fetchToDoData()
  }

  return (
    <div style={{margin: '20px'}}>
        {toDoList.map(todo => {
          return  <ToDo 
                      key={todo.id} 
                      todo={todo}  
                      deleteToDo={deleteToDo} 
                      fetchToDoData={fetchToDoData}
                      onEditClick={onEditClick}
                    />
        })}
        
    </div>
  )
}

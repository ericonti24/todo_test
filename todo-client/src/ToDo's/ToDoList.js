import React from 'react'
import ToDo from './ToDo'

export default function ToDoList({toDoList}) {

  return (
    <div>
        <button style={{margin: '20px'}}>
            Clear Completed Task(s)
        </button>
        {toDoList.map(todo => {
            return <ToDo key={todo.id} todo={todo}/> 
        })}
        
    </div>
  )
}

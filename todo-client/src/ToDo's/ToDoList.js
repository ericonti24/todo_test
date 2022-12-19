import React from 'react'
import ToDo from './ToDo'

export default function ToDoList({toDoList}) {


    // const handleDeleteTodo = async (todo) => {
    //     const resp = await fetch(`http://127.0.0.1:3000/todos/${todo.id}`, {
    //       method: 'Delete'
    //     })
    //     toDoList(todo.filter(dos => dos.id !== todo))
    // }

    const deleteToDo = (todo) => {
        fetch(`http://127.0.0.1:3000/todos/${todo.id}`, {
            method: 'DELETE',
            
        }).then(() => {
        console.log("delete button pressed")
         let _todos = todo
         let index = _todos.indexOf(todo)
         _todos.splice(index, 1)
         return toDoList
        })
    }
    

  return (
    <div style={{margin: '20px'}}>
        {toDoList.map(todo => {
            return <ToDo key={todo.id} todo={todo}  deleteToDo={deleteToDo}/> 
        })}
        
    </div>
  )
}

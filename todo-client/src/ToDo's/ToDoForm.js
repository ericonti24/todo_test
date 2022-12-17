import React, {useState} from 'react'

export default function ToDoForm() {

    const [task, setTask] = useState("")
    const [dueDate, setDueDate] = useState("")

 
    const handleSubmit = e => {
        e.preventDefault()
        const newTask = {task, dueDate}

        fetch('http://127.0.0.1:3000/todos', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(newTask)
        }).then(() => {
            console.log("new task added")
        })
    }    

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                placeholder='Enter task...'
                value={task}
                onChange={(e) => setTask(e.target.value)}
                name="task"
            />
            <br/>
            <input 
                placeholder='Enter due date...'
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                name="due_date"
            />
            <br/>
            <button>Add Task</button>
        </form>
    </div>
  )
}

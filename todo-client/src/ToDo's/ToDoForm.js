import React, {useState} from 'react'

export default function ToDoForm({fetchToDoData}) {

    const [task, setTask] = useState("")
    const [dueDate, setDueDate] = useState("")   

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch(`http://127.0.0.1:3000/todos`, {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({task: task, due_date: dueDate})
        })
        fetchToDoData()
        setTask("")
        setDueDate("")
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
                name="dueDate"
            />
            <br/>
            <button>Add Task</button>
        </form>
    </div>
  )
}

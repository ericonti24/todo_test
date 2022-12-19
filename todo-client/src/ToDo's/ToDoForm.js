import React, {useState} from 'react'

export default function ToDoForm() {

    const [task, setTask] = useState("")
    const [due_date, set_due_date] = useState("")

 
    // const handleSubmit = e => {
    //     e.preventDefault()
    //     const newTask = {task, dueDate}

    //     fetch(`http://127.0.0.1:3000/todos`, {
    //         method: 'POST',
    //         headers: {"Content-type": "application/json"},
    //         body: JSON.stringify(newTask)
    //     }).then(() => {
    //         console.log("new task added")
    //     })
    // }    

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newTask = {task, due_date}
        const res = await fetch (`http://127.0.0.1:3000/todos`, {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(newTask)
        })
        const data = await res.json(newTask)
        setTask("")
        set_due_date("")
        
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
                value={due_date}
                onChange={(e) => set_due_date(e.target.value)}
                name="due_date"
            />
            <br/>
            <button>Add Task</button>
        </form>
    </div>
  )
}

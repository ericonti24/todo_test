import React, {useState, useEffect} from 'react'
import './index.css'
import ToDoList from './ToDo\'s/ToDoList';
import ToDoForm from './ToDo\'s/ToDoForm';
import EditToDo from './ToDo\'s/EditToDo';


function App() {

  const toDosList = `http://127.0.0.1:3000/todos`

  const [toDoList, setToDoList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [currentToDo, setCurrentToDo] = useState({})

  const fetchToDoData = async () => {
    const res = await fetch(toDosList)
    const data = await res.json()
    setToDoList(data)
    console.log(data);
  }

  useEffect(() => {
    fetchToDoData()
  },[])

  const handleTaskEditInputChange = (e) => {
    setCurrentToDo({...currentToDo, task: e.target.value})
  }

  const handleDueDateEditInputChange = (e) => {
    setCurrentToDo({...currentToDo, due_date: e.target.value})
  }

  const handleUpdateTodo = (id, updatedTod) => {
    const updatedItem = toDoList.map((todo) => {
      return todo.id == id ? updatedTod : todo
    })
    setIsEditing(false)
    setToDoList(updatedItem)
  }

  const handleEditFormSubmit = (e) => {
    e.preventDefault()

    handleUpdateTodo(currentToDo.id, currentToDo)
  }

  const handleEditClick = (todo) => {
    setIsEditing(true)
    setCurrentToDo({...todo})
    console.log({todo})
  } 

  

  return (
    <div className="App">
      <h1>To Do List</h1>
      {isEditing ? (
        <EditToDo 
          currentTodo={currentToDo}
          setIsEditing={setIsEditing}
          toDoList={toDoList}
          setToDoList={setToDoList}
          onTaskEditInputChange={handleTaskEditInputChange}
          onDueDateInputChange={handleDueDateEditInputChange}

          onEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <ToDoForm fetchToDoData={fetchToDoData} />
        )}

      <ToDoList 
        fetchToDoData={fetchToDoData} 
        toDoList={toDoList} 
        onEditClick={handleEditClick}
      />
      
    </div>
  );
}

export default App;

import React, {useState, useEffect} from 'react'
import './index.css'
import ToDoList from './ToDo\'s/ToDoList';
import ToDoForm from './ToDo\'s/ToDoForm';


function App() {

  const toDosList = 'http://127.0.0.1:3000/todos'

  const [toDoList, setToDoList] = useState([])

  const fetchToDoData = async () => {
    const res = await fetch(toDosList)
    const data = await res.json()
    setToDoList(data)
    console.log(data);
  }

  useEffect(() => {
    fetchToDoData()
  },[])

  

    
  return (
    <div className="App">
      <h1>To Do List</h1>
      <ToDoForm />
      <ToDoList toDoList={toDoList}/>
      
    </div>
  );
}

export default App;

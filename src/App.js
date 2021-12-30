import { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import './App.css';

const todos=[
  {id : 0, task : "EATING", done :false},
  {id : 1, task : "SLEEPING", done :false},
  {id : 2, task : "REPEAT", done :false}
]

function App() {

const [task, setTask] = useState('')
const [todoss, setTodoss] = useState(todos)


const addTodos=()=>{ 
     const updateTodos=[...todoss, {id : todoss.length, task : task, done :false}]
     setTodoss(updateTodos)  
     console.log(updateTodos)
    }
const deleteTodos=(id)=>{ setTodoss(todoss.filter(el=>el.id!==id))    }
const doneTodos=(id)=>{setTodoss(todoss.map(el=>el.id===id ?{ ...el, done:!el.done}:el))}

  return (
    <div className="App">


      <h1>TO DO LIST</h1>
      <InputGroup className="mb-3">
    <FormControl
      placeholder="What are you going to do"
      aria-label="Task"
      aria-describedby="basic-addon2"
      onChange={(event)=>setTask(event.target.value.toUpperCase()) }
    />
    <Button variant="primary" onClick={ addTodos} id="button-addon2">
      ADD TO MY TO DO LIST
    </Button>
  </InputGroup>
      {todoss.map(el=>
      <div key= {el.id} >
            <h3  style={{textDecoration : el.done ?"line-through":null}}>{el.task}</h3> 
            <Button variant="outline-danger" onClick={()=>deleteTodos(el.id) }>Delete</Button>
            <Button variant="outline-success" onClick={()=>doneTodos(el.id)}>D o n e</Button>   
      </div>
        )}
  
  </div>
  );
}

export default App;

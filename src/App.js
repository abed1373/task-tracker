import "./App.css"
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Form from "./components/Form";
import Tasklist from "./components/Tasklist";

// get the data from localstorage
const getLocalTasks=()=>{
  const list=localStorage.getItem('lists')
  console.log(list);
  if(list){
    return JSON.parse( localStorage.getItem('lists'));
  }else{
    return [];
  }
}


const App=()=> {

  
    
   
 
  const [input,setInput]=useState('');
  const [tasks,setTasks]=useState(getLocalTasks())
  const [editTask,setEditTask]=useState(null)
  
  // add data to localStorage
  useEffect(()=>{
localStorage.setItem("lists",JSON.stringify(tasks))
  },[tasks])
  

  return (
   <div className='container'>
    <div className='app-wrapper'>
      <div>
       <Header/>
</div>
      <div>
        <Form
         input={input}
         setInput={setInput}
         tasks={tasks}
         setTasks={setTasks}
         editTask={editTask}
         setEditTask={setEditTask}
      />
      </div>
      <div>
        <Tasklist
         tasks={tasks}
        setTasks={setTasks}
        setEditTask={setEditTask}
        />
      </div>
    </div>
   </div>
  );
}

export default App;
